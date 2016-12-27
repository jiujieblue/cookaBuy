<template>
  <div class="uf">
    <img src="../../assets/images/404.png">
    <a href="./index.html">返回首页</a>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import fot from 'components/footer'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      fot
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/uf.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>