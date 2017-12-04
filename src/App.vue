<template>
    <section id="app" class="el-container is-vertical">
      <header class="el-header" style="height: 60px;">
        <BPMHeader></BPMHeader>
      </header>
      <section class="el-container">
        <aside class="el-aside" >
          <BPMnav></BPMnav>
        </aside>
        <main class="el-main">
          <router-view/>
        </main>
      </section>
    </section>
</template>

<script>
import Vue from 'vue';
import { header, aside, main } from 'element-ui';
import BPMHeader from '@/components/common/BPMHeader.vue';
import BPMnav from '@/components/common/BPMNav.vue';

Vue.use(header);
Vue.use(aside);
Vue.use(main);

export default {
  name: 'app',
  components: { BPMHeader, BPMnav },
};
</script>

<style>
  .el-header{
    padding-left: 0;
    padding-right:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
