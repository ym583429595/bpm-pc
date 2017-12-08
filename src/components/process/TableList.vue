<template>
  <div class="">
    <div v-show='!loading'>
    <!-- 筛选按钮区域 -->
    <el-badge :value="todoProcessData.length" :max="99" class="item " @click.native="filterTitle('')">
      <el-button type="text" >全部</el-button>
    </el-badge>
    <el-badge :value="112" :max="99" class="item " v-for='item in todoProcessData' @click.native="filterTitle(item.title)">
      <el-button type="text" >{{item.title}}</el-button>
    </el-badge>
    </div>
    <!-- table列表区 -->
    <el-table :data="todoData" stripe v-loading="loading" element-loading-text="拼命加载中..." style="width: 100%" height="443" @row-click="rowClick" @sort-change="tableSortChange"  @cell-mouse-enter="handleMouseEnter" @cell-mouse-leave="handleMouseLeave">
      <el-table-column show-overflow-tooltip prop="process" label="流程主题" width="120"></el-table-column>
      <el-table-column prop="title" label="流程类型" width="120"></el-table-column>
      <el-table-column prop="node" label="节点属性" width="120"></el-table-column>
      <el-table-column prop="username" label="启动用户" width="120"></el-table-column>
      <el-table-column prop="create_time" sortable="custom" inline-template label="到达日期" width="260">
          <div>{{ row.create_time | moment('YYYY年MM月DD日 HH:mm:ss')}}</div>
      </el-table-column>
      <el-table-column prop="end_time" sortable="custom" inline-template label="过期日期" width="260">
          <div>{{ row.end_time | moment('YYYY年MM月DD日 HH:mm:ss')}}</div>
      </el-table-column>
      <el-table-column  label="操作" width="250">
        <template slot-scope="scope">
            <el-popover trigger="hover" ref="popover{{$index}}" placement="bottom-end" width="160" >
              <p>这是一段内容这是一段内容确定删除吗？{{scope.row.end_time}}</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="clickAgreeFromPopover(false, scope.row.id)">取消</el-button>
                <el-button type="primary" size="mini" @click="clickAgreeFromPopover(true, scope.row.id)">确定</el-button>
              </div>
            </el-popover>
            <el-button type="text" v-popover:popover{{$index}} :class='{notAgree:!scope.row.agree}' size="mini" @click="agree(scope.$index, scope.row)">通过</el-button>
            <el-button type="text" size="mini" @click="notAgree(scope.$index, scope.row)">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[1, 2, 5, 100]" :page-size="pageSize" :current-page="currentPage" layout="total, sizes, prev, pager, next, jumper" :total="todoProcessData.length">
      </el-pagination>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';

  export default {
    name: 'tableList',
    data() {
      return {
        todoData: [],
        showAgreePopover: false,
        nowRowId: 0,
        loading: true,
        currentPage: 1,
        pageSize: 1,
      };
    },
    computed: {
      ...mapGetters(['todoProcessData']),
    },
    mounted() {
      this.getInitData();
    },
    methods: {
      getInitData() {
        let data = {};
        data.searchText = '';
        this.$store.dispatch('getTodoProcess', data);
        setTimeout(() => {
          this.todoData = this.todoProcessData;
          this.loading = false;
        }, 1000);
      },
      // 过滤todoProcessData的副本，实现过滤流程类型
      filterTitle(filter) {
        let newData;
        console.log(this.todoData);
        if (filter) {
           newData = this.todoProcessData.filter(item => {
            return item.title === filter;
          });
        }
        this.todoData = newData || this.todoProcessData;
      },
      agree(index, row) {
        console.log(row + index);
      },
      notAgree(index, row) {
        alert(row);
      },
      tableSortChange() {

      },
      tableSelectionChange() {
        alert('neironggaibian');
      },
      rowClick(row, event, column) {
        // 表列被点击触发跳转详细页
        // if (column.label == "操作") {
        console.log(column);

        // }
      },
      handleMouseEnter(row, column, cell, event) {
        //不可点击时，触发说明
        // if (!row.agree) {
        //   this.showAgreePopover = true;
        //   console.log(row.end_time);
        // }
      },
      handleMouseLeave(row, column, cell, event) {
        // if(this.nowRowId != row.id){
        //   this.showAgreePopover = false;
        //   this.nowRowId = row.id;
        // }
      },
      clickAgreeFromPopover(flag, id) {
        this.showAgreePopover = false;
        console.log(id);
      },
      //每页显示数据量变更
     handleSizeChange: function(val) {
      console.log(`每页 ${val} 条`);
         this.pagesize = val;
         // this.loadData(this.criteria, this.currentPage, this.pagesize);
     },
     // 页码变更
     handleCurrentChange: function(val) {
      console.log(`当前 ${val} 条`);
         // this.currentPage = val;
         // this.loadData(this.criteria, this.currentPage, this.pagesize);
     },
    },
  };
</script>
<style type="text/css" scoped>
  .item{
    padding:0 40px 0 10px;
    border-right: 1px solid #dedede;
  }
  .notAgree{
    color:#dedede;
    cursor: not-allowed;
  }
</style>