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
        <div class="col-md-12">
          <div class="paySucc">            
            <div class="paySucc-tit">
              <h4><span class="icon-zhifuchenggong"></span>您已成功付款!</h4>
              <p>订单正在处理中，货物会快马加鞭送到您手中</p>
            </div>
            <div class="paySucc-zhifu">
              <p>付款金额 : <span>&yen; 5778.00</span> 元</p>
              <p>付款时间 : 2011-1-1 12:00</p>
              <p>付款方式 : 支付宝</p>
            </div>
            <div class="paySucc-act">
              <button>返 回 商 城</button>
              <button>查 看 订 单</button>
            </div>
            <div class="paySucc-order">
              <div class="order-detail">
                <div class="detail-tit">
                  商家配送订单
                </div>
                <div class="detail-list">
                  <p>订单号 : 1234567890123456</p>
                  <p>店铺 : 嘟嘟服饰</p>
                  <p>收货地址 : 广东省广州市白云区同和街道...</p>
                </div>
              </div>
              <div class="order-detail">
                <div class="detail-tit">
                  代发订单
                </div>
                <div class="detail-list">
                  <p>订单号 : 1234567890123456</p>
                  <p>店铺 : 嘟嘟服饰</p>
                  <p>收货地址 : 广东省广州市白云区同和街道...</p>
                </div>
              </div>
            </div>
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
  @import "../../assets/less/paymentSuccess.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>