import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MineralProductionChart from '@/components/MineralProductionChart.vue';
import StackedAreaChart from '@/components/StackAreaChart.vue';
import GlobalMineralChart from '@/components/GlobalMineralChart.vue';
import GlobalMineralProduction from '@/components/GlobalMineralProduction.vue';
import GlobalMineralHeatMap from '@/components/GlobalMineralHeatMap.vue';
import WorldMap from '@/components/WorldMap.vue'
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: 'mineral-production-chart',  // 注意，这里没有斜杠
    name: 'MineralProductionChart',
    component: MineralProductionChart,
  },
  {
    path: 'stack-area-chart',  // 注意，这里没有斜杠
    name: 'StackedAreaChart',
    component: StackedAreaChart,
  },
  {
    path: 'global-mineral-chart',  // 注意，这里没有斜杠
    name: 'GlobalMineralChart',
    component: GlobalMineralChart,
  },
  {
    path: 'global-mineral-production',  // 注意，这里没有斜杠
    name: 'GlobalMineralProduction',
    component: GlobalMineralProduction,
  },
  {
    path: 'global-mineral-heat-map',  // 注意，这里没有斜杠
    name: 'GlobalMineralHeatMap',
    component: GlobalMineralHeatMap,
  },
  {
    path: '/world-map',  // 注意，这里没有斜杠
    name: 'WorldMap',
    component: WorldMap,
  },
  

  // ...其他顶级路由（如果有）...
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
