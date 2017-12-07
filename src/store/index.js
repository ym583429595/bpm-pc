import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/modules/search';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
  },
});
