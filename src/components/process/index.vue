<template>
  <el-collapse accordion v-model="activeNames">
    <el-collapse-item class='textLeft' name='1'>
      <template slot="title">
        待办流程<i class="header-icon el-icon-info"></i>
      </template>
      <Search role="todoProcess" ></Search>
      <div v-show='!lightText'>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>
    <el-collapse-item  class='textLeft' name='2'>
      <template slot="title">
        发起流程<i class="header-icon el-icon-info"></i>
      </template>
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>
</el-collapse>
</template>
<script type="text/javascript">
import Search from '@/components/process/Search';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeNames: ['1'],
    };
  },
  computed: {
    ...mapGetters([
      'lightText',
    ]),
  },
  components: { Search },
};
</script>
<style type="text/css" scoped>
  .textLeft{
    text-align: left;
  }
</style>