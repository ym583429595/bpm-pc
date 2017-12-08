import * as types from '../mutations-types';

const state = {
  todoProcessData: [],
  searchText: '',
  searchResult: [],
};

const getters = {
  // searchResult: state => {
  //   console.log(state.lightText);
  //   const reg = new RegExp('(' + state.lightText + ')', 'g');
  //   return state.searchResult.map(item =>{
  //     if( state.lightText ) {
  //        item.category = item.category.replace(reg, "<i style='color:red'>" + state.lightText + "</i>");
  //        let sonItem = item.data;
  //        for(let i = 0; i < sonItem.length; i++) {
  //         sonItem[i].smCat = sonItem[i].smCat.replace(reg, "<i style='color:red'>" + state.lightText + "</i>");
  //        }
  //     }
  //      return item;
  //   });
  // },
  // lightText: state => state.lightText,
  todoProcessData: state => state.todoProcessData,
};

const mutations = {
  [types.TO_SEARCH](state, data) {
    state.searchText = data.searchText;
    state.searchResult = [];

  },
  [types.GET_TODO_PROCESS](state, data) {
    state.todoProcessData = [{
          id: 1, process: '1212131231231231233', title: "sac", node: "node", username: "ym",
          create_time: "2012-02-23 20:12:87",end_time: "2018-02-2 12:21:41", agree: true
        }, {
          id: 2,process: '1sc 3',title: "s121ww3c",node: "nod22e",username: "yaam",
          create_time: "2014-02-23 20:12:87",end_time: "2028-02-2 12:21:41", agree: false
        }, {
          id: 3,process: '1212131231231231233',title: "ssac",node: "node",username: "ym",
          create_time: "2012-02-23 20:12:87",end_time: "2038-02-2 12:21:41", agree: false
        }, {
          id: 4,process: '1212131231231231233',title: "sac",node: "node",username: "ym",
          create_time: "2012-02-23 20:12:87",end_time: "2048-02-2 12:21:41", agree: false
        }, {
          id: 5,process: '1212131231231231233',title: "scac",node: "node",username: "ym",
          create_time: "2012-02-23 20:12:87",end_time: "2058-02-2 12:21:41", agree: false
        },];
  },
  [types.SEARCH_TODO_PROCESS](state, searchText) {
    const t = //'('+searchText+')'/g;
    state.todoProcessData = state.todoProcessData.filter( item => {
      return /a/g.test(item.title);
    })
  },
};

const actions = {
  getTodoProcess({ commit }, data) {
    commit(types.GET_TODO_PROCESS, data);
  },
  searchTodoProcess({ commit }, data) {
    commit(types.SEARCH_TODO_PROCESS, data.searchText);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
