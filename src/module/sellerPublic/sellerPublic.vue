<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>
  <div class="seller-public-box">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="seller-public">
            <div class="seller-public-location">
              当前位置：其他 > 公告
            </div>
            <div class="seller-public-msgbox">
              <ul class="public-menu">
                <li v-on:click="_menu(1)" v-bind:class="menu == 1 ? 'active' : ''">商城公告</li>
                <li v-on:click="_menu(2)" v-bind:class="menu == 2 ? 'active' : ''">市场通知</li>
              </ul>
              <div class="public-msg" v-bind:style="{display: menu == 1 ? 'block' : 'none'}">
                <div class="public-msg-kong" style="display:none">
                  <span class="icon-tongzhi"></span>
                  <p>暂无消息</p>
                </div>
                <div class="public-msg-content">
                  <div class="msg-list">
                    <div class="msg-list-tit">
                      <h4>商城上线啦</h4>
                      <p>普天同庆。。。</p>
                    </div>
                    <div class="msg-list-time">
                      <p>2010-01-01</p>
                      <p><a>详情></a></p>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div class="public-msg" v-bind:style="{display: menu == 2 ? 'block' : 'none'}">
                <div class="public-msg-kong" style="display:none">
                  <span class="icon-tongzhi"></span>
                  <p>暂无消息</p>
                </div>
                <div class="public-msg-content">
                  <div class="msg-list">
                    <div class="msg-list-tit">
                      <h4>市场公告</h4>
                      <p>市场公告、、、</p>
                    </div>
                    <div class="msg-list-time">
                      <p>2010-01-01</p>
                      <p><a>详情></a></p>
                    </div>
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
  import Vue from 'vue'
  import SellerCenterHeader from 'components/SellerCenterHeader'
  import fot from 'components/footer'
  import SellerCenterSideBar from 'components/SellerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      SellerCenterHeader,
      fot,
      SellerCenterSideBar
    },
    data () {
      return {
        menu: 1
      }
    },
    methods: {
      _menu (t) {
        this.menu = t
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerPublic.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>