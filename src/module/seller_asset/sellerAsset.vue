<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>
  <div class="seller-asset">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="seller-asset-view">
            <div class="seller-asset-view-location">
              当前位置：我的钱包 > 资产概览
            </div>
            <div class="seller-asset-view-graph">
              <div class="graph-canvas-l">
                <canvas class="mycanvas" width='200' height='200'>

                </canvas>
              </div>
              <div class="graph-canvas-m">
                <h4>总资产</h4>
                <div>&yen; 1000.00</div>
              </div>
              <div class="graph-canvas-r">
                <div>
                  <div></div>
                  <p>商城订单交易</p>
                  <span>&yen; 250</span>
                </div>
                <div>
                  <div></div>
                  <p>快捷支付交易</p>
                  <span>&yen; 750</span>
                </div>
              </div>
            </div>
            <div class="seller-asset-view-detailbox">
              <div class="detailbox-title">
                最近交易
              </div>
              <div class="detailbox-detail">
                <div class="detailbox-detail-l">
                  <h4>2016-01-01</h4>
                  <span>12:00:00</span>
                </div>
                <div class="detailbox-detail-l">
                  <h4>快捷支付</h4>
                  <span>付款人 : 12345612345</span>
                </div>
                <div class="detailbox-detail-l">
                  &yen; 250
                </div>
              </div>
              <div class="detailbox-detail">
                <div class="detailbox-detail-l">
                  <h4>2016-01-01</h4>
                  <span>12:00:00</span>
                </div>
                <div class="detailbox-detail-l">
                  <h4>快捷支付</h4>
                  <span>付款人 : 12345612345</span>
                </div>
                <div class="detailbox-detail-l">
                  &yen; 250
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
        
      }
    },
    methods: {

    },
    mounted () {
      $(document).ready(function(){
      var canvas = $('.mycanvas')[0];
      var ctx = canvas.getContext('2d');
      ctx.fillStyle='#ff450c';
      ctx.beginPath();
      ctx.arc(100,100,60,-Math.PI/2,0);
      ctx.lineWidth='35';
      ctx.strokeStyle = '#50c4fc';
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(100,100,60,0,-Math.PI/2);
      ctx.lineWidth='35';
      ctx.strokeStyle = '#fcc505';
      ctx.stroke();
      ctx.closePath();
    }) 
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerAsset.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>