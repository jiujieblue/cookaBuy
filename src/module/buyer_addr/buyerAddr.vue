<template>
<div>
  <!-- use the modal component, pass in the prop -->
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>提示</h3>
        </div>

        <div class="modal-body">
          确定要删除该收货地址吗？
        </div>

        <div class="modal-footer">
          <button @click="showModal=false">关闭</button>
          <button @click="_del">确定</button>
        </div>
      </div>
    </div>
  </div>
  <BuyerCenterHeader></BuyerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <BuyerCenterSideBar></BuyerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="buyer-addr">
            <div class="buyer-addr-location">
              当前位置：账号管理 > 收货地址
            </div>
            <div class="buyer-addr-add">
              <button v-on:click="_showModal">新增收货地址</button>
            </div>
            <table class="buyer-addr-list">
              <thead>
                <tr>
                  <td>收货人</td>
                  <td>所在地址</td>
                  <td>详细地址</td>
                  <td>邮编</td>
                  <td>联系方式</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="icon-moren"></span>AAA</td>
                  <td>广东省 广州市 越秀区</td>
                  <td class="addrdet">
                    <div class="addrdetail">
                      <p>水荫路</p>
                    </div>
                  </td>
                  <td>512000</td>
                  <td>12345612345</td>
                  <td class="spc">
                    <a>编辑</a>
                    <span class="em"></span>
                    <span class="icon-sanchu" v-on:click="_showModal"></span>
                  </td>
                </tr>

                <tr>
                  <td>AAA</td>
                  <td>广东省 广州市 越秀区</td>
                  <td class="addrdet">
                    <div class="addrdetail">
                      <p>水荫路</p>
                    </div>
                  </td>
                  <td>512000</td>
                  <td>12345612345</td>
                  <td>
                    <a>设为默认</a><span class="em"></span><span>|</span><span class="em"></span>
                    <a>编辑</a>
                    <span class="em"></span>
                    <span class="icon-sanchu" v-on:click="_showModal"></span>
                  </td>
                </tr>
              </tbody>
            </table>
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
  import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      BuyerCenterHeader,
      fot,
      BuyerCenterSideBar
    },
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      _showModal () {
        this.showModal = true
      },
      _del () {
        this.showModal = false
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerAddr.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>