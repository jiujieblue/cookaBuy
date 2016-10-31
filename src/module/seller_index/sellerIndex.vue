<template>
<div>
  <div class="paySucc-t">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          头部        
        </div>
      </div>
    </div>   
  </div>
  
  <div class="paySucc-m">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          
        </div>
      </div>
    </div>
  </div>  
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
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
  @import "../../assets/less/sellerIndex.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>