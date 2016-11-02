<template>
<div>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>提示</h3>
        </div>

        <div class="modal-body">
          确定要删除该卡吗？
        </div>

        <div class="modal-footer">
          <button @click="showModal=false">关闭</button>
          <button @click="_del">确定</button>
        </div>
      </div>
    </div>
  </div>

  <SellerCenterHeader></SellerCenterHeader>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <SellerCenterSideBar></SellerCenterSideBar>
        </div>
        <div class="col-md-10">
          <div class="daifa-bank">
            <div class="daifa-bank-location">
              当前位置：我的钱包 > 银行卡管理
            </div>
            <div v-bind:style="{display: type == 1 ? 'block' : 'none'}">
              <div class="daifa-bank-title">
                我的银行卡
              </div>
              <div class="daifa-bank-card">
                <div class="daifa-bank-card-detail">
                  <div class="detail-t">
                    <img src="../../assets/images/bankCard_gf.png">
                    <p>存储卡</p>
                  </div>
                  <div class="detail-m">
                    **** **** **** **** 0000
                  </div>
                  <div class="detail-b">
                    <a>编辑</a>
                    <a v-on:click="_showModal">删除此卡</a>
                  </div>
                </div>
                <div class="daifa-bank-card-add">
                  <h3>+</h3>
                  <p>添加银行卡</p>
                </div>
              </div>
            </div>
            <div v-bind:style="{display: type == 2 ? 'block' : 'none'}">
              <form class="daifa-bank-addcard">
                <div class="xingming">
                  <span class="em"></span><label>姓<span class="em"></span><span class="em"></span>名:</label>
                  AAA
                </div>
                <div class="shenfenzheng">
                  <label><b>*</b><span class="em_5"></span>身份证号:</label>
                  <input />
                </div>
                <div class="bankname">
                  <label><b>*</b><span class="em_5"></span>银行名称:</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="cardnum">
                  <label><b>*</b><span class="em_5"></span>银行卡号:</label>
                  <input />
                  <label class="tishi">只支持储蓄卡</label>
                </div>
                <div class="phonenum">
                  <label><b>*</b><span class="em_5"></span>手机号码:</label>
                  <input />
                  <label class="tishi">请填写该卡在银行预留的手机号码</label>
                </div>
                <div class="yanzhengma">
                  <label><b>*</b><span class="em_5"></span>验<span class="em_5"></span>证<span class="em_5"></span>码:</label>
                  <input class="yanzhengmaipt" />
                  <button type="button" class="getyanzhengma">
                    获取验证码
                  </button>
                </div>
                <div class="tijiao">
                  <div><a>《柯咔在线支付相关协议》</a></div>
                  <div><button type="submit">同意协议并确定</button></div>       
                </div>
              </form>
            </div>
            <div v-bind:style="{display:type == 3 ? 'block' : 'none'}">
              <div class="daifa-bank-addcardsucc">
                <span class="icon-addcardsucc"></span>
                <h3>添加银行卡成功</h3>
                <p>您已成功添加银行卡，返回银行卡管理界面可以对该银行卡进行管理。若需要<a>设置/修改支付密码</a>，请到账户管理 - 账户安全区设置，谢谢！</p>
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
  import SellerCenterHeader from 'components/SellerCenterHeader'
  import fot from 'components/footer'
  import SellerCenterSideBar from 'components/SellerCenterSideBar'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      SellerCenterHeader,
      fot,
      SellerCenterSideBar
    },
    data () {
      return {
        type: 1,
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
  @import "../../assets/less/daifaBank.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>