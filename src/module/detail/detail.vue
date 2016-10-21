<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-12 header">
        <h2>我是头部</h2>
      </div>
    </div>
  </div>

  <div class="bg-t">
    <div class="container detail">
      <div class="row detail-shopping-box">
        <div class="col-md-10 detail-shopping">
          <div class="shop-tit">
            <div class="shop-logo">
              <img v-bind:src="logoUrl">
            </div>
            <div class="shop-name">
              <h4>{{store_name}}</h4>
              <p>本店{{productNum}}件商品</p>
            </div>
            <div class="shop-conn">
              <p>{{phone}}</p>
              <p>{{addr}}</p>
            </div>
          </div>
          <div class="shopping-detail">
            <div class="img-box">
              <div class="img-show">
                <img v-bind:src="carousel[img_t] && carousel[img_t].tb_url">
              </div>
              <div class="img-list">
                <img v-for="(imgItem,index) in carousel" v-bind:src="imgItem.tb_url" v-on:mouseover="showImg(index)" v-bind:class="{'active' : img_t==index}">
              </div>
            </div>
            <div class="shopping-desc">
              <div class="desc-tit">
                {{tit}}
              </div>
              <div class="desc-pri">
                <div class="price-tidu">
                  <h4>&yen; 200.00</h4>
                  <p>2-18件</p>
                </div>
                <div class="price-tidu">
                  <h4>&yen; 200.00</h4>
                  <p>19-50件</p>
                </div>
                <div class="price-tidu">
                  <h4>&yen; 200.00</h4>
                  <p>50件以上</p>
                </div>
              </div>
              <div class="desc-trans" style="display:none;">
                配<b class="em_5"></b>送 : 广东广州 至
                <select class="trans-addr">
                  <option>aaa</option>
                  <option>bbb</option>
                </select>
                <select class="trans-pri">
                  <option>快递 &yen; 8.00</option>
                  <option>平邮 &yen; 8.00</option>
                  <option>上门自提</option>
                </select>
              </div>
              <div class="desc-color">
                <div>颜<b class="em_5"></b>色 : </div>
                <div>
                  <img v-for="(imgItem,index) in colorItem" v-bind:src="imgItem.a" v-bind:title="imgItem" v-on:click="chooseColor(index)" v-bind:class="{'active':color_t == index}">
                </div>
              </div>
              <div class="desc-size">
                <div>尺<b class="em_5"></b>码 : </div>
                <div>
                  <img v-for="(imgItem,index) in sizeItem" v-bind:src="imgItem.image" v-bind:title="imgItem" v-on:click="chooseSize(index)" v-bind:class="{'active':size_t == index}">
                </div>
              </div>
              <div class="desc-num">
                <p style="display:none;">数<b class="em_5"></b>量 : </p>
                <button style="display:none;" class="num-del" v-on:click="_chooseNum(-1)">-</button>
                <input style="display:none;" type="text" v-on:change="_changeNum" v-bind:value="chooseNum">
                <button style="display:none;" class="num-add" v-on:click="_chooseNum(1)">+</button>
                <p style="margin-left:55px;">(库存 {{totalAmount}} 件)</p>
              </div>
              <div class="desc-action" style="display:none;">
                <button v-on:click="_addCart">加入进货单</button>
                <button>去购物车结算</button>
              </div>
              <div class="desc-oth">
                <span style="display:none;">收藏</span>
                <span style="display:none;">(人气<b class="em_5"></b>:<b class="em_5"></b>4400)</span>
                <span style="margin-left:55px;"><a href="#">分享</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 detail-recommend">
          <div class="recommend-tit">
            <span class="icon-bendiantuijian"></span>
            <p>本店推荐</p>
          </div>
          <div class="recommend-list">
            <img v-for="imgItem in recommend" v-bind:src="imgItem.imageUrl">
            <div class="recommend-page">
              <span class="icon-fanyeup" v-bind:class="{'active' : hasPreviousPage}" v-on:click="fanye(-1)"></span>
              <span class="icon-fanyedown" v-bind:class="{'active' : hasNextPage}" v-on:click="fanye(1)"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
            <div class="detail-news">
              <div class="news-tit">
                <p>最新上架</p>
                <a href="#"><span class="icon-more"></span></a>
              </div>
              <div class="news-list">
                <div v-for="newItem in newList" class="news-img">
                  <img v-bind:src="newItem.imageUrl">
                  <a class="img-tit">
                    {{newItem.title}}
                  </a>
                  <div class="img-info">
                    <p>&yen; {{newItem.price}}</p>
                    <p>50分钟前</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-b">
    <div class="container oth">
      <div class="row">
        <div class="col-md-12">
          <div class="detail-det">
            <ul class="shopping-menu">
              <li v-bind:class="{'active': tabList == 1}" v-on:click="tab(1)">
                商品详情
              </li>
              <li v-bind:class="{'active': tabList == 2}" v-on:click="tab(2)" style="display:none;">
                商品评论
              </li>
            </ul>
            <div v-if="tabList==1">
              <div class="specif">
                <div class="sanjiao"></div>
                <div>规格参数</div>
                <div class="hr"></div>
              </div>
              <div class="specif-tab">
                <table>
                  <tbody>
                    <tr v-for="(arr,index) in item_props">
                      <td>{{arr[0].p_name}} : {{arr[0].p_value}}</td>
                      <td>{{arr[1].p_name}} : {{arr[1].p_value}}</td>
                      <td>{{arr[2].p_name}} : {{arr[2].p_value}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="detail-desc">
                <div class="sanjiao"></div>
                <div>图文详情</div>
                <div class="hr"></div>
              </div>
              <div class="detail-desc-des">
                <div v-html="description"></div>
              </div>
            </div>
            <div v-else>
              <h2>我是评论</h2>
            </div>
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
        data: {},
        storeId: '',
        logoUrl: '',
        store_name: '',
        productNum: '',
        phone: '',
        addr: '',
        carousel: [],
        tit: '',
        skus: [],
        colorItem: [],
        sizeItem: [],
        totalAmount: '',
        img_t: 0,
        color_t: -1,
        size_t: -1,
        chooseNum: 0,
        recommend: [],
        page: 1,
        hasNextPage: false,
        hasPreviousPage: false,
        newList: [],
        tabList: 1,
        item_props: [],
        description: ''
      }
    },
    methods: {
      showImg (t) {
        this.img_t = t
      },
      chooseColor (t) {
        this.color_t = t
        if (this.size_t !== -1) {
          this.totalAmount = this.colorItem[t].child[this.size_t].amount
        }
      },
      chooseSize (t) {
        this.size_t = t
        if (this.color_t !== -1) {
          this.totalAmount = this.colorItem[this.color_t].child[t].amount
        }
      },
      fanye (t) {
        if (t === 1 && this.hasNextPage) {
          ++this.page
        }
        if (t === -1 && this.hasPreviousPage) {
          --this.page
        }
        if (t === 1 && this.hasNextPage || t === -1 && this.hasPreviousPage) {
          this.$http.get('/cooka-productDetail-web/recommendProducts?productId=1233&storeId=6&page=' + this.page)
            .then(function (ret) {
              this.recommend = ret.data.list
              this.hasPreviousPage = ret.data.hasPreviousPage
              this.hasNextPage = ret.data.hasNextPage
            },
            function (err) {
              console.log(err)
            })
        }
      },
      _chooseNum (t) {
        if (t === -1 && this.chooseNum > 0) {
          console.log(t)
          --this.chooseNum
        }
        if (t === 1) {
          ++this.chooseNum
        }
      },
      _changeNum (e) {
        this.chooseNum = parseInt(e.target.value)
      },
      _addCart () {
        var data = {
          storeId: 2,
          productId: 1,
          combination: [{
            combinationId: 2,
            getamount: 2
          }]
        }
        this.$http.post('/cooka-productDetail-web/m/addToCart', data)
          .then(function (ret) {
            console.log(ret.data)
          },
          function (err) {
            console.log(err)
          })
      },
      tab (t) {
        this.tabList = t
      }
    },
    mounted () {
      var p = window.location.href.split('?')[1];
      this.$http.get('/api/items/526975405598')
        .then(function (ret) {
          this.data = ret.data.data
          // this.storeId = ret.data.storeProfileForm.store.storeId
          this.carousel = ret.data.data.item_imgs
          // this.logoUrl = ret.data.storeProfileForm.storeProfile.logoUrl
          this.store_name = ret.data.data.store.store_name
          // this.productNum = ret.data.storeProfileForm.productNum
          this.phone = ret.data.data.store.mobile
          this.addr = ret.data.data.store.origin_area + '-' +ret.data.data.store.location
          this.tit = ret.data.data.title
          for(var i = 0;i < ret.data.data.skus.length;i++){
            var diff = ret.data.data.skus[i].properties_name.split(';')
            for(var j = 0 ;j < diff.length;j++){
              diff[j] = diff[j].split(':')
            }
            this.colorItem.push(diff[1][1])
            this.sizeItem.push(diff[0][1])
          }

          var l = ret.data.data.item_props.length % 3 ? parseInt(ret.data.data.item_props.length / 3) + 1 : ret.data.data.item_props.length / 3;
          var n = 0;
          for(var i = 0;i < l;i++){
            var arr = [];
            for(var j = 0; j < 3; j++){
              if(ret.data.data.item_props[n]){
                arr.push(ret.data.data.item_props[n])
                n++
              }
            }
            this.item_props.push(arr)
          }
          // this.totalAmount = ret.data.totalAmount
          this.description = ret.data.data.desc
          // this.$http.get('/cooka-productDetail-web/recommendProducts?' + p + '&page=' + this.page)
          //   .then(function (ret) {
          //     this.recommend = ret.data.list
          //     this.hasPreviousPage = ret.data.hasPreviousPage
          //     this.hasNextPage = ret.data.hasNextPage
          //     this.$http.get('/cooka-productDetail-web/newestProducts?' + p)
          //       .then(function (ret) {
          //         this.newList = ret.data
          //       },
          //       function (err) {
          //         console.log(err)
          //       })
          //   },
          //   function (err) {
          //     console.log(err)
          //   })
        },
        function (err) {
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/detail.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
