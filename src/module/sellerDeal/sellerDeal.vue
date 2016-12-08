<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>
  <div class="seller-deal">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="seller-deal-detail">
            <div class="seller-deal-detail-location">
              当前位置：我的钱包 > 交易明细
            </div>
            <form class="seller-deal-detail-menu">
              <div class="menu-time">
                <span>时间范围</span>
                <input type="date" name="timeStart" /><span class="em"></span>--<span class="em"></span><input type="date" name="timeEnd" />
              </div>
              <div class="menu-order">
                <span>订单编号</span>
                <input name="paymentSerialNum" />
              </div>
              <div class="menu-jiaoyi">
                <span>交易用户</span>
                <input name="phone" />
              </div>
              <div class="menu-jine">
                <span>订单金额</span>
                <input />
              </div>
              <div class="menu-leixing">
                <span>交易类型</span>
                <select name="type" >
                  <option value=''>全部</option>
                  <option value='10'>快捷支付</option>
                  <option value='13'>商城订单</option>
                </select>
              </div>
              <button type="submit">查找</button>
              <div class="totaljine">
                <span>2016-05-05至2016-06-06</span><h4>交易总金额 : <span>5050.00</span></h4>元
              </div>
            </form>
            <div class="seller-deal-detail-name">
              <table>
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>交易时间</td>
                    <td>交易类型</td>
                    <td>订单编号</td>
                    <td>交易用户</td>
                    <td>订单金额</td>
                    <td>收入/支出</td>
                    <td>支付方式</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2010-12-12 12:00:00</td>
                    <td>快捷支付</td>
                    <td>1234567890123456</td>
                    <td>12345612345</td>
                    <td>1000.00</td>
                    <td>收入</td>
                    <td>支付宝</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2010-12-12 12:00:00</td>
                    <td>快捷支付</td>
                    <td>1234567890123456</td>
                    <td>12345612345</td>
                    <td>1000.00</td>
                    <td>收入</td>
                    <td>支付宝</td>
                  </tr>               
                </tbody>
              </table>
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
  @import "../../assets/less/sellerDeal.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>