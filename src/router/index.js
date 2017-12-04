import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/components/common/Home.vue';
import Process from '@/components/process/index.vue';
import Draft from '@/components/draft/index.vue';
import History from '@/components/history/index.vue';
import Statistics from '@/components/statistics/index.vue';
import Infor from '@/components/infor/index.vue';
import Setting from '@/components/setting/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: App,
      children: [{
        path: 'process',
        componnet: Process,
      }, {
        path: 'draft',
        componnet: Draft,
      }, {
        path: 'history',
        componnet: History,
      }, {
        path: 'statistics',
        componnet: Statistics,
      }, {
        path: 'infor',
        componnet: Infor,
      }, {
        path: 'setting',
        componnet: Setting,
      }],
    }, {
      path: '/home',
      component: Home,
    },
  ],
});
