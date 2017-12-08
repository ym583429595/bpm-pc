import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/modules/search';
import todoProcess from '@/store/modules/todoProcess';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    search,
    todoProcess,
  },
});
