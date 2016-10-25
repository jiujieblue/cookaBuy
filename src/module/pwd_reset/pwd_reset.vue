<template>
<div>
  <div class="pwd-head">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="pwd-head-tit">
            <img src="../../assets/images/logo.svg" width="150">
            <span>{{step == 1 ? '密码找回' : '密码重置'}}</span>
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
              {{step == 1 ? '密码找回' : '密码重置'}}
            </div>
            <div class="pwd-reset-form" v-bind:style="{display: step == 1 ? 'block' : 'none'}">
              <form v-on:submit="_submitCode" class="form-code">
                <div class="form-phone">
                  <label>手<span class="em"></span><span class="em"></span>机</label>
                  <span class="icon-zhanghao"></span>
                  <input type="text" name="phone">
                </div>
                <div class="form-code">
                  <label>短信验证</label>
                  <input type="text" name="code">
                  <button type="button" v-bind:class="sendMsg ? 'after' : 'before'" v-bind:disabled="sendMsg" v-on:click="_getCode">{{btnContent}}</button>
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
                  <input type="text" name="pwd">
                </div>
                <div class="form-pwd-conf">
                  <label>确认密码</label>
                  <span class="icon-mima"></span>
                  <input type="text" name="pwd-conf">
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
  export default{
    data () {
      return {
        step: 1,
        btnContent: '获取短信验证码',
        sendMsg: false,
        sendTime: 60
      }
    },
    methods: {
      _getCode () {
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
      },
      _submitCode (e) {
        e.preventDefault();
        var me =this;
        me.step = 2 ;
      },
      _submitPwd (e) {
        e.preventDefault();
        console.log(1)
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