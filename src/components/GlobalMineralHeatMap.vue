<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card class="chart-card">
                    <div ref="MineralProductionHeatmap" class="chart"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        本热力图展现了不同矿产在全球几个主要国家中的生产量分布情况。图中的颜色深浅代表了生产量的多寡，从深红色表示生产量最高，到浅黄色表示生产量较低。可以明显看出，中国在多数矿产的生产上占据了领先地位，特别是在蒸汽煤和铁矿石的生产上。此外，澳大利亚在铝土矿和铁矿石的生产上也表现突出。而印度和美国在石油生产上的数量相对较高。
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'MineralProductionHeatmap',
    data() {
        return {
            heatmapInstance: null,
            heatmapData: [],
            minerals: [],
            countries: [],
            years: ['2017', '2018', '2019', '2020', '2021']
        };
    },
    mounted() {
        this.loadHeatmapData();
    },
    methods: {
        loadHeatmapData() {
            import('@/assets/output2.json').then(data => {
                this.minerals = Object.keys(data);

                // 处理国家列表
                let countrySet = new Set();
                Object.values(data).forEach(mineralData => {
                    if (Array.isArray(mineralData)) {
                        mineralData.forEach(item => countrySet.add(item.Country));
                    }
                });
                this.countries = Array.from(countrySet);

                // 处理热力图数据
                this.minerals.forEach((mineral, mineralIndex) => {
                    let mineralData = data[mineral];
                    if (Array.isArray(mineralData)) {
                        mineralData.forEach(countryData => {
                            this.years.forEach(year => {
                                const countryIndex = this.countries.indexOf(countryData.Country);
                                this.heatmapData.push([mineralIndex, countryIndex, countryData[year] || 0]);
                            });
                        });
                    }
                });

                this.initHeatmap();
            });
        },
        initHeatmap() {
            const heatmapDom = this.$refs.MineralProductionHeatmap;
            this.heatmapInstance = echarts.init(heatmapDom);

            const options = {
                title: {
                    text: '不同矿产在各国各年份的生产量热力图',
                    left: 'center'
                },
                tooltip: {
                    position: 'top'
                },
                xAxis: {
                    type: 'category',
                    data: this.minerals,
                    axisLabel: {
                interval: 0,     // 显示所有标签
                rotate: 45,      // 标签旋转45度
                overflow: 'break' // 允许标签溢出并换行
            }
                },
                yAxis: {
                    type: 'category',
                    data: this.countries
                },
                visualMap: {
                    min: 0,
                    max: 600000000, // 根据数据集的最大值进行调整
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%'
                },
                series: [{
                    name: '生产量',
                    type: 'heatmap',
                    data: this.heatmapData,
                    label: {
                        show: false
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };

            this.heatmapInstance.setOption(options);
        }
    }
};
</script>


<style scoped>
/* 添加自定义样式 */
.chart {
    width: 100%;
    height: 500px; /* 为热力图调整高度 */
    margin-top: 20px;
}
.analysis-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
  background-color: #f7f7f7;
}

.analysis-text {
  font-size: 16px; /* 增大字号 */
  line-height: 1.8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 更换为可读性强的字体 */
  text-align: justify;
}
</style>
