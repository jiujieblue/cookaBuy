<template>
<div>
  <div class="pwd-head">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pwd-head-tit">
            <a href="./index.html">
              <img src="../../assets/images/logo.svg" width="150">
            </a>
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
            <div class="pwd-reset-form" v-if="step == 1">
              <form v-on:submit="_submitCode" class="form-code">
                <div class="form-phone">
                  <label>手<span class="em"></span><span class="em"></span>机</label>
                  <span class="icon-zhanghao"></span>
                  <input type="text" name="mobile" ref="phone" v-on:blur="_checkPhone($event)" v-on:focus="_writePhone" v-model="mobile">
                </div>
                <div class="form-code">
                  <label>短信验证</label>
                  <input type="text" name="code">
                  <button type="button" v-bind:class="sendMsg || vitified ? 'after' : 'before'" v-bind:disabled="sendMsg || vitified" v-on:click="_getCode">{{btnContent}}</button>
                </div>
                <div class="form-err" v-bind:style="{display: error ? 'block' : 'none'}">
                  {{error}}
                </div>
                <div class="form-submit">
                  <button v-bind:class="vitified ? 'disabled' : ''" v-bind:disabled="vitified" type="submit">提<span class="em"></span>交</button>
                </div>
              </form>
            </div>

            <div class="pwd-reset-form" v-if="step == 2">
              <form v-on:submit="_submitPwd" class="form-pwd">
                <div class="form-pwd">
                  <label>新<span class="em_5"></span>密<span class="em_5"></span>码</label>
                  <span class="icon-mima"></span>
                  <input type="password" name="password">
                </div>
                <div class="form-pwd-conf">
                  <label>确认密码</label>
                  <span class="icon-mima"></span>
                  <input type="password" name="confirmation">
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
        mobile: '',
        error: '',
        step: 1,
        btnContent: '获取短信验证码',
        sendMsg: false,
        sendTime: 60,
        vitified: true
      }
    },
    methods: {
      _checkPhone (e) {
        if((!e.target.value) || (e.target.value && !(/^1[\d]{10}$/.test(this.$refs.phone.value)))){
          this.error = '请输入正确的手机号码'
        }
        else{
          this.$http.get('/jwt/check_exist?mobile=' + e.target.value)
            .then(
              function(ret){
                if(!ret.data.msg){
                  this.error = '该账号未注册'
                  this.vitified = true
                }
                else{
                  this.error = '';
                  this.vitified = false
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
          this.$http.get('/jwt/send_code?mobile='+this.$refs.phone.value+'&type=reset_pw')
          .then(function (ret) {
            if(ret.data.msg == 'OK'){
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
        if (!data.mobile) {
          this.error = '手机号码不能为空'
          return false;
        }
        else{
          this.error = '';
        }
        if(!(/^1[\d]{10}$/.test(data.mobile))){
          this.error = '请输入正确的手机号码'
          return false;
        }
        else{
          this.error = ''
        }
        if (!data.code){          
          this.error = '验证码不能为空'
          return false;
        }
        else if (!(/^[\d]{6}$/.test(data.code))){
          this.error = '验证码格式不正确'
          return false;
        }
        else{
          this.error = ''
        }
        this.$http.post('/jwt/validate',data)
          .then(function(ret){
            if(ret.data.msg == 'OK.'){
              this.step = 2
              this.error = ''
            }
            else if(ret.data.msg == 'Code not right.'){
              this.error = '手机号码或验证码不正确'
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
        else if (data.password !== data.confirmation) {
          this.error = '两次密码输入不一致'
          return false;
        }
        else{
         this.error = ''
        }
        data.mobile = this.mobile
        this.$http.post('/jwt/reset_pw',data)
          .then(function(ret){
            if(ret.data.msg == 'Reset password ok.'){
              this.error = ''
              location.href = './login.html'
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
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
  @import "../../assets/less/pwd_reset.less";
</style>