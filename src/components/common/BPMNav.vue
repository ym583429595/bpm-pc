<template>
  <ul class="BPMNavUl">
    <li class="navLi" @click="$router.push('process')"><i class="el-icon-menu"></i><span class="navText" >流程中心</span></li>
    <li class="navLi" @click="$router.push('/app/draft')"><i class="el-icon-edit"></i><span class="navText" >我的草稿</span></li>
    <li class="navLi" @click="$router.push('/app/history')"><i class="el-icon-date"></i><span class="navText" >历史流程</span></li>
    <li class="navLi" @click="$router.push('/app/statistics')"><i class="el-icon-date"></i><span class="navText" >统计信息</span></li>
    <li class="navLi" @click="$router.push('/app/infor')"><i class="el-icon-phone-outline"></i><span class="navText" >消息</span></li>
    <li class="navLi" @click="$router.push('/app/setting')"><i class="el-icon-setting"></i><span class="navText" >设置</span></li>
  </ul>
</template>
<script type="text/javascript">
  export default {
    name: 'BPMNav',
  };
</script>
<style type="text/css" scoped>
  .BPMNavUl{
    width:90px;
  }
  .navLi{
    width:100%;
    height:90px;
    text-align: center;
    border-bottom:1px solid #dedede;
    color:#dedede;
    box-sizing: border-box;
  }
  .navLi:hover{
    background-color: #58b2dc;
  }
  .navLi > i{
    font-size: 30px;
    display: block;
    margin:0px auto;
    padding-top: 20px
  }
  .navText{
    margin-top:10px;
    display:inline-block;
  }
</style>