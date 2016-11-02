<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>           
  
  <div class="sellerIndex-m">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="seller-index">
            <div class="seller-index-part1">
              <div class="gonggao">
                <span class="icon-xiaoxi"></span>[公告]
                <div class="banner-box">
                  <ul class="banner1">
                    <li><a>消息1</a></li>
                    <li><a>消息22</a></li>
                    <li><a>消息333</a></li>
                  </ul>
                  <ul class="banner2">
                    <li><a>消息1</a></li>
                    <li><a>消息22</a></li>
                    <li><a>消息333</a></li>
                  </ul>
                </div>            
              </div>
              <div class="shop-info">
                <div class="shop-info-l">
                  <div>
                    <img src="../../assets/images/userImg.jpg" />
                  </div>
                  <div>
                    <h3>七匹狼专卖店</h3>
                    <p>店铺认证:已认证<span class="icon-renzheng"></span></p>
                    <div>
                      账户安全:&nbsp;
                      <div>
                        <a>验证手机</a><span class="icon-gougou"></span>
                        <a>登录密码</a><span class="icon-gougou"></span>
                        <a>支付密码</a><span class="icon-gougou"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop-info-r">
                  <div>
                    <p>账号余额 (元)</p>
                    <a>明细</a>
                  </div>
                  <div>
                    <p><span>￥ 1000.00</span></p>
                    <button>提现</button>
                  </div>
                  <div>
                    <p>累计收入:<span>￥ 1000.00</span></p>
                    <button>银行卡</button>
                  </div>
                </div>
              </div>
            </div>  

            <div class="seller-index-part2">
              <div class="part2-l">
                <div>
                  <h4><span class="icon-wodezizhanghu"></span>我的子账户</h4>
                  <a>+添加</a>
                </div>
                <div>
                  <ul>
                    <li><span class="icon-zizhanghu"></span>12345612345</li>
                    <li><span class="icon-zizhanghu"></span>12345612345</li>
                    <li><span class="icon-zizhanghu"></span>12345612345</li>
                    <li><span class="icon-zizhanghu"></span>12345612345</li>
                    <li><span class="icon-zizhanghu"></span>12345612345</li>
                  </ul>
                </div>
              </div>
              <div class="part2-r">
                <div>
                  <h4><span class="icon-wodedingdan"></span>我的订单</h4>
                  <a>自提拿货验证</a>
                </div>
                <div>
                  <div>
                    <div>
                      <p>待付款:</p><span>50</span>
                    </div>
                    <div>
                      <p>待确认收货:</p><span>50</span>
                    </div>
                    <div>
                      <p>退货中:</p><span>50</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>待拿货:</p><span>50</span>
                    </div>
                    <div>
                      <p>交易完成:</p><span>50</span>
                    </div>
                    <div>
                      <p>申诉处理:</p><span>50</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>待发货:</p><span>50</span>
                    </div>
                    <div>
                      <p>退货退款:</p><span>50</span>
                    </div>
                    <div>
                      <p>交易关闭:</p><span>50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="seller-index-part3">
              <div class="part3-l">
                <div>
                  <h4><span class="icon-kuaijiezhifudingdan"></span>快捷支付订单</h4>
                </div>
                <div>
                  <div>
                    <p>最近一周</p>
                    <div>
                      <p>订单量 ( 笔 ): 50</p>
                      <p>交易金额 ( 元 ): 5000.00</p>
                    </div>
                  </div>
                  <div>
                    <p>上月</p>
                    <div>
                      <p>订单量 ( 笔 ): 1050</p>
                      <p>交易金额 ( 元 ): 500000.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="part3-r">
                <div>
                  <h4><span class="icon-wodeshangping"></span>我的商品</h4>
                  <div>
                    <button>一键同步</button>
                    <button>上传</button>
                  </div>
                </div>
                <div>
                  <div>
                    <div>1212</div>
                    <div>在售商品</div>
                  </div>
                  <div>
                    <div>50</div>
                    <div>停售</div>
                  </div>
                  <div>
                    <div>510</div>
                    <div>草稿箱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <fot></fot>    
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import SellerCenterHeader from 'components/SellerCenterHeader'
  import SellerCenterSideBar from 'components/SellerCenterSideBar'
  import fot from 'components/footer'
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      SellerCenterSideBar,
      SellerCenterHeader,
      fot
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    mounted () {
      $(document).ready(function(){
      var l = $('.banner1 li').length;
      var ulHeight = -parseInt($('.banner1').css('height'));
      $('.banner2').css('top',ulHeight);
      var liHeight = -parseInt($('.banner1').css('height'))/l;
      var banner1Top=0;
      var banner2Top=-ulHeight;
      function timer(){
        var timer1=setInterval(function(){
          banner1Top--;
          banner2Top--;
          $('.banner1').css('top',banner1Top);
          $('.banner2').css('top',banner2Top);
          if(banner1Top%liHeight==0){
            clearInterval(timer1);      
          }
          if(banner1Top<=ulHeight){
            banner1Top=-ulHeight;
          }
          if(banner2Top<=ulHeight){
            banner2Top=-ulHeight;
          }
        },30);
      }
      var timer2=setInterval(timer,3000);
      $('.banner1 li a').mouseover(function(){
        clearInterval(timer2);
      })
      $('.banner1 li a').mouseout(function(){
        timer2=setInterval(timer,3000);
      })
    })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerIndex.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>