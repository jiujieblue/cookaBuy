<template>
<div>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="body">
            编辑头像
          </slot>
          <span class="icon-cha" @click="closeModal"></span>
        </div>

        <div class="modal-body">
          <slot name="body">
            <button @click="chooseImg('close')"><span class="icon-iconfont-tupianku"></span>选择照片</button><br>
            <button @click="chooseImg('chooseImg')"><span class="icon-iconfont-xiangji"></span>拍摄照片</button>
            <input style="display:none" ref="changeImg" type="file" accept="image/*" @change="changeImg($event)">
          </slot>
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
          <div class="buyer-account"> 
            <div class="buyer-account-location">
              当前位置：账号管理 > 个人资料
            </div>
            <div class="buyer-account-info">
              <a v-bind:class="type == 1 ? 'active' : ''" v-on:click="_type(1)">基本信息</a><a v-bind:class="type == 2 ? 'active' : ''" v-on:click="_type(2)">个人信息</a>          
            </div>
            <div v-bind:style="{display: type == 1 ? 'block' : 'none'}">
              <form>
                <div class="buyer-account-basic">
                  <div class="basic-l">
                    <img v-bind:src="image">
                    <button type="button" v-on:click="openModal">编 辑 头 像</button>
                  </div>
                  <div class="basic-r">
                    <div>
                      账<span class="em"></span><span class="em"></span>号 : 12345612345
                    </div>
                    <div>
                      昵<span class="em"></span><span class="em"></span>称 : AAA
                      <button type="button">修改</button>
                    </div>
                    <div>手机号码 : 12345612345</div>
                  </div>
                </div>
                <div class="buyer-account-submit">
                  <button type="submit">保<span class="em"></span><span class="em"></span>存</button>
                </div>
              </form>
            </div>
            <div v-bind:style="{display:type == 2 ? 'block' : 'none'}">
              <div class="buyer-account-selfInfo">
                <p>带<b>*</b>处/为必填项 ; 请完善您的个人信息</p>
                <form>
                  <div>
                    <span class="em_5"></span>姓<span class="em"></span><span class="em"></span>名：AAA
                  </div>
                  <div>
                    <b>*</b>生<span class="em"></span><span class="em"></span>日：
                    <input type="date" name="birth" />
                  </div>
                  <div>
                    <b>*</b>性<span class="em"></span><span class="em"></span>别：
                    <input name="gender" class="check" id="man" type="radio" />
                    <label htmlFor="man">男</label>
                    <input name="gender" class="check" id="women" type="radio" />
                    <label htmlFor="women">女</label>
                  </div>
                  <div>
                    <b>*</b>所<span class="em_5"></span>在<span class="em_5"></span>地：
                    <select name="state">
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select name="city">
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select name="region">
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit">保<span class="em"></span><span class="em"></span>存</button>
                  </div>
                </form>
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
        type: 1,
        showModal: false,
        image: '',
        imageUrl: ''
      }
    },
    methods: {
      _type (t) {
        this.type = t
      },
      openModal () {
        this.showModal = true
      },
      closeModal () {
        this.showModal = false
      },
      chooseImg (t) {
        this.showModal = false
        if(t == 'close'){
          this.$refs.changeImg.click()
        }
      },
      changeImg (e) {
        var target = e.target
        var reg = /(\.jpg|\.png)$/ig
        console.log(target.value)
        if(!reg.test(target.value)){
          alert('请选择 JPG 或者 PNG 格式的图片');
          return;
        }
        if(target.files && target.files[0]){
          var me = this
          var reader = new FileReader();
          reader.onload = function(e){
            me.image = e.target.result
            me.imageUrl = target.files[0]
          }
        }
        reader.readAsDataURL(target.files[0])
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerInfo.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>