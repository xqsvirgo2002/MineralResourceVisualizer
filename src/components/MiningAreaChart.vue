<template>
  <div>
    <div ref="lineChart" style="width: 600px;height:400px;"></div>
    <div ref="stackedAreaChart" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default {
  name: 'MiningProductionCharts',
  data() {
    return {
      miningData: [],
      years: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('/path/to/your/6.1.1.by Continents.json')
        .then(response => {
          const data = response.data;
          this.processData(data);
          this.drawLineChart();
          this.drawStackedAreaChart();
        })
        .catch(error => console.error('Error loading the data:', error));
    },
    processData(data) {
      // 假设第一个元素包含年份信息
      this.years = Object.keys(data[0]).slice(1);

      // 将数据转换为适用于图表的格式
      this.miningData = data.slice(1).map((row) => {
        return {
          name: row['continent'],
          data: this.years.map((year) => row[year])
        };
      });
    },
    drawLineChart() {
      const lineChart = echarts.init(this.$refs.lineChart);
      const option = {
        title: { text: '全球矿产总产量变化' },
        tooltip: { trigger: 'axis' },
        legend: { data: this.miningData.map(item => item.name) },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', boundaryGap: false, data: this.years },
        yAxis: { type: 'value' },
        series: this.miningData.map(item => ({
          name: item.name,
          type: 'line',
          data: item.data
        }))
      };
      lineChart.setOption(option);
    },
    drawStackedAreaChart() {
      const totalProduction = this.years.map(year => {
        return this.miningData.reduce((sum, item) => sum + item.data[this.years.indexOf(year)], 0);
      });

      const stackedAreaChart = echarts.init(this.$refs.stackedAreaChart);
      const option = {
        title: { text: '不同大陆在全球矿产总产量的占比' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } } },
        legend: { data: this.miningData.map(item => item.name) },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: [{ type: 'category', boundaryGap: false, data: this.years }],
        yAxis: [{ type: 'value' }],
        series: this.miningData.map(item => ({
          name: item.name,
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: { focus: 'series' },
          data: item.data.map((value, index) => value / totalProduction[index] * 100)
        }))
      };
      stackedAreaChart.setOption(option);
    }
  }
};
</script>

<style>
/* 你的样式 */
</style>
