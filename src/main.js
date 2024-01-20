// src/main.js
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as ECharts from 'echarts';

Vue.use(ElementUI);
Vue.prototype.$echarts = ECharts; // 将 ECharts 添加到 Vue 原型链上

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
