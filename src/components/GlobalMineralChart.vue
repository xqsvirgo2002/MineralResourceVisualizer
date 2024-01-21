<!-- <el-row :gutter="20">
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
        </el-row> -->
<template>
    <div>
      <h1>各矿物生产比较</h1>
  
      <!-- 上面两个图表容器 -->
      <div class="top-charts">
        <div class="chart-container">
            <el-row :gutter="20">
    <el-col :span="24">
        <el-card class="chart-card">
            <div ref="chart1" class="chart"></div>
        </el-card>
    </el-col>
</el-row>
<el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        该图表展示了铝、铝土矿、铜、铅和锌等关键矿物的全球生产量。从2017年到2021年，各矿物的生产量呈现出不同的增长趋势，反映了全球市场对这些矿物的需求变化。
                    </div>
                </el-card>
            </el-col>
        </el-row> 
        </div>
        <div class="chart-container">
            <el-row :gutter="20">
    <el-col :span="24">
        <el-card class="chart-card">
            <div ref="chart2" class="chart"></div>
        </el-card>
    </el-col>
</el-row>
<el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        本图表聚焦于铁矿石、铬、锰、镍和钛的全球产量。这些矿物是工业和制造业的重要原材料，其生产趋势对全球经济有着重要影响。
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
      </div>
  
      <!-- 下面两个图表容器 -->
      <div class="bottom-charts">
        <div class="chart-container">
            <el-row :gutter="20">
    <el-col :span="24">
        <el-card class="chart-card">
            <div ref="chart3" class="chart"></div>
        </el-card>
    </el-col>
</el-row>
<el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        第三个图表关注于贵金属，包括黄金、钯金、铂金、铑和白银。这些金属在全球市场上具有重要的金融和工业价值，其生产和价格变化受到密切关注。
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
        <div class="chart-container">
            <el-row :gutter="20">
    <el-col :span="24">
        <el-card class="chart-card">
            <div ref="chart4" class="chart"></div>
        </el-card>
    </el-col>
</el-row>
<el-row :gutter="20">
            <el-col :span="24">
                <el-card class="analysis-card">
                    <div class="analysis-text">
                        最后一个图表呈现的是矿物燃料，如蒸汽煤、焦煤、硬煤、褐煤、石油和油页岩等的全球产量。这些燃料是现代经济的支柱，对能源市场和环境政策有着深远影响。
                    </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
      </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

const chart1Data = {
    "Commodity": [
        "铝", "铝土矿", "铜", "铅", "锌"
    ],
    "2017": [60544944, 311864443, 20083860, 4654192, 11898987],
    "2018": [64443050, 337375396, 20701144, 4629440, 12257076],
    "2019": [63214479, 361800355, 20649981, 4941593, 13081570],
    "2020": [65381119, 378992038, 20855700, 4745630, 12668276],
    "2021": [67668825, 379850872, 21415370, 4680596, 12928724]
};

const chart2Data = {
    "Commodity": ["铁矿石", "铬", "锰", "镍", "钛"],
    "2017": [1511758884, 14142863, 18758889, 2141797, 7120354],
    "2018": [1524574245, 15188744, 19609756, 2377719, 7550118],
    "2019": [1551335349, 15779216, 21164890, 2707513, 7900029],
    "2020": [1524139484, 11967592, 19623184, 2477828, 8503499],
    "2021": [1635056040, 14676208, 21219335, 2812251, 8493291]
};

const chart3Data = {
    "Commodity": ["黄金", "钯金", "铂金", "铑", "白银"],
    "2017": [3336485, 204633, 184641, 23074, 27054523],
    "2018": [3384486, 223387, 189221, 22938, 27836005],
    "2019": [3327965, 225409, 185502, 23814, 28085662],
    "2020": [3205661, 199902, 165619, 20970, 26342561],
    "2021": [3235183, 212590, 190865, 24479, 25938922]
};

const chart4Data = {
    "Commodity": ["蒸汽煤", "焦煤", "硬煤(总计)", "褐煤", "煤(总计)", "石油", "油页岩", "油砂*"],
    "2017": [5531843735, 1022714054, 6554557789, 820800439, 7375358228, 4387148840, 22534973, 169006100],
    "2018": [5832247979, 1032969261, 6865217240, 800482271, 7665699511, 4487781435, 22794380, 176864600],
    "2019": [5958338079, 1056251596, 7014589675, 734494823, 7749084498, 4486614813, 16628394, 176766200],
    "2020": [5724048030, 1035840063, 6759888093, 637137537, 7397025630, 4195820549, 13054894, 167943300],
    "2021": [5967292267, 1056173086, 7023465353, 687108149, 7710573502, 4250303021, 12674826, 182022400]
};


