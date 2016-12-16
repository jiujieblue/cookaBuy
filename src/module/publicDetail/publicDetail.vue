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
              <h3>柯咔公告</h3>
            </div>
          </div>
          <div class="public-detail-time">
            <p>2016年12月16日</p>
            <p style="display: none">商城公告</p>
          </div>
          <div class="public-detail-indent">
            <p>柯咔服装网现因系统升级暂不支持交易，升级后将持续给大家推荐更多优质货源，轻松下单，支持商品代发。
商城完成升级后，柯咔服装网将给大家带来首单免邮、抽奖和送金币等福利，感谢您一直以来对柯咔服装网的大力支持！</p>
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
  @import "../../assets/less/publicDetail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>