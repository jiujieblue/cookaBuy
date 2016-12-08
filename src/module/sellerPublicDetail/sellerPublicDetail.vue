<template>
<div>
  <buyerCenterHeader></buyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <buyerCenterSideBar></buyerCenterSideBar>
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
  import buyerCenterHeader from 'components/BuyerCenterHeader'
  import fot from 'components/footer'
  import buyerCenterSideBar from 'components/BuyerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      buyerCenterHeader,
      fot,
      buyerCenterSideBar
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
  @import "../../assets/less/buyerPublicDetail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>