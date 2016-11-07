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
          <div class="buyer-account"> 
            <div class="buyer-account-location">
              当前位置：账号管理 > 个人资料
            </div>

            <div class="buyer-account-info">
              <a v-bind:class="type == 1 ? 'active' : ''" v-on:click="_type(1)">基本信息</a>
              <a v-bind:class="type == 2 ? 'active' : ''" v-on:click="_type(2)">个人信息</a>          
            </div>
            <div v-bind:style="{display: type == 1 ? 'block' : 'none'}">
              <form>
                <div class="buyer-account-basic">
                  <div class="basic-l">
                    <img src="../../assets/images/250x250.png">
                  </div>
                  <div class="basic-r">
                    <div>
                      账<span class="em"></span><span class="em"></span>号 : 12345612345
                    </div>
                    <div style="display:none">
                      昵<span class="em"></span><span class="em"></span>称 : AAA
                      <button type="button">修改</button>
                    </div>
                    <div>手机号码 : 12345612345</div>
                  </div>
                </div>
                <div class="buyer-account-submit">
                  <button type="submit">保<span class="em"></span><span class="em"></span>存</button>
                </div>
              </form>
            </div>
            <div v-bind:style="{display:type == 2 ? 'block' : 'none'}">
              <div class="buyer-account-selfInfo">
                <p>带<b>*</b>处/为必填项 ; 请完善您的个人信息</p>
                <form>
                  <div>
                    <span class="em_5"></span>姓<span class="em"></span><span class="em"></span>名：AAA
                  </div>
                  <div>
                    <b>*</b>生<span class="em"></span><span class="em"></span>日：
                    <input type="date" name="birth" />
                  </div>
                  <div>
                    <b>*</b>性<span class="em"></span><span class="em"></span>别：
                    <input name="gender" class="check" id="man" type="radio" />
                    <label htmlFor="man">男</label>
                    <input name="gender" class="check" id="women" type="radio" />
                    <label htmlFor="women">女</label>
                  </div>
                  <div>
                    <b>*</b>所<span class="em_5"></span>在<span class="em_5"></span>地：
                    <select name="state">
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select name="city">
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select name="region">
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit">保<span class="em"></span><span class="em"></span>存</button>
                  </div>
                </form>
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
        type: 1
      }
    },
    methods: {
      _type (t) {
        this.type = t
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerInfo.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>