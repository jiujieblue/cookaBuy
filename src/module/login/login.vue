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
            <a href="./index.html">
              <img src="../../assets/images/logo.svg" width="150">
            </a>
            <span>欢迎登录</span>
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
                <a href="./register.html">立即注册</a>
              </div>
            </div>
            <form v-on:submit="_submit">
              <div class="form-zhanghao">
                <span class="icon-zhanghao"></span>
                <input type="text" name="mobile" placeholder="请输入您的手机号码" ref="phone" v-on:blur="_checkPhone($event)" v-on:focus="_writePhone">
              </div>
              <div class="form-err" v-bind:style="{visibility: mobileError == '请输入正确的手机号码' || mobileError == '手机号码不能为空' ? 'visible' : 'hidden'}">
                {{mobileError}}
              </div>
              <div class="form-psd">
                <span class="icon-mima"></span>
                <input type="password" name="password" placeholder="请输入密码">
              </div>
              <div class="form-err" v-bind:style="{visibility: passwordError == '密码不能为空' ||　'密码不正确' || '密码至少为8个字符' ? 'visible' : 'hidden'}">
                {{passwordError}}
              </div>
              <div class="form-oth">
                <div class="form-oth-member">
                  <input type="checkbox" name="member">
                  <label>记住账号</label>
                </div>
                <div class="form-oth-wjmima">
                  <a href="./pwdReset.html">忘记密码</a>
                </div>
              </div>
              <div class="form-login">
                <button>登<span class="em"></span><span class="em"></span>录</button>
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
            Copyright©2017 广州柯咔网络科技有限公司  www.cookabuy.com  粤ICP备15091531号  客服热线:400-8868-900
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
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    data () {
      return {
        mobileError: '',
        passwordError: ''
      }
    },
    methods: {
      _checkPhone (e) {
        if((!e.target.value) || (e.target.value && !(/^1[\d]{10}$/.test(this.$refs.phone.value)))){
          this.mobileError = '请输入正确的手机号码'
          this.passwordError = ''
        }
      },
      _writePhone () {
        this.mobileError = ''
        this.passwordError = ''
      },
      _submit (e) {
        e.preventDefault();
        var data = fto(e.target);
        if (!data || !data.mobile) {
          this.mobileError = '手机号码不能为空'
          return false;
        }
        else{
          this.mobileError = '';
        }
        if(!(/^1[\d]{10}$/.test(data.mobile))){
          this.mobileError = '请输入正确的手机号码'
          return false;
        }
        else{
          this.mobileError = ''
        }
        if(!data.password){          
          this.passwordError = '密码不能为空'
          return false;
        }
        else{
          this.passwordError = ''
        }
        this.$http.post('/jwt/sign_in',{'user': data})
          .then(function(ret){
            if(ret.data.msg == 'Mobile or password is error.'){
              this.passwordError = '手机号或者密码不正确'
            }
            else if(ret.data.errors){
              this.passwordError = '密码至少为8个字符'
            }
            if(ret.data.jwt){
              this.passwordError = ''
              location.href = './index.html'
            }
          },
          function(err){
            console.log(err)
          })
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
  @import "../../assets/less/login.less";
</style>