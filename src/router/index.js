import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Home from '@/components/common/Home';
import Process from '@/components/process/index';
import Draft from '@/components/draft/index';
import History from '@/components/history/index';
import Statistics from '@/components/statistics/index';
import Infor from '@/components/infor/index';
import Setting from '@/components/setting/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: App,
      children: [{
        path: '/',
        component: Process,
      }, {
        path: 'process',
        component: Process,
      }, {
        path: 'draft',
        component: Draft,
      }, {
        path: 'history',
        component: History,
      }, {
        path: 'statistics',
        component: Statistics,
      }, {
        path: 'infor',
        component: Infor,
      }, {
        path: 'setting',
        component: Setting,
      }],
    }, {
      path: '/home',
      component: Home,
    }, {
      path: '/',
      redirect: '/app',
    },
  ],
});
