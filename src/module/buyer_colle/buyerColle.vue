<template>
<div>
  <BuyerCenterHeader></BuyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <BuyerCenterSideBar></BuyerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-colle">
            <div class="buyer-colle-location">
              当前位置：账号管理 > 收藏商品
            </div>

            <div class="buyer-colle-null" style="display:none">
              <div><img src="../../assets/images/dianpu.png" /></div>
              <div>没有任何关注店铺，<a>快去逛逛吧</a></div>
            </div>

            <div class="buyer-colle-data" style="display:block">
              <div class="buyer-colle-menu">
                <ul>
                  <li>全部<span>10</span></li>
                  <li>免邮<span>12</span></li>
                  <li>优惠<span>10</span></li>
                  <li>上架时间<span class="icon-xiajiang"></span></li>
                  <li>上架时间<span class="icon-shangshen"></span></li>
                </ul>
              </div>
              <div class="buyer-colle-caozuo">
                <p>您有<span>10</span>个失效商品</p>
                <a>全部删除</a>
                <div class="caozuo-box">
                  <div>
                    <input id="all" type="checkbox" /><label for="all">全选</label>
                    <a><span class="icon-lajitong"></span>删除</a>
                  </div>              
                  <a>取消管理</a>
                </div>
              </div>
              <div class="buyer-colle-list">
                <div class="list-detail">
                  <div class="list-detail-img">
                    <img src=""/>
                    <b style="display:none" class="icon-shubiaoyiru">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </b>
                  </div>              
                  <a>aaa</a>
                  <div class="list-detail-oth">
                    <p>&yen; 60</p>
                    <a>
                      <span class="icon-dianpu" title="去他的店"></span>
                    </a>
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
  import BuyerCenterHeader from 'components/BuyerCenterHeader'
  import fot from 'components/footer'
  import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      BuyerCenterHeader,
      fot,
      BuyerCenterSideBar
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
  @import "../../assets/less/buyerColle.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>