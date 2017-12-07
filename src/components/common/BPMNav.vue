<template>
  <ul class="BPMNavUl" >
    <!-- <li class="navLi" :class="{active:actives[0]}"@click="changePath('/app/process',0);isActive=!isActive"><i class="el-icon-menu"></i><span class="navText" >流程中心</span></li>
    <li class="navLi" :class="{active:actives[1]}" @click="changePath('/app/draft',1)"><i class="el-icon-edit"></i><span class="navText" >我的草稿</span></li>
    <li class="navLi" :class="{active:actives[2]}"@click="changePath('/app/history',2)"><i class="el-icon-date"></i><span class="navText" >历史流程</span></li>
    <li class="navLi" :class="{active:actives[3]}"@click="changePath('/app/statistics',3)"><i class="el-icon-date"></i><span class="navText" >统计信息</span></li>
    <li class="navLi" :class="{active:actives[4]}"@click="changePath('/app/infor',4)"><i class="el-icon-phone-outline"></i><span class="navText" >消息</span></li>
    <li class="navLi" :class="{active:actives[5]}"@click="changePath('/app/setting',5)"><i class="el-icon-setting"></i><span class="navText" >设置</span></li> -->
    <li v-for=" (item, index) in navs" class="navLi" :class="{active: $route.path==item.path || item.path == nowNav}" @click="changePath(item.path,index)">
      <i :class="item.img"></i>
      <span class="navText" >{{item.title}}</span>
    </li>
  </ul>
</template>
<script type="text/javascript">
  export default {
    name: 'BPMNav',
    data() {
      return {
        navs: [{
          path: '/app/process',
          title: '流程中心',
          active: false,
          img: 'el-icon-menu',
        }, {
          path: '/app/draft',
          title: '我的草稿',
          active: false,
          img: 'el-icon-edit',
        }, {
          path: '/app/history',
          title: '历史流程',
          active: false,
          img: 'el-icon-date',
        }, {
          path: '/app/statistics',
          title: '统计信息',
          active: false,
          img: 'el-icon-date',
        }, {
          path: '/app/infor',
          title: '消息',
          active: false,
          img: 'el-icon-phone-outline',
        }, {
          path: '/app/setting',
          title: '设置',
          active: false,
          img: 'el-icon-setting',
        }],
        nowNav: '',
      };
    },
    beforeRouteEnter(to, from, next) {
      console.log(to);
      alert(from);
      next();
    },
    // mounted:function(){
    //   //this.initRouter();
    // },
    methods: {
      // initRouter() {
      //   console.log(this.$route.path);
      //   this.navs.map(item =>{
      //     if(item.path = this.$route.path)
      //   }
      // );
      // },
      changePath(path) {
        this.nowNav = path;
        this.$router.push(path);
      },
    },
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
  .navLi:hover,.active{
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