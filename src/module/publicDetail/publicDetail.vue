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
              <h3>{{list[list_t].title}}</h3>
            </div>
          </div>
          <div class="public-detail-time">
            <p>{{list[list_t].times}}</p>
            <p style="display: none">商城公告</p>
          </div>
          <div class="public-detail-indent">
            <p>{{list[list_t].content}}</p>
          </div>
          <div class="public-detail-img" v-if="list_t == 1">
            <h4>店招样式:</h4>
            <img src="../../assets/publicDetailImg/dianzhao.png" height="110" width="580">
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
        list_t: 0,
        list: [
          {
            title: '柯咔商城系统升级通知及活动优惠政策预告',
            times: '2017年03月05日',
            content: '柯咔服装网现因系统升级暂不支持交易，升级后将持续给大家推荐更多优质货源，轻松下单，支持商品代发。商城完成升级后，柯咔服装网将给大家带来首单免邮、抽奖和送金币等福利，感谢您一直以来对柯咔服装网的大力支持！',
            img: ''
          },
          {
            title: '柯咔免费帮您做店招',
            times: '2017年03月10日',
            content: '春节放假回来，您换档口了吗？是否没时间做店招？店招的设计不好看？让柯咔来帮您吧。只要您提供档口号（如：新潮都1008）、店名（如：圆缘服饰）、手机号、微信号或者QQ号给柯咔客服，柯咔帮您免费搞定，详情请联系客服QQ：2100505046'
          }
        ]
      }
    },
    methods: {

    },
    mounted () {
      this.list_t = location.href.split('?')[1]
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/publicDetail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>