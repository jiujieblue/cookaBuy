<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-12 header">
        <h2>我是头部</h2>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="seller-register">
          <div class="seller-register-tit">
            商家信息
          </div>
          <div class="seller-register-form">
            <form>
              <div class="form-name">
                <b>*</b>
                <label>店铺名称：</label>
                <input type="text" name="name">
              </div>
              <div class="form-location">
                <b>*</b>
                <label>市场位置：</label>
                <span>广东广州</span>
              </div>
              <div class="form-mark">
                <b>*</b>
                <label>市场名称：</label>
                <select>
                  <option>1</option>
                </select>
              </div>
              <div class="form-floor">
                <b>*</b>
                <label>楼<span class="em"></span><span class="em"></span>层：</label>
                <select>
                  <option>1</option>
                </select>
              </div>
              <div class="form-stalls">
                <b>*</b>
                <label>档<span class="_em"></span>口<span class="_em"></span>号：</label>
                <input type="text" name="stalls">
              </div>
              <div class="form-sty">
                <b>*</b>
                <label>主营类目：</label>
                <select>
                  <option>1</option>
                </select>
              </div>
              <div class="form-xingming">
                <b>*</b>
                <label>店主姓名：</label>
                <input type="text" name="xingming">
              </div>
              <div class="form-phone">
                <b>*</b>
                <label>联系电话：</label>
                <input type="text" name="phone">
              </div>
              <div class="form-serv">
                <label>商家服务：</label>
                <div class="form-serv-l">
                  <input type="checkbox">
                  <label>自提</label>
                </div>
                <div class="form-serv-m">
                  <input type="checkbox">
                  <label>代发</label>
                </div>
                <div class="form-serv-r">
                  <input type="checkbox">
                  <label>商家发货</label>
                </div>
              </div>
              <div class="form-submit">
                <button type="submit">提<span class="em"></span><span class="em"></span>交</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>   
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  export default{
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
  @import "../../assets/less/seller_register.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>