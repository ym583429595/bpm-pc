<template>
  <div style="text-align: center;">
    <el-input :placeholder="role" v-model="searchText" class="search" @keyup.13.native="changeSearch">
      <template slot="append"><i class="el-icon-search" @click="changeSearch"></i></template>
    </el-input>
    <div class="result" v-if="showResult">
      <SearchResult></SearchResult>
    </div>

  </div>
</template>
<script type="text/javascript">
import SearchResult from '@/components/process/SearchResult';

export default {
  name: 'Search',
  data() {
    return {
      searchText: '',
      showResult: false,
    };
  },
  props: ['role'],
  methods: {
    changeSearch() {
      this.showResult = true;
      const role = this.role;
      const searchText = this.searchText;
      const data = { role, searchText };
      this.$store.dispatch('toSearch', data);
      console.log(this.searchText);
    },
  },
  components: { SearchResult },
};
</script>
<style type="text/css" scoped>
  .search{
    width:600px;
    margin:50px auto;
  }
  .search i{
    font-size: 25px;
  }

</style>