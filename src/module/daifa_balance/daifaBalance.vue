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
          <div class="daifa-balance">
            <div class="daifa-balance-location">
              当前位置：我的钱包 > 钱包余额
            </div>
            <div class="daifa-balance-self">
              <div class="balance-self-l">
                <img src="../../assets/images/detail-color.jpg" />
                <div class="self-l-r">
                  <div>
                    <h4>代发猫</h4>
                    <p><span class="icon-certification"></span>未实名认证</p>
                  </div>
                  <div>
                    <p>我的余额 :</p>
                    <span>&yen; 1000.00</span>
                  </div>
                  <div>
                    <button>提<span class="em"></span>现</button>
                    <a>提现记录</a>
                  </div>
                </div>
              </div>
              <div class="balance-self-r">
                <p>银行卡</p>
                <div class="self-r-card">
                  <div>
                    <img src="../../assets/images/bankCard_gf.png"/>
                    <p>存储卡</p>
                  </div>
                  <div>
                    **** **** **** 4001
                  </div>
                  <div>
                    <a>删除此卡</a>
                  </div>
                </div>
                <div class="self-r-card-no" style="display: none">
                  <span>+</span>
                  <p>添加银行卡</p>
                </div>
              </div>
            </div>
            <div class="daifa-balance-recent">
              <span class="icon-total"></span>最近结算
            </div>
            <div class="daifa-balance-detail">
              <table>
                <tbody>
                  <tr>
                    <td>
                      2016-02-01 12:00:00
                    </td>
                    <td>
                      <p>平台结算</p>
                      <p>付款人:柯咔钱包</p>
                    </td>
                    <td>
                      250.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2016-02-01 12:00:00
                    </td>
                    <td>
                      <p>平台结算</p>
                      <p>付款人:柯咔钱包</p>
                    </td>
                    <td>
                      250.00
                    </td>
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
  @import "../../assets/less/daifaBalance.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>