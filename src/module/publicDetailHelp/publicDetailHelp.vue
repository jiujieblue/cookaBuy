<template>
<div>
  <div class="header">
    <div class="header-top">
      <div class="header-l">
        你好，欢迎光临柯咔商城！
      </div>
      <div class="header-m" style="display:none">
        <a href="#">
          请登录
        </a>
        <span>|</span>
        <a href="#" class="header-top-link">
          免费注册
        </a>
      </div>
      <div class="header-r">
        <a href="./index.html">首页</a>
        <a href="#" style="display:none">
          商家入驻
        </a>
        <a href="#" style="display:none">
          收藏本站
        </a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="public-detail">
          <div class="public-detail-location" style="display: none">
            当前位置：其他 > 公告信息
          </div>
          <div class="public-detail-tit">              
            <div>
              <h3>【帮助中心】-新手指引</h3>
            </div>
          </div>
          <div class="public-detail-time">
            <p>2017年03月10日</p>
          </div>
          <div class="public-detail-indent">
            <h3>1、柯咔服装网是什么？</h3>
            <p>柯咔网络科技是一家前期以东南亚市场为主导，中期面向全球的在线外贸服装批发电商企业，秉着让在线交易变得简单安全、高效的理念，致力帮助中国装服中小企业开辟一条全新的国际贸易通道。</p>
            <p>目前，柯咔网络集团旗下设有柯咔网B2B平台， 柯咔网支付云端、海外体验旗舰店及海外事业部。2015年，入驻柯咔网的服装批发商、服装厂超过8000家，依托柯咔网进货的服装零售商超过200万家，是中国服装批发领域的实力商家。</p>
            <h3>2、柯咔商城上面的商品是自营的吗？</h3>
            <p> 柯咔服装网是一个第三方平台，不自营销售任何商品。柯咔商城上展示的所有商品均为入驻档口的商品，任何有关商品尺码、质量、售后等问题，请与对应档口联系。。</p>
            <h3>3、显示实拍的商品是实拍吗？</h3>
            <p>档口承诺自家80%商品是实拍，具体是否为实拍，请在上传每一款商品前和档口确认。</p>
            <h3>4、档口代发不退货怎么办？</h3>
            <p>档口是否愿意退货有相应的市场行规，请在购买前和档口确认。</p>
            <p>柯咔服装网后期会有代发功能，为了提高您的退货成功率，建议使用柯咔代发。</p>
            <h3>5、档口代发寄来的商品有质量问题怎么办？</h3>
            <p>请联系档口协商具体处理方法。</p>
            <p>柯咔代发有质检服务，为了减少质量问题的出现，建议使用柯咔代发。</p>
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
  @import "../../assets/less/publicDetailHelp.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>