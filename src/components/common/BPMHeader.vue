<template>
  <el-row :gutter="10" class="BPMHeader">
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" :span="3"><div class="grid-content bg-purple-left">232</div></el-col>
    <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9":push="12">
      <div class="grid-content bg-purple-light">
        <ul class="BPMHeader-ul">
          <li @click="showService"><i class="el-icon-service" ></i></li>
          <li class="toChinese changeText" @click="toChinese">中文</li>
           |
          <li class="toEnglish changeText" @click="toEnglish">英文 </li>
          <li  @click="showMenu=!showMenu">
            <i class="el-icon-share"></i>
            <ul class="showMenuUl" v-show="showMenu">
              <li @click="">个人设置</li>
              <li @click="$router.push('/home')">切换用户</li>
            </ul>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
  export default {
    name: 'BPMHeader',
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      showService() {
        alert('客服');
      },
      toChinese() {
        alert('切换为中文');
      },
      toEnglish() {
        alert('切换为英文');
      },
    },
  };
</script>
<style type="text/css" scoped>
  .selectedLang{
    wegiht:600;
  }
  .BPMHeader{
    height:60px;
    line-height: 60px;
    background-color: #58b2dc;
    color:white;
  }
  .BPMHeader-ul>li {
    list-style:none;
    display:inline-block;
    margin:0 20px;
    cursor: pointer;
    width:50px;
  }
  .changeText{
    width:50px;
    display: inline-block;
  }
  .showMenuUl{
    position: absolute;
    color:black;
  }
  .showMenuUl li{
    list-style:none;
    display: block;
  }
  li:hover{
    background-color: blue;
  }
</style>