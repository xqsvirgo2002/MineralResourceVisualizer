<template>
    <div>
      <h1>Production of Mineral Raw Materials by Countries</h1>
      <div ref="boxplot" style="width: 100%; height: 600px;"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'MineralProductionByCountries',
    data() {
      return {
        chart: null,
      };
    },
    mounted() {
      this.loadDataAndDrawChart();
    },
    methods: {
      async loadDataAndDrawChart() {
        try {
          // 加载 JSON 数据
          const response = await import('@/assets/newdata.json'); // 替换为您的 JSON 文件路径
          const data = response.default;
          this.drawChart(data);
        } catch (error) {
          console.error('Failed to load data:', error);
        }
      },
      drawChart(data) {
        // 初始化 ECharts 实例
        this.chart = echarts.init(this.$refs.boxplot);
  
        // 准备箱线图数据
        const categories = Object.keys(data);
        const seriesData = [];
  
        categories.forEach(category => {
          const values = [];
          for (let year = 2017; year <= 2021; year++) {
            values.push(data[category][year.toString()]);
          }
          seriesData.push(values);
        });
  
        // ECharts 箱线图配置
        const option = {
          title: {
            text: 'Production of Mineral Raw Materials by Countries',
          },
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: categories
          },
          yAxis: {
            type: 'value',
            name: 'Production'
          },
          series: [
            {
              name: 'Production',
              type: 'boxplot',
              data: seriesData
            }
          ]
        };
  
        // 设置图表配置
        this.chart.setOption(option);
      }
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  };
  </script>
  
  <style scoped>
  /* 添加样式 */
  </style>
  