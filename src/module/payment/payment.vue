<template>
<div>
  <div class="payment-t">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          头部        
        </div>
      </div>
    </div>   
  </div>
  
  <div class="payment-m">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="payment">
            payment
          </div>
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
  @import "../../assets/less/payment.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>