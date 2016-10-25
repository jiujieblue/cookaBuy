<template>
<div>
  <div class="register-t">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="register-t-tit">
            <img src="../../assets/images/logo.svg" width="150">
            <span>欢迎注册</span>
          </div>          
        </div>
      </div>
    </div>   
  </div>
  
  <div class="register-m">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="register">
            <div class="register-head">
              <div class="register-head-tit">
                新用户注册
              </div>
              <div class="register-head-menu">
                <span>已有账号?</span>
                <span><a href="#">立即登录</a></span>
              </div>
            </div>
            <form>
              <div class="form-phone">
                <label>手<span class="em"></span><span class="em"></span>机</label>
                <div class="input-box">
                  <span class="icon-zhanghao"></span>
                  <input type="text" name="phone" placeholder="请输入手机号码">
                </div>                        
              </div>
              <div class="form-psd">
                <label>密<span class="em"></span><span class="em"></span>码</label>
                <div class="input-box">
                  <span class="icon-mima"></span>
                  <input type="password" name="psd" placeholder="请输入密码">
                </div>
              </div>
              <div class="form-psd-cfig">
                <label>确认密码</label>
                <div class="input-box">
                  <span class="icon-mima"></span>
                  <input type="password" name="psdcfig" placeholder="请确认密码">
                </div>
              </div>
              <div class="form-verify">
                <label>短信验证</label>
                <div class="input-box">
                  <input type="text" name="verify" placeholder="请输入验证码">
                  <button type="button" v-bind:class="sendMsg ? 'after' : 'before'" v-bind:disabled="sendMsg" v-on:click="getCode">{{btnContent}}</button>
                </div>            
              </div>
              <div class="form-xieyi">
                <input type="checkbox">
                <label>我已阅读并同意<a href="#">《柯咔网络用户服务协议》</a></label>
              </div>
              <div class="form-submit">
                <button>注<span class="em"></span><span class="em"></span>册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div class="register-b">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="register-b-tit">
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
        btnContent: '获取短信验证码',
        sendMsg: false,
        sendTime: 60
      }
    },
    methods: {
      getCode () {
        var me = this;
        me.sendMsg = true;
        me.btnContent = '获取验证码(' + me.sendTime + ')'
        var timer = setInterval(function(){          
          me.sendTime--
          me.btnContent = '获取验证码(' + me.sendTime + ')'
          if(me.sendTime == 0){
            clearInterval(timer)
            me.sendTime = 60
            me.sendMsg = false
            me.btnContent = '获取短信验证码'
          }
        },1000)
      }
    
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/register.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>