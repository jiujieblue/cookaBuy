<template>
<div>
  <div class="pwd-head">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pwd-head-tit">
            <img src="../../assets/images/logo.svg" width="150">
            <span>密码找回</span>
          </div>          
        </div>
      </div>
    </div>   
  </div>
  <div class="pwd-reset-box">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pwd-reset">
            <div class="pwd-reset-tit">
              密码找回
            </div>
            <div class="pwd-reset-form" v-bind:style="{display: step == 1 ? 'block' : 'none'}">
              <form v-on:submit="_submitCode" class="form-code">
                <div class="form-phone">
                  <label>手<span class="em"></span><span class="em"></span>机</label>
                  <span class="icon-zhanghao"></span>
                  <input type="text" name="phone" ref="phone" v-on:blur="_checkPhone($event)" v-on:focus="_writePhone">
                </div>
                <div class="form-code">
                  <label>短信验证</label>
                  <input type="text" name="mobileCode">
                  <button type="button" v-bind:class="sendMsg ? 'after' : 'before'" v-bind:disabled="sendMsg" v-on:click="_getCode">{{btnContent}}</button>
                </div>
                <div class="form-err" v-bind:style="{display: error ? 'block' : 'none'}">
                  {{error}}
                </div>
                <div class="form-submit">
                  <button type="submit">提<span class="em"></span>交</button>
                </div>
              </form>
            </div>

            <div class="pwd-reset-form" v-bind:style="{display: step == 2 ? 'block' : 'none'}">
              <form v-on:submit="_submitPwd" class="form-pwd">
                <div class="form-pwd">
                  <label>新<span class="em_5"></span>密<span class="em_5"></span>码</label>
                  <span class="icon-mima"></span>
                  <input type="password" name="password">
                </div>
                <div class="form-pwd-conf">
                  <label>确认密码</label>
                  <span class="icon-mima"></span>
                  <input type="password" name="confirmPassword">
                </div>
                <div class="form-err" v-bind:style="{display: error ? 'block' : 'none'}">
                  {{error}}
                </div>
                <div class="form-submit">
                  <button type="submit">提交(马上去登录)</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div class="pwd-foot">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pwd-foot-tit">
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
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    data () {
      return {
        error: '',
        step: 1,
        btnContent: '获取短信验证码',
        sendMsg: false,
        sendTime: 60
      }
    },
    methods: {
      _checkPhone (e) {
        if((!e.target.value) || (e.target.value && !(/^1[\d]{10}$/.test(this.$refs.phone.value)))){
          this.error = '请输入正确的手机号码'
        }
        else{
          this.$http.get('/checkExist?phone=' + e.target.value)
            .then(
              function(ret){
                if(ret.data.result == 'SUCCESS'){
                  this.error = '';
                }
                else{
                  this.error = ret.data.error;
                }
              },
              function(err){
                console.log(err)
            })
        }
      },
      _writePhone () {
        this.error = ''
      },
      _getCode () {
        var me = this;
        if(!(/^1[\d]{10}$/.test(me.$refs.phone.value))){
          this.error = '请输入正确的手机号码'
        }
        else{
          this.$http.post('/verifyCode?phone='+this.$refs.phone.value)
          .then(function (ret) {
            this.error = ''
            if(ret.data.result == 'SUCCESS'){
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
          function (err) {
            console.log(err)
          })
        }
      },
      _submitCode (e) {
        e.preventDefault();
        var me =this;
        var data = fto(e.target)
        if (!data.phone) {
          this.error = '手机号码不能为空'
          return false;
        }
        else{
          this.error = '';
        }
        if(!(/^1[\d]{10}$/.test(data.phone))){
          this.error = '请输入正确的手机号码'
          return false;
        }
        else{
          this.error = ''
        }
        if (!data.mobileCode){          
          this.error = '验证码不能为空'
          return false;
        }
        else if (!(/^[\d]{6}$/.test(data.mobileCode))){
          this.error = '验证码格式不正确'
          return false;
        }
        else{
          this.error = ''
        }
        var formData = new FormData();
        formData.append('phone',data.phone);
        formData.append('mobileCode',data.mobileCode)
        this.$http.post('/verifyPrincipal',formData)
          .then(function(ret){
            if(ret.data.result == 'SUCCESS'){
              this.step = 2
              this.error = ''
            }
            else{
              this.error = ret.data.error
            }
          },function(err){
            console.log(err)
          })
        
      },
      _submitPwd (e) {
        e.preventDefault();
        var data = fto(e.target);
        if(!data.password){          
          this.error = '密码不能为空'
          return false;
        }
        else if (data.password !== data.confirmPassword) {
          this.error = '两次密码输入不一致'
          return false;
        }
        else{
         this.error = ''
        }
        var formData = new FormData();
        formData.append('password',data.password)
        formData.append('confirmPassword',data.confirmPassword)
        this.$http.post('/modifyPassword',formData)
          .then(function(ret){
            if(ret.data.result == 'SUCCESS'){
              this.error = ''
            }
            else{
              this.error = ret.data.error
            }
          },function(err){
            console.log(err)
          })
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/pwd_reset.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>