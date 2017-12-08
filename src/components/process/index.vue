<template>
  <el-collapse accordion v-model="activeNames">
    <el-collapse-item class='textLeft' name='1'>
      <template slot="title">
        待办流程<i class="header-icon el-icon-info"></i>
      </template>
        <el-input placeholder="请输入流程名" v-model="todoSearch" class="search" @keyup.13.native="toSearch">
        <template slot="append"><i class="el-icon-search" @click="toSearch"></i></template>
      </el-input>
      <el-tabs v-model="tabName" >
        <el-tab-pane label="待处理流程（BPM）" name="bpm">
          <TableList></TableList>
        </el-tab-pane>
        <el-tab-pane label="待处理流程（CPC）" name="cpc">cpc cpc</el-tab-pane>
      </el-tabs>
    </el-collapse-item>
    <el-collapse-item  class='textLeft' name='2'>
      <template slot="title">
        发起流程<i class="header-icon el-icon-info"></i>
      </template>
      <Search ></Search>
      <div v-show='!lightText'>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    </el-collapse-item>
</el-collapse>
</template>
<script type="text/javascript">
import Search from '@/components/process/Search';
import TableList from '@/components/process/TableList';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      todoSearch: '',
      activeNames: ['1'],
      tabName: 'bpm',
    };
  },
  computed: {
    ...mapGetters([
      'lightText',
    ]),
  },
  methods: {
    toSearch() {
      let data = {};
      data.searchText = this.todoSearch;
      this.$store.dispatch('searchTodoProcess', data);
    },
  },
  components: { Search, TableList },
};
</script>
<style type="text/css" scoped>
  .textLeft{
    text-align: left;
  }
</style>