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
            <div class="payment-tit">
              <h4>订单提交成功，请您尽快付款!</h4>
              <p><span class="tishi">!</span>请您在<span class="limitetime">24小时</span>内完成支付，否则订单会自动取消。</p>
            </div>
            <div class="payment-list">
              <div class="payment-list-tit">
                <div class="tit-ra">
                  应付金额 : <span>&yen;5500.00</span> 元
                </div>
                <div class="tit-rb">
                  <div class="rb-l">
                    应付金额 : <span>&yen;5500.00</span> 元 (若有改动，请<a>刷新</a>)
                  </div>
                  <div class="rb-r">
                    <a>订单详情</a>
                    <span class="icon-fanyeup"></span>
                  </div>
                </div>
              </div>
              <div class="payment-list-detail">
                <div class="detail-location">
                  <span class="glyphicon glyphicon-map-marker"></span>
                  收货地址 : 广东省 广州市 白云区 510510(邮箱) 郑成功(收) 12345612345 0000-1234567
                </div>
                <div class="detail-list-tit">
                  <div class="tit-name">店铺名称</div>
                  <div class="tit-order">订单</div>
                  <div class="tit-shopping">商品名称</div>
                  <div class="tit-num">数量</div>
                  <div class="tit-money">订单金额</div>
                </div>
                <div class="detail-list-shopping">
                  <div class="shopping-list">
                    <div class="shopping-name">嘟嘟服饰</div>
                    <div class="shopping-order">1234567890123456</div>
                    <div class="shopping-shopping">
                      长款时尚大马甲潮流女装长款时尚大马甲潮流女装、2133#夏季韩版女装
                    </div>
                    <div class="shopping-num">10</div>
                    <div class="shopping-money">3100.00</div>
                  </div>

                  <div class="shopping-list">
                    <div class="shopping-name">嘟嘟服饰</div>
                    <div class="shopping-order">1234567890123456</div>
                    <div class="shopping-shopping">
                      长款时尚大马甲潮流女装长款时尚大马甲潮流女装、2133#夏季韩版女装
                    </div>
                    <div class="shopping-num">10</div>
                    <div class="shopping-money">3100.00</div>
                  </div>

                  <div class="shopping-youhui">
                    <div>返现金额</div>
                    <div>20.00元</div>
                  </div>
                </div>   
              </div>
            </div>
            <div class="payment-way">
              <div class="payment-way-tit">
                支付 : &yen;5500.00
              </div>
              <div class="payment-way-sty">
                <div class="keka">
                  
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