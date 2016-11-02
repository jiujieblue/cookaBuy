<template>
<div>
  <SellerCenterHeader></SellerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="daifa-deal-detail">
            <div class="daifa-deal-detail-location">
              当前位置：我的钱包 > 交易明细
            </div>
            <form class="daifa-deal-detail-menu">
              <div class="menu-time">
                <span>时间范围</span>
                <input type="date" /><span class="em_5"></span>--<span class="em_5"></span><input type="date" />
              </div>
              <div class="menu-order">
                <span>流水号</span>
                <input name="paymentSerialNum" />
              </div>
              <div class="menu-leixing">
                <span>交易类型</span>
                <select name="type">
                  <option>全部</option>
                  <option>快捷支付</option>
                  <option>商城订单</option>
                </select>
              </div>
              <button type="submit">查找</button>
              <div class="totaljine">
                <p>2016-05-05至2016-06-06</p>  
                <p>收入总金额 : <span>5050.00</span>元</p>
                <p>支出总金额 : <span>5050.00</span>元</p>
              </div>
            </form>
            <div class="daifa-deal-detail-name">
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2010-10-10 12:00:00</td>
                    <td>提现</td>
                    <td>1234561234561234</td>
                    <td>12345612345</td>
                    <td>1000.00</td>
                    <td>收入</td>
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
  @import "../../assets/less/daifaDeal.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>