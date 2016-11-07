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
              <p><span class="tishi">!</span>请您在24小时内完成支付，否则订单会自动取消。</p>
            </div>

            <div class="payment-list">
              <div class="payment-list-tit">
                <div class="tit-ra" v-bind:style="{display: step == 1 ? 'none' : 'block'}">
                  应付金额 : <span>&yen;5500.00</span> 元
                </div>
                <div class="tit-rb">
                  <div class="rb-l" v-bind:style="{display: step != 1 ? 'none' : 'block'}">
                    应付金额 : <span>&yen;5500.00</span> 元 (若有改动，请<a v-on:click="_reload">刷新</a>)
                  </div>
                  <div class="rb-r">
                    <a v-on:click="_listShow">订单详情</a>
                    <span v-bind:class="listShow ? 'icon-fanyeup' : 'icon-fanyedown'" v-on:click="_listShow"></span>
                  </div>
                </div>
              </div>
              <div class="payment-list-detail" v-bind:style="{display: listShow ? 'block' : 'none'}">
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

            <div class="payment-way" v-bind:style="{display: step == 1 ? 'block' : 'none'}">
              <div class="payment-way-tit">
                支付 : <span>&yen;5500.00</span>
              </div>
              <form v-on:submit="_submit">
                <div class="keka">
                  <input id="keka" type="radio" name="pay-sty" v-on:change="_choosePay(1)">
                  <label for="keka">柯咔钱包</label>
                  <span>(余额 : {{kekaMoney}}元)</span>
                  <button v-bind:style="{display: kekaMoney ? 'none' : 'inline-block'}">充值</button>
                </div>
                <div class="oth">
                  <input id="other" type="radio" name="pay-sty" v-on:change="_choosePay(0)">
                  <label for="other">其他付款方式</label>
                </div>
                <div class="oth-box" v-bind:style="{display: othPay ? 'block' : 'none'}">
                  <div class="box-tit">
                    第三方支付
                  </div>
                  <div class="box-choose">
                    <div class="zfb-line">
                      <p>在线支付平台</p>
                      <div>
                        <input id="zfbline" type="radio" name="pay-choose">
                        <label for="zfbline">
                          <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                        </label>
                      </div>
                    </div>
                    <div class="phone">
                      <p>手机扫码</p>
                      <div>
                        <input id="zfbkj" type="radio" name="pay-choose" v-on:change="_choosePay(2)">
                        <label for="zfbkj" class="zfbkj">
                          <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                          <span class="icon-kuaijiezhifu"></span>
                        </label>
                        <input id="wxkj" type="radio" name="pay-choose" v-on:change="_choosePay(3)">
                        <label for="wxkj" class="wxkj">
                          <span class="icon-weixinzhifu"></span>
                          <span>微信支付</span>
                          <span class="icon-kuaijiezhifu"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-submit">
                  <button type="submit">下<span class="em"></span>一<span class="em"></span>步</button>
                </div>
              </form>              
            </div>

            <div class="payment-keka" v-bind:style="{display: payId == 1 && step == 2 ? 'block' : 'none'}">
              <div class="keka-tit">
                <img src="../../assets/images/icons/qiandai.png" height="18" width="18">
                <span>柯咔钱包</span>
                <span>可用零钱 : 1000.00元</span>
              </div>
              <div class="keka-pay">
                <div class="pwd">
                  <input type="password" name="pwd">
                  <a href="#">忘记支付密码?</a>
                </div>
                <button>立即支付</button>
              </div>
              <div class="oth-pay">
                <p>其他支付方式 :</p>
                <div>
                  在线支付 :
                  <a>
                    <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                  </a>
                </div>
                <div>
                  <p>手机扫码 :</p>
                  <a v-on:click="_choosePay(2)">
                    <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                    <span class="icon-kuaijiezhifu"></span>
                  </a>
                  <a v-on:click="_choosePay(3)">
                    <span class="icon-weixinzhifu"></span>
                    <span>微信支付</span>
                    <span class="icon-kuaijiezhifu"></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="payment-kj" v-bind:style="{display: payId == 2 || payId == 3 && step == 2 ? 'block' : 'none'}">
              <div class="kj-tit">
                {{payId == 2 ? '支付宝扫码支付' : '微信支付'}}
              </div>
              <div class="kj-code">
                <p>{{payId == 2 ? '支付宝扫码支付' : '微信扫码支付'}}</p>
                <div class="code">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <img src="../../assets/images/hot-sale-today.jpg" height="230" width="230">
                </div>
              </div>
              <div class="oth-pay">
                <p>其他付款方式 :</p>
                <div class="img-keka" v-on:click="_choosePay(1)">
                  <img src="../../assets/images/icons/qiandai.png" height="20" width="20">
                  <span>柯咔钱包</span>
                </div>
                <p>在线支付 :</p>
                <div class="img-zfbline">
                  <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                </div>
                <p>手机扫码 :</p>
                <div class="img-wx" v-bind:style="{display: payId == 2 ? 'block' : 'none'}" v-on:click="_choosePay(3)">
                  <span class="icon-weixinzhifu"></span>
                  <span>微信支付</span>
                  <span class="icon-kuaijiezhifu"></span>
                </div>
                <div class="img-zfbkj" v-bind:style="{display: payId == 3 ? 'block' : 'none'}" v-on:click="_choosePay(2)">
                  <img src="../../assets/images/icons/zhifubao.png" height="50" width="140">
                  <span class="icon-kuaijiezhifu"></span>
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
        step: 1,
        listShow: false,
        kekaMoney: 0,
        othPay: false,
        payId: -1
      }
    },
    methods: {
      _reload () {
        window.location.reload();
      },
      _listShow () {
        this.listShow = !this.listShow
      },
      _choosePay (t) {
        if(t == 1){
          this.othPay = false;
        }
        else{
          this.othPay = true;
        }
        if(t != 0){
          this.payId = t
        }
      },
      _submit (e) {
        e.preventDefault();
        if(this.payId != -1){
          var data = fto(e.target)
          this.step = 2
        }
        
      }
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