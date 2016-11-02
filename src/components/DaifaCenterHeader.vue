<template>
  <div class="daifa-header">
    <div class="daifa-header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li>
                您好，<a href="#">12345612345</a>
              </li>
              <li>
                <a href="#">退出</a>
              </li>
            </ul>
          </div>          
        </div>
      </div>
    </div>
    <div class="daifa-header-mid">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="daifa-header-mid-box">
              <div>
                <a><span class="icon-cooka"></span></a>               
              </div>
              <div>用户中心</div>
              <div>我是代发</div>
              <div class="daifa-info">
                <span>HI~12345612345</span>
                <img src="../assets/images/detail-look.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default{
    data(){
      return{
      }
    },
    methods:{
      
    },
    mounted(){

    }
  }
</script>

<style lang="less">
  @import '../assets/less/daifacenter_header.less';
  @import '../assets/css/icons.css';
  @import '../assets/css/bootstrap.css';
  @import "../assets/less/public.less";
  @import "../assets/less/C.less";
</style>