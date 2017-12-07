import * as types from '../mutations-types';

const state = {
  searchResult: [],
  lightText: '',
};

const getters = {
  searchResult: state => {
    console.log(state.lightText);
    const reg = new RegExp('(' + state.lightText + ')', 'g');
    return state.searchResult.map(item =>{
      if( state.lightText ) {
         item.category = item.category.replace(reg, "<i style='color:red'>" + state.lightText + "</i>");
         let sonItem = item.data;
         for(let i = 0; i < sonItem.length; i++) {
          sonItem[i].smCat = sonItem[i].smCat.replace(reg, "<i style='color:red'>" + state.lightText + "</i>");
         }
      }
       return item;
    });
  },
  lightText: state => state.lightText,
};

const mutations = {
  [types.TO_SEARCH](state, data) {
    state.lightText = data.searchText;
    state.searchResult = [
    {
      icon: 'el-icon-menu',
      category: '费用报销类',
      data: [{
        smCat: '报销流程',
        star: false,
        des: '适用于集团的费用',
      }, {
        smCat: '报销流程2',
        star: true,
        des: '适用于集团的费用',
      }, {
        smCat: '报销流程3',
        star: false,
        des: '适用于集团的费用',
      }],
    }, {
      icon: 'el-icon-menu',
      category: '报销类',
      data: [{
        smCat: '流程',
        star: false,
        des: '适用于集团的费用',
      }, {
        smCat: '流程2',
        star: true,
        des: '适用于集团的费用',
      }, {
        smCat: '流程3',
        star: false,
        des: '适用于集团的费用',
      }],
    }];
  },
};

const actions = {
  toSearch({ commit }, data) {
    commit(types.TO_SEARCH, data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
