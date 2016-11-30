<template>
<div>
  <div v-if="showModal" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3><span class="icon-wenhao"></span><span>{{modalType == 1 ? '删除收藏的商品' : '删除收藏的失效商品'}}</span></h3>
        </div>

        <div class="modal-body">
        {{modalType == 1 ? '确定要删除选中的收藏商品吗？' : '确定要删除全部失效商品吗？'}}
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
          <div class="buyer-colle">
            <div class="buyer-colle-location">
              当前位置：账号管理 > 收藏商品
            </div>

            <div class="buyer-colle-null" style="display:none">
              <div><img src="../../assets/images/dianpu.png" /></div>
              <div>没有任何关注店铺，<a>快去逛逛吧</a></div>
            </div>

            <div class="buyer-colle-data" style="display:block">
              <div class="buyer-colle-menu">
                <ul>
                  <li v-on:click="_menu(1)" v-bind:class="menu == 1 ? 'active' : ''">全部<span>{{total_entries}}</span></li>
                  <!-- <li v-on:click="_menu(2)" v-bind:class="menu == 2 ? 'active' : ''">免邮<span>12</span></li>
                  <li v-on:click="_menu(3)" v-bind:class="menu == 3 ? 'active' : ''">优惠<span>10</span></li> -->
                  <li v-on:click="_menu(4)" v-bind:class="menu == 4 ? 'active' : ''">上架时间<span class="icon-xiajiang"></span></li>
                  <li v-on:click="_menu(5)" v-bind:class="menu == 5 ? 'active' : ''">上架时间<span class="icon-shangshen"></span></li>
                </ul>
              </div>
              <div class="buyer-colle-caozuo">
                <p>您有<span>{{invalid_count}}</span>个失效商品</p>
                <a v-on:click="_delInvalid" v-if="invalid_count">全部删除</a>
                <div class="caozuo-box">
                  <div v-bind:style="{display: isPiliang ? 'block' : 'none'}">
                    <input id="all" type="checkbox" v-on:change="_checkAll($event)"/><label for="all">全选</label>
                    <a v-on:click="_showModal"><span class="icon-lajitong"></span>删除</a>
                  </div>              
                  <a v-on:click="_piliang">{{isPiliang ? '取消管理' : '批量管理'}}</a>
                </div>
              </div>
              <div class="buyer-colle-list" >
                <div class="list-detail" v-for="(item,index) in data">
                  <div class="list-detail-img" v-bind:class="isChecked[index] ? 'list-detail-img active' : 'list-detail-img'">
                    <a><img v-bind:src="item.item.pic_url" v-on:click="_checked(index)"/></a>
                    <b v-bind:style="{display: isPiliang ? 'block' : 'none'}" v-bind:class="isChecked[index] ? 'icon-xuanzhong' : 'icon-shubiaoyiru'">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </b>
                  </div>              
                  <a>{{item.item.title}}</a>
                  <div class="list-detail-oth">
                    <p>&yen; {{item.item.price}}</p>
                    <a>
                      <span class="icon-dianpu" title="去他的店"></span>
                    </a>
                  </div>
                </div>                   
              </div>
            </div>
            <Page :pageNum="page" :pages="total_pages" @submitPage="_page"></Page>
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
  import Page from '../../components/CkPagination.vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)
  export default{
    components: {
      BuyerCenterHeader,
      fot,
      BuyerCenterSideBar,
      Page
    },
    data () {
      return {
        modalType: -1,
        showModal: false,
        menu: 1,
        page: 1,
        total_entries: 0,
        interface: '',
        total_pages: 0,
        invalid_count: 0,
        isPiliang:false,
        isChecked:[],
        isAll:false,
        data:[]
      }
    },
    methods: {
      _menu (t) {
        this.menu = t
        this.isChecked.splice(0,this.isChecked.length)
        if(t == 1){
          this.$http.get('/api/favorites?type=item')
            .then(function(ret){
              this.data = ret.data.data
            },function(err){
              console.log(err)
            })
        }
        if(t == 4 || t == 5){
          this.page = 1
          var order = (t == 4 ? 'asc' : 'desc')
          this.$http.get('/api/favorites?type=item&page_size=16&order=' + order)
            .then(function(ret){
              this.data = ret.data.data
            },function(err){
              console.log(err)
            })
        }
        for(var i = 0;i < this.data.length;i++){
          this.isChecked.push(false)
        }
      },
      _showModal () {
        this.showModal = true
        this.modalType = 1
      },
      _close () {
        this.showModal = false
        this.modalType = -1
      },
      _delInvalid () {
        this.showModal = true
        this.modalType = 0
      },
      _del () {
        if(this.modalType){
          var delNum = [];
          for(var i = 0;i < this.isChecked.length;i++){
            if(this.isChecked[i]){
              delNum.push(this.data[i].id)
            }
          }
          var ids = delNum.join(',')
          this.$http.delete('/api/favorites/' + ids)
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
        else{
          this.$http.get('/api/favorites/deleteInvalid')
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
        this.showModal = false
        this.modalType = -1
        // window.location.reload()
      },
      _piliang () {
        this.isPiliang = !this.isPiliang
        for(var i = 0;i < this.isChecked.length;i++){
          this.$set(this.isChecked, i, false)
        }
      },
      _checked (t) {
        if(this.isPiliang){
          this.$set(this.isChecked, t, !this.isChecked[t])
        }  
      },
      _checkAll (e) {
        for(var i = 0;i < this.isChecked.length;i++){
          this.$set(this.isChecked, i, e.target.checked)
        }
      },
      _page (val) {
        this.page = val
        this.isChecked.splice(0,this.isChecked.length)
        this.$http.get('/api/favorites?type=item&page_size=16&page=' + val)
          .then(function(ret){
            this.data = ret.data.data
            this.total_pages = ret.data.total_pages
            this.invalid_count = ret.data.invalid_count
            console.log(this.page)
            for(var i = 0;i <  this.data.length;i++){
              this.isChecked.push(false)
            }
          },function(err){
            console.log(err)
          })
      }
    },
    mounted () {
      this.interface = '/api/favorites?type=item&page_size=16'
      this.$http.get('/api/favorites?type=item&page_size=16&page=1')
        .then(function(ret){
          this.data = ret.data.data
          this.page = ret.data.page_number
          this.total_pages = ret.data.total_pages
          this.invalid_count = ret.data.invalid_count
          this.total_entries = ret.data.total_entries
          for(var i = 0;i <  this.data.length;i++){
            this.isChecked.push(false)
          }
        },function(err){
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/buyerColle.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>