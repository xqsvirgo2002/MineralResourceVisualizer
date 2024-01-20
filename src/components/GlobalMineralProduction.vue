<!-- <template>
    <div class="chart-container">
        <h1>全球矿产产量按国家分布</h1>
        <div ref="GlobalMineralProduction" class="chart"></div>
        <div class="chart-description">
            此图表展示了代表性国家在近年来不同矿产的生产量。可以明显看出，中国在多种矿产，特别是铁矿石和铝土矿的生产量中占据全球领先地位。这反映了中国作为全球工业和建设重心的角色。与此同时，其他国家如澳大利亚和南非在特定矿产如铝和钴的生产上也显示出了它们的重要性。这些数据不仅展示了矿产资源的全球分布，还揭示了资源开发与国家工业能力之间的紧密联系。通过分析这些变化，投资者和政策制定者可以更好地理解全球资源市场的动态，以及各国在全球经济中的地位。
          </div>
    </div>
</template> -->
<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card class="chart-card">
                    <div ref="GlobalMineralProduction" class="chart"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        此图表展示了代表性国家在近年来不同矿产的生产量。可以明显看出，中国在多种矿产，特别是铁矿石和铝土矿的生产量中占据全球领先地位。这反映了中国作为全球工业和建设重心的角色。与此同时，其他国家如澳大利亚和南非在特定矿产如铝和钴的生产上也显示出了它们的重要性。这些数据不仅展示了矿产资源的全球分布，还揭示了资源开发与国家工业能力之间的紧密联系。通过分析这些变化，投资者和政策制定者可以更好地理解全球资源市场的动态，以及各国在全球经济中的地位。
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
import * as echarts from 'echarts';

export default {
    name: 'GlobalMineralProduction',
    data() {
        return {
            chartInstance: null,
            chartData: null
        };
    },
    mounted() {
        this.loadChartData();
    },
    methods: {
        loadChartData() {
            import('@/assets/output.json').then(data => {
                this.chartData = data.default;
                this.initChart();
            });
        },
        initChart() {
            const chartDom = this.$refs.GlobalMineralProduction;
            this.chartInstance = echarts.init(chartDom);

            const options = {
                title: {
                    text: '全球矿产产量按国家分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        let content = '<table>';
                        content += '<tr><td>' + params[0].axisValue + '</td></tr>'; // 第一列的内容
                        params.forEach(function (item) {
                            content += '<tr><td>' + item.seriesName + '</td><td>' + item.value + '</td></tr>'; // 每行的第二和第三列
                        });
                        content += '</table>';
                        return content;
                    }
                },
                legend: {
                    data: Object.keys(this.chartData),
                    orient: 'horizontal',
                    top: 450
                },
                xAxis: {
                    type: 'category',
                    data: this.getCategories()
                },
                yAxis: {
                    type: 'value'
                },
                series: this.getSeriesData()
            };

            this.chartInstance.setOption(options);
        },
        getCategories() {
            const firstSheetData = this.chartData[Object.keys(this.chartData)[0]];
            return firstSheetData.map(item => item.Country);
        },
        getSeriesData() {
            return Object.keys(this.chartData).map(sheetName => ({
                name: sheetName,
                type: 'bar',
                stack: 'total',
                data: this.chartData[sheetName].map(item => item['2021'])
            }));
        }
    }
};
</script>
  
<style scoped>
.chart-container {
    padding: 50px;
    height: 1000px;
    /* 设置图表容器的高度为700像素 */
}

.chart {
    width: 100%;
    height: 500px;
    /* 图表高度为500像素 */
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