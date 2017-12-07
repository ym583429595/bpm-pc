<template>
  <ul class="searchList">
    <li v-for="item in searchResult" class="father-li">
      <div class="father-icon" :class="item.icon" v-html="   item.category" :title="item.category"></div>
      <ul>
        <li v-for="item in item.data" class="son-li">
          <h4 v-html="item.smCat"> <i :class="item.star"></i></h4>
          <h4 v-html="item.des"></h4>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script type="text/javascript">
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'searchList',
  data() {
    return {
      lightText: '',
    };
  },
  computed: {
    ...mapGetters([
      'searchResult',
    ]),
    // ...mapState(['searchResult']),
    // searchResult() {
    //   return this.$store.getters.searchResult;
    // },
  },

};
</script>
<style type="text/css" scoped>
  .searchList{
    text-align: left;
    font-size: 16px;
    color:#dedede;
  }
  .father-li{
    border-top:1px solid #dedede;
    padding:20px 0;
  }
  .father-icon{
    margin-left:20px;
  }
  .son-li{
    padding:10px 20px;
  }
  .son-li:hover{
    background-color: blue;
  }
</style>