<template>
<div>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>提示</h3>
        </div>

        <div class="modal-body">
          确定要删除该宝贝吗？
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
          <div class="seller-draft">
            <div class="seller-draft-location">
              当前位置：商品管理 > 草稿箱
            </div>
            <form class="seller-draft-menu">
              <div class="menu-type">
                <span>商品分类:</span>
                <select>
                  <option>111</option>
                </select>
                <select>
                  <option>111</option>
                </select>
                <select>
                  <option>111</option>
                </select>
              </div>
              <div class="menu-oth">
                <div class="shopping-name">
                  <span>商品名称:</span>
                  <input />
                </div>
                <div class="recent-time">
                  <span>最近编辑时间:</span>
                  <input type="date"/> - <input type="date"/>
                </div>
                <div class="submit">
                  <button type="submit">查找</button>
                </div>
              </div>
            </form>
            <div class="seller-draft-list">
              <table>
                <thead>
                  <tr>
                    <td>序号</td>
                    <td>商品分类</td>
                    <td>商品名称</td>
                    <td>最近编辑时间</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>女装/女士精品>裤子>休闲裤</td>
                    <td>魅力四射</td>
                    <td>
                      <p>2016-09-21</p>
                      <p>08:00:00</p>
                    </td>
                    <td>
                      <a>编辑</a>
                      <span class="em"></span>
                      <a v-on:click="_showModal">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>女装/女士精品>裤子>休闲裤</td>
                    <td>魅力四射</td>
                    <td>
                      <p>2016-09-21</p>
                      <p>08:00:00</p>
                    </td>
                    <td>
                      <a>编辑</a>
                      <span class="em"></span>
                      <a v-on:click="_showModal">删除</a>
                    </td>
                  </tr>             
                </tbody>
              </table>
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
        showModal: false
      }
    },
    methods: {
      _showModal () {
        this.showModal = true
      },
      _del () {
        this.showModal = false
      },
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/sellerDraft.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>