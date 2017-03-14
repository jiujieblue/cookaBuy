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
              <h3>柯咔免费帮您做店招</h3>
            </div>
          </div>
          <div class="public-detail-time">
            <p>2017年03月05日</p>
            <p style="display: none">商城公告</p>
          </div>
          <div class="public-detail-indent">
            <p>春节放假回来，您换档口了吗？是否没时间做店招？店招的设计不好看？让柯咔来帮您吧。只要您提供档口号（如：新潮都1008）、店名（如：圆缘服饰）、手机号、微信号给柯咔客服，柯咔帮您免费搞定，详情请联系客服QQ：2100505046</p>
            <img src="../../assets/images/dianzhao.png" alt="">
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