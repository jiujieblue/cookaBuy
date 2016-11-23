<template>
<div>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>提示</h3>
        </div>

        <div class="modal-body">
          确定要删除该商铺吗？
        </div>

        <div class="modal-footer">
          <button @click="_close">关<span class="em"></span>闭</button>
          <button @click="_del">确<span class="em"></span>定</button>
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
          <div class="buyer-focus">
            <div class="buyer-focus-location">
              <div>当前位置：账号管理 > 关注店铺</div>
            </div>

            <div class="buyer-focus-null" v-show="!data.length">
              <div><img src="../../assets/images/shoucang.png" /></div>
              <div>您还没有收藏商品，<a>快去逛逛吧</a></div>
            </div>
            <div class="buyer-focus-data" v-show="data.length">
              <div class="buyer-focus-menu">
                <a v-bind:class="menu == 1 ? 'active' : ''" v-on:click="_changeMenu(1)">全部店铺 10</a>
                <a v-bind:class="menu == 2 ? 'active' : ''" v-on:click="_changeMenu(2)">上新 5</a>
                <a style="display:none" v-bind:class="menu == 3 ? 'active' : ''" v-on:click="_changeMenu(3)">优惠 3</a>
              </div>
              <div class="buyer-focus-shop">
                <div class="shopinfo">店铺信息</div>
                <div class="shopdata">店铺动态</div>
                <select v-on:change="_reverse">
                  <option value="1">收藏时间由新到旧</option>
                  <option value="2">收藏时间由旧到新</option>
                </select>
              </div>

              <div class="buyer-focus-detail" v-for="(item,index) in data">
                <div class="detail-l">
                  <div class="detail-l-t">
                    <img v-bind:src="item.store_logo" height="80" width="40" />
                    <span class="em"></span>{{item.store.store_name}}
                  </div>  
                  <div class="detail-l-m">
                    <p>{{item.store.location}}</p>
                    <p>
                      <span class="icon-dianhua"></span>
                      {{item.store.mobile}}
                    </p>
                  </div>
                  <div class="detail-l-b">
                    <a v-on:click="_showModal(index)"><span class="icon-lajitong"></span>删除</a>
                    <button>进店逛逛</button>
                  </div>
                </div>
                <div class="detail-r">
                  <div class="detail-r-t">
                    <span>新品</span>
                  </div>
                  <div class="detail-r-m">
                    <div v-show="indexIn < 4" class="detail-r-m-list" v-for="(itemIn,indexIn) in item.store.items">
                      <a><img v-bind:src="itemIn.pic_url" height="200" width="200" /></a>
                      <a>
                        {{itemIn.title}}
                      </a>
                      <div class="oth-info">
                        <p>&yen;{{itemIn.price}}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
        showModal: false,
        menu: 1,
        delNum: -1,
        data: []
      }
    },
    methods: {
      _changeMenu (t) {
        this.menu = t
      },
      _reverse () {
        this.data.reverse()
      },
      _showModal (t) {
        this.showModal = true
        this.delNum = t
      },
      _close () {
        this.showModal = false
        this.delNum = -1
      },
      _del () {
        this.$http.delete('/api/favorites/' + this.data[this.delNum].id)
        .then(function(ret){
          window.location.reload()
        },function(err){
          console.log(err)
        })
        this.showModal = false
        this.delNum = -1
      }
    },
    mounted () {
      this.$http.get('/api/favorites?type=store')
        .then(function(ret){
          this.data = ret.data.data
        },function(err){
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerFocus.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>