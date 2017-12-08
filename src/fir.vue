<template>
  <div class="">
    <router-view ></router-view>
  </div>
</template>
<script type="text/javascript">
import App from './App';

export default {
  components: { App },
};
</script>
<style type="text/css" >
  body{
    font-size: 16px;
  }
  /*覆盖框架样式，使badge居中*/
  .item .el-badge__content.is-fixed{
    top: 20px;
    right: 40px;
  }
</style>