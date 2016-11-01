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
          <div class="seller-public-detail">
            <div class="seller-public-detail-location">
              当前位置：其他 > 公告信息
            </div>
            <div class="seller-public-detail-tit">              
              <div>
                <h4>标题</h4>
              </div>
            </div>
            <div class="seller-public-detail-time">
              <p>times</p>
              <p>商城公告</p>
            </div>
            <div>
              Content
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

      }
    },
    methods: {

    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerPublicDetail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>