<template>
<div>
  <BuyerCenterHeader></BuyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-opinion">
            <div class="buyer-opinion-location">
              当前位置：其他 > 意见反馈
            </div>
            <div class="buyer-opinion-form">
              <form class="form">
                <div class="form-title">
                  <b>您好，感谢您提出宝贵的意见，参与到商城建设当中</b>
                </div>
                <div class="form-menu">
                  <span>类型</span>
                  <input id="products-opi" type="radio" name="type" />
                  <label htmlFor="products-opi">产品建议</label>
                  <input id="yewu-opi" type="radio" name="type" />
                  <label htmlFor="yewu-opi">业务咨询</label>
                  <input id="service-opi" type="radio" name="type" />
                  <label htmlFor="service-opi">服务建议</label>
                  <input id="other-opi" type="radio" name="type" />
                  <label htmlFor="other-opi">其他</label>
                </div>
                <div class="form-content">
                  <p>内容</p>
                  <textarea></textarea>
                  <div class="limit">0/300</div>
                </div>
                <div class="form-connect">
                  <span>联系方式 : </span>
                  <input name="phone" placeholder="电话/邮箱" />
                </div>
                <div class="form-submit">
                  <button type="submit">提交</button>
                </div>
              </form>
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
  import SellerCenterSideBar from 'components/SellerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      BuyerCenterHeader,
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
  @import "../../assets/less/buyerOpinion.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>