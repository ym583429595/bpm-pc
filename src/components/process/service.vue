<template>
  <el-tabs v-model="initSelected" type="border-card" class="serviceCard">
    <el-tab-pane label="支持人员" name="people">
      <ul>
        <li v-for="item in peoples">
          <i class="el-icon-service"></i>
          <div class="liSee">
            <h5>{{item.name}}</h5>
            <h5>{{item.tel}}</h5>
          </div>
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="制度文档" name="second">制度文</el-tab-pane>
  </el-tabs>
</template>
<script type="text/javascript">
  export default {
    name: 'serviceCard',
    data() {
      return {
        initSelected: 'people',
        peoples: [{
          name: "运维热线",
          tel: "40000-0571-11",
        }, {
          name: "李东辉",
          tel: "费用报销流程负责人",
        }, {
          name: "江狼狼",
          tel: "人力资源it支持",
        },],
      };
    },
  };
</script>
<style type="text/css" scoped>
  .serviceCard{
    width:200px;
    float:right;
    margin:30px 30px 0 0;
  }
  .liSee{
    margin-left:20px;
    border-bottom: 1px solid #dedede;
    display: inline-block;
    padding: 10px 0;
  }
</style>