export default {
    name: 'MineralProductionChart',
    data() {
        return {
            chart1Data,
            chart2Data,
            chart3Data,
            chart4Data
        };
    },
    mounted() {
        // 初始化第一个图表
        this.chart1Instance = echarts.init(this.$refs.chart1);
        this.initChart1();

        // 初始化第二个图表
        this.chart2Instance = echarts.init(this.$refs.chart2);
        this.initChart2();

        // 初始化第三个图表
        this.chart3Instance = echarts.init(this.$refs.chart3);
        this.initChart3();
        // 初始化第四个图表
        this.chart4Instance = echarts.init(this.$refs.chart4);
        this.initChart4();
    },
    methods: {
        // 初始化第一个图表
        initChart1() {
            const option1 = {
                tooltip: {
                    trigger: 'axis', // 设置tooltip的触发方式，'axis'表示鼠标悬停在坐标轴上时显示tooltip
                    formatter: function (params) {
                        // 在tooltip中显示详细内容
                        let content = params[0].name + '<br/>';
                        params.forEach(function (item) {
                            content += item.seriesName + ': ' + item.value + '<br/>';
                        });
                        return content;
                    }
                },
                title: {
                    text: '铁和铁合金金属的全球生产'
                },
                xAxis: {
                    type: 'category',
                    data: this.chart1Data.Commodity
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.chart1Data['2017'],
                        type: 'bar',
                        name: '2017'
                    },
                    {
                        data: this.chart1Data['2018'],
                        type: 'bar',
                        name: '2018'
                    },
                    {
                        data: this.chart1Data['2019'],
                        type: 'bar',
                        name: '2019'
                    },
                    {
                        data: this.chart1Data['2020'],
                        type: 'bar',
                        name: '2020'
                    },
                    {
                        data: this.chart1Data['2021'],
                        type: 'bar',
                        name: '2021'
                    }
                ]
            };
            this.chart1Instance.setOption(option1);
        },

        // 初始化第二个图表
        initChart2() {
            const option2 = {
                tooltip: {
                    trigger: 'axis', // 设置tooltip的触发方式，'axis'表示鼠标悬停在坐标轴上时显示tooltip
                    formatter: function (params) {
                        // 在tooltip中显示详细内容
                        let content = params[0].name + '<br/>';
                        params.forEach(function (item) {
                            content += item.seriesName + ': ' + item.value + '<br/>';
                        });
                        return content;
                    }
                },
                title: {
                    text: '有色金属的全球生产'
                },
                xAxis: {
                    type: 'category',
                    data: this.chart2Data.Commodity
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.chart2Data['2017'],
                        type: 'bar',
                        name: '2017'
                    },
                    {
                        data: this.chart2Data['2018'],
                        type: 'bar',
                        name: '2018'
                    },
                    {
                        data: this.chart2Data['2019'],
                        type: 'bar',
                        name: '2019'
                    },
                    {
                        data: this.chart2Data['2020'],
                        type: 'bar',
                        name: '2020'
                    },
                    {
                        data: this.chart2Data['2021'],
                        type: 'bar',
                        name: '2021'
                    }
                ]
            };
            this.chart2Instance.setOption(option2);
        },

        // 初始化第三个图表
        initChart3() {
            const option3 = {
                tooltip: {
                    trigger: 'axis', // 设置tooltip的触发方式，'axis'表示鼠标悬停在坐标轴上时显示tooltip
                    formatter: function (params) {
                        // 在tooltip中显示详细内容
                        let content = params[0].name + '<br/>';
                        params.forEach(function (item) {
                            content += item.seriesName + ': ' + item.value + '<br/>';
                        });
                        return content;
                    }
                },
                title: {
                    text: '贵金属的全球生产'
                },
                xAxis: {
                    type: 'category',
                    data: this.chart3Data.Commodity
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.chart3Data['2017'],
                        type: 'bar',
                        name: '2017'
                    },
                    {
                        data: this.chart3Data['2018'],
                        type: 'bar',
                        name: '2018'
                    },
                    {
                        data: this.chart3Data['2019'],
                        type: 'bar',
                        name: '2019'
                    },
                    {
                        data: this.chart3Data['2020'],
                        type: 'bar',
                        name: '2020'
                    },
                    {
                        data: this.chart3Data['2021'],
                        type: 'bar',
                        name: '2021'
                    }
                ]
            };
            this.chart3Instance.setOption(option3);
        },
        // 初始化第四个图表
        initChart4() {
            const option4 = {
                tooltip: {
                    trigger: 'axis', // 设置tooltip的触发方式，'axis'表示鼠标悬停在坐标轴上时显示tooltip
                    formatter: function (params) {
                        // 在tooltip中显示详细内容
                        let content = params[0].name + '<br/>';
                        params.forEach(function (item) {
                            content += item.seriesName + ': ' + item.value + '<br/>';
                        });
                        return content;
                    }
                },
                title: {
                    text: '矿物燃料的全球生产'
                },
                xAxis: {
                    type: 'category',
                    data: this.chart4Data.Commodity
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.chart4Data['2017'],
                        type: 'bar',
                        name: '2017'
                    },
                    {
                        data: this.chart4Data['2018'],
                        type: 'bar',
                        name: '2018'
                    },
                    {
                        data: this.chart4Data['2019'],
                        type: 'bar',
                        name: '2019'
                    },
                    {
                        data: this.chart4Data['2020'],
                        type: 'bar',
                        name: '2020'
                    },
                    {
                        data: this.chart4Data['2021'],
                        type: 'bar',
                        name: '2021'
                    }
                ]
            };
            this.chart4Instance.setOption(option4);
        },

    },
};
</script>
  
<style scoped>
.top-charts, .bottom-charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.chart-container {
  width: 45%;
  margin-bottom: 10px;
}

.chart {
  height: 400px;
}

.chart-description {
  border: 1px solid #eaecef;
  padding: 10px;
  margin-top: 10px;
  background-color: #f7f7f7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 更换为可读性强的字体 */
}
</style>

  