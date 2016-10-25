<template>
<div>
  <div class="self-head">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="self-head-menu">
            <a href="#">商家入驻</a>
            <a href="#">收藏本站</a>
          </div>          
        </div>
      </div>
    </div>
  </div>
  
  <div class="login-t">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="login-t-tit">
            <img src="../../assets/images/logo.svg" width="150">
            <span>欢迎注册</span>
          </div>          
        </div>
      </div>
    </div>   
  </div>

  <div class="login-m">
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../../assets/images/login_keka.png" height="392" width="482">
          </div>
          <div class="col-md-6 login-form">
            <div class="login-tit">
              <div class="login-tit-l">
                <span>用户登录 / </span>尊敬的柯咔用户，欢迎您回来!
              </div>
              <div class="login-tit-r">
                还没有账号 ? <a href="#">立即注册</a>
              </div>
            </div>
            <form>
              <div class="form-zhanghao">
                <span class="icon-zhanghao"></span>
                <input type="text" name="zhanghao" placeholder="请输入您的手机号码">
              </div>
              <div class="form-psd">
                <span class="icon-mima"></span>
                <input type="password" name="psd" placeholder="请输入密码">
              </div>
              <div class="form-oth">
                <div class="form-oth-member">
                  <input type="checkbox" name="member">
                  <label>记住密码</label>
                </div>
                <div class="form-oth-wjmima">
                  <a href="#">忘记密码</a>
                </div>
              </div>
              <div class="form-login">
                <button type="submit">登<span class="em"></span><span class="em"></span>录</button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </div>
  </div>
   

  <div class="login-b">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="login-b-tit">
            Copyright 2016 广州柯咔网络科技有限公司版权所有 粤ICP备XXXXXXXXX号 客服电话 : 400-020-xxxxxxx
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
  @import "../../assets/less/login.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>