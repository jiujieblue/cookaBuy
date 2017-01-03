<template>
<div>
  <headerComponent pageName="detailPage" :keyword="q"  @subKeyword="_subkeyword" @subStor="_subStor"></headerComponent>
  <div class="bg-t">
    <div class="container detail">
      <div class="row detail-shopping-box">
        <div class="detail-shopping">
          <div class="shop-tit">
            <div class="shop-logo">
              <div>SHOP</div>
            </div>
            <div class="shop-name">
              <h4 v-on:click="_more">{{store_name}}</h4>
              <p>本店{{productNum}}件商品</p>
            </div>
            <div class="shop-conn">
              <p>
                <span class="icon-dianhua"></span>
                <span>{{phone}}</span>
              </p>
              <p>{{addr}}</p>
            </div>
          </div>
          <div class="shopping-detail">
            <div class="img-box">
              <div class="img-show">
                <img v-bind:src="showImg">
              </div>
              <div class="img-list">
                <img v-for="(imgItem,index) in carousel" v-bind:src="imgItem.tb_url" v-on:mouseover="_showImg(index)" v-bind:class="{'active' : img_t==index}" v-if="index < 6">
              </div>
            </div>
            <div class="shopping-desc">
              <div class="desc-tit">{{tit}}</div>
              <div class="desc-pri">
                <div class="price-tidu">
                  <h4>&yen; {{data.price}}</h4>
                  <!-- <p>2-18件</p> -->
                </div>
                <!-- <div class="price-tidu">
                  <h4>&yen; 200.00</h4>
                  <p>19-50件</p>
                </div>
                <div class="price-tidu">
                  <h4>&yen; 200.00</h4>
                  <p>50件以上</p>
                </div> -->
              </div>
              <div class="desc-trans" style="display:none">
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
              <div v-bind:class="isSku ? 'sku-active' : 'sku'">
                <div class="desc-color" v-if="colorItem.length">
                  <div>{{colorName}} : </div>
                  <div>
                    <div v-for="(imgItem,index) in colorItem" v-bind:style="{background: imgItem.tb_url ? 'url(' + imgItem.tb_url +  '_40x40.jpg)' : ''}" v-bind:title="imgItem.tit" v-on:click="chooseColor(index)" v-bind:class="{'active':color_t == index,'b-img' : imgItem.tb_url}">{{imgItem.tb_url ? '' : imgItem.tit}}</div>
                  </div>
                </div>
                <div class="desc-size" v-if="sizeItem.length">
                  <div>{{sizeName}} : </div>
                  <div>
                    <div v-for="(imgItem,index) in sizeItem" v-on:click="chooseSize(index)" v-bind:class="{'active':size_t == index}">{{imgItem}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="sku-alert" v-bind:style="{display: isSku ? 'block' : 'none'}">
                <span>!</span>请选择规格
              </div>
              <div class="desc-num" style="display:none">
                <p>数<b class="em_5"></b>量 : </p>
                <button class="num-del" v-on:click="_chooseNum(-1)">-</button>
                <input type="text" v-on:change="_chooseNum($event)" v-model="chooseNum">
                <button class="num-add" v-on:click="_chooseNum(1)">+</button>
                <p style="margin-left:55px;">(库存 {{totalAmount}} 件)</p>
              </div>              
              <div class="desc-action" style="display:none">
                <button v-on:click="_addCart">加入进货单</button>
                <button>去购物车结算</button>
              </div>
              <div class="desc-oth" style="display:none">
                <div>收藏</div>
                <div class="renqi">(人气<b class="em_5"></b>:<b class="em_5"></b>4000)</div>
                <div>
                  <a href="#"><span class="icon-fenxiang"></span>分享</a>
                  <a href="#"><img src="../../assets/images/icons/tencent.png" height="20" width="20"></a>
                  <a href=""><img src="../../assets/images/icons/xinlang.png" height="20" width="20"></a>
                </div>
              </div>
              <div class="desc-choosed" style="display:none">
                <div class="choosed-tishi">
                  <div class="yixuan" v-on:click="_showChooseList">已选清单(共<span>{{chooseShopping.length}}</span>件)</div>
                  <div class="sanjiao"></div>
                </div>
                <div class="choosed-list" v-bind:style="{display: showChooseList ? 'block' : 'none'}">                  
                  <div v-show="chooseList.length > 0" class="list-self" v-for="(item,index) in chooseList">
                    <div class="list-self-color">{{item[0].prop_name.split(';')[1].split(':')[1]}}</div>
                    <div class="list-self-oth">
                      <div class="oth-info" v-for="(itemIn,indexIn) in item">
                        <div class="info-size">{{itemIn.prop_name.split(';')[0].split(':')[1]}}</div>
                        <div class="info-num">
                          <span>数量 ：</span>
                          <button v-on:click="_changeChooseNum(-1,index,indexIn)">-</button>
                          <input type="text" v-on:change="_changeChooseNum($event,index,indexIn)" v-model="itemIn.num">
                          <button v-on:click="_changeChooseNum(1,index,indexIn)">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-show="chooseList.length > 0" class="sub-total">
                    共计{{chooseShopping.length}}件 : <span>&yen; {{subTotal}}</span>
                  </div>
                  <div v-show="chooseList.length == 0" class="weixuanze">
                    您还未选择任何商品!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-recommend">
          <div class="recommend-tit">
            <span class="icon-bendiantuijian"></span>
            <p>本店推荐</p>
          </div>
          <div class="recommend-list">
            <div class="list-side" v-for="(item,index) in showcase">
              <a v-on:click="_r_detail($event,index)">
                <img v-bind:src="item.pic_url">
                <div class="price"></div>
                <p>&yen; {{item.price}}</p>
              </a>
            </div>
          </div>
          <div class="recommend-page">
            <span class="icon-fanyeup" v-bind:class="{'active' : showcasePage > 1}" v-on:click="fanye(-1)"></span>
            <span class="icon-fanyedown" v-bind:class="{'active' : hasNextPage}" v-on:click="fanye(1)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-b-box">
    <div class="container bg-b">
      <div class="row">
          <div class="detail-news">
            <div class="news-tit">
              <span>NEW</span>
              <p>最新上架</p>
              <a v-on:click="_more"><span class="icon-more"></span></a>
            </div>
            <div class="news-list">
              <div class="news-img" v-for="(item,index) in newList">
                <a class="img-tit" v-on:click="_n_detail(index)">
                  <img v-bind:src="item.pic_url">
                </a>
                <div class="tit-link" v-on:click="_n_detail(index)">{{item.title}}</div>
                <div class="img-info">
                  <p>&yen; {{item.price}}</p>
                  <p>{{_n_times(item.list_time)}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="oth">
        <div class="row detail-det">
          <ul class="shopping-menu">
            <li v-bind:class="{'active': tabList == 1}" v-on:click="tab(1)">
              商品详情
            </li>
            <li v-bind:class="{'active': tabList == 2}" v-on:click="tab(2)" style="display:none;">
              商品评论
            </li>
          </ul>
          <div v-if="tabList==1">
            <div class="specif" v-if="item_props.length">
              <div class="sanjiao"></div>
              <div class="text">规格参数</div>
              <div class="hr"></div>
            </div>
            <div class="specif-tab" v-if="item_props.length">
              <div>
                <div v-for="(item,index) in item_props">{{item}}</div>
              </div>
            </div>
            <div class="detail-desc">
              <div class="sanjiao"></div>
              <div class="text">图文详情</div>
              <div class="hr"></div>
            </div>
            <div class="detail-desc-des">
              <div v-html="description"></div>
            </div>
          </div>
          <!-- <div v-else>
            <h2>我是评论</h2>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <footerComponent></footerComponent>
  <goTop></goTop>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import headerComponent from 'components/header'
  import footerComponent from 'components/footer'
  import goTop from 'components/goTop'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  export default{
    components:{
      headerComponent,
      footerComponent,
      goTop
    },
    data () {
      return {
        q: '',
        isStore: false,
        data: {},
        item_id: '',
        store_id: '',
        logoUrl: '',
        store_name: '',
        productNum: '',
        phone: '',
        price: '',
        addr: '',
        showImg: '',
        carousel: [],
        tit: '',
        skus: [],
        colorName: '',
        colorItem: [],
        sizeName: '',
        sizeItem: [],
        totalAmount: '',
        img_t: 0,
        color_t: -1,
        prop_imgs: [],
        size_t: -1,
        isSku: false,
        chooseNum: 1,
        tabList: 1,
        item_props: [],
        description: '',
        chooseShopping: [],
        chooseList: [],
        subTotal: 0,
        showChooseList: false,
        sku_id: '',
        prop_name: '',
        showcase: [],
        showcasePage: 1,
        hasNextPage: false,
        showcaseTotalPage: 1,
        newList: [],
        newListPage: 1
      }
    },
    methods: {
      _showImg (t) {
        this.img_t = t
        var s = this.carousel[t].tb_url
        this.showImg = s.slice(0,s.length-10)
      },
      chooseColor (t) {
        this.color_t = t
        if (this.size_t != -1) {
          this._pub();
        }
      },
      chooseSize (t) {
        this.size_t = t
        if (this.color_t != -1) {
          this._pub();
        }
      },
      _pub () {
        this.isSku = false;
        for(var i = 0;i < this.skus.length;i++){
          var arr = this.skus[i].properties_name.split(';')
          for(var j = 0;j < arr.length;j++){
            arr[j] = arr[j].split(':')
          }
          if(this.colorItem[this.color_t].tit == arr[1][1] && this.sizeItem[this.size_t] == arr[0][1]){
            this.sku_id = this.skus[i].id
            this.prop_name = this.skus[i].properties_name
            this.totalAmount = this.skus[i].quantity
            this.price = this.skus[i].price
            var obj={}
            if(!this.chooseShopping.length){
              obj.num = this.chooseNum
              obj.sku_id = this.skus[i].id
              obj.prop_name = this.skus[i].properties_name
              obj.price = this.skus[i].price
              if(this.colorItem[this.color_t].tb_url){
                obj.pic_url = this.colorItem[this.color_t].tb_url
              }
              else{
                obj.pic_url = this.carousel[0].tb_url
              }                
              this.chooseShopping.push(obj)
            }
            else{
              for(var k = 0;k < this.chooseShopping.length; k ++){
                if(this.chooseShopping[k].sku_id == this.skus[i].id){
                  this.chooseNum = this.chooseShopping[k].num
                  break;
                }
              }
              if(k == this.chooseShopping.length){
                this.chooseNum = 1                  
                obj.num = this.chooseNum
                obj.sku_id = this.skus[i].id
                obj.prop_name = this.skus[i].properties_name
                obj.price = this.skus[i].price
                if(this.colorItem[this.color_t].tb_url){
                  obj.pic_url = this.colorItem[this.color_t].tb_url
                }
                else{
                  obj.pic_url = this.carousel[0].tb_url
                }   
                this.chooseShopping.push(obj) 
              }
            }
            break;
          }
        }
        this._chooseList();
      },
      _chooseList () {
        var arr = [];
        arr.push(this.chooseShopping[0].prop_name.split(';')[1].split(':')[1])
        for(var j = 1;j < this.chooseShopping.length;j++){
          for(var k = 0;k < arr.length;k++){
            if(this.chooseShopping[j].prop_name.split(';')[1].split(':')[1] == arr[k]){
              break;
            }
          }
          if(k == arr.length){
            arr.push(this.chooseShopping[j].prop_name.split(';')[1].split(':')[1]);
          }
        }
        var subTotal = 0;
        for(var m = 0;m < arr.length;m++){
          this.chooseList[m] = []
          for(var n = 0;n < this.chooseShopping.length;n++){
            if(this.chooseShopping[n].prop_name.split(';')[1].split(':')[1] == arr[m]){
              this.chooseList[m].push(this.chooseShopping[n])
              subTotal += this.chooseShopping[n].price * this.chooseShopping[n].num
            }
          }
        }
        this.subTotal = subTotal
      },
      _showChooseList () {
        this.showChooseList = !this.showChooseList
      },
      fanye (t) {
        if (t === 1 && this.showcasePage < this.showcaseTotalPage) {
          ++this.showcasePage
          this.$http.get('/api/items?store_id=' + this.store_id + '&type=new&page='+ this.showcasePage +'&page_size=3')
          .then(function(ret){
            this.showcase = ret.data.data
            for(var i = 0;i < this.showcase.length;i++){
              this.showcase[i].pic_url += '_160x160.jpg'
            }
            if(this.showcasePage == this.showcaseTotalPage){
              this.hasNextPage = false
            }
          },function(err){
            console.log(err)
          })
        }
        if (t === -1 && this.showcasePage > 1) {
          --this.showcasePage
          this.$http.get('/api/items?store_id=' + this.store_id + '&type=new&page='+ this.showcasePage +'&page_size=3')
          .then(function(ret){
            this.showcase = ret.data.data
            for(var i = 0;i < this.showcase.length;i++){
              this.showcase[i].pic_url += '_160x160.jpg'
            }
            if(this.showcasePage < this.showcaseTotalPage){
              this.hasNextPage = true
            }
          },function(err){
            console.log(err)
          })
        }
      },
      _chooseNum (t) {
        if (t === -1 && this.chooseNum > 1) {
          --this.chooseNum
          for(var i = 0;i < this.chooseShopping.length;i ++){
            if(this.chooseShopping[i].sku_id == this.sku_id){
              this.chooseShopping[i].num = this.chooseNum
            }
          }
        }
        if (t === 1) {
          ++this.chooseNum
          for(var i = 0;i < this.chooseShopping.length;i ++){
            if(this.chooseShopping[i].sku_id == this.sku_id){
              this.chooseShopping[i].num = this.chooseNum
            }
          }
        }
        else{
          if(!(/^\d$/.test(t.target.value))){
            this.chooseNum = 1
          }
          else if(t.target.value < 1){  
            this.chooseNum = 1
          }
          else{
            this.chooseNum = parseInt(t.target.value)
          }
          for(var i = 0;i < this.chooseShopping.length;i ++){
            if(this.chooseShopping[i].sku_id == this.sku_id){
              this.chooseShopping[i].num = this.chooseNum
            }
          }
        }
        if(this.size_t != -1 && this.color_t != -1){
          this._chooseList();
        }
        
      },
      _changeChooseNum (s,t1,t2) {
        if(s == 1){
          ++this.chooseList[t1][t2].num
           
        }
        if(s == -1){
          if(this.chooseList[t1][t2].num > 1){
            --this.chooseList[t1][t2].num
          }
        }
        else{
          if(!(/^\d$/.test(s.target.value))){
            this.chooseList[t1][t2].num = 1
          }
          else if(s.target.value < 1){  
            this.chooseList[t1][t2].num = 1
          }
          else{
            this.chooseList[t1][t2].num = parseInt(s.target.value)
          }
        }
        this.chooseNum = this.chooseList[t1][t2].num
      },
      _addCart () {
        if(this.size_t == -1 || this.color_t == -1){
          this.isSku = true
        }
        else{
          for(var i = 0;i < this.chooseShopping.length; i++){          
            var obj = this.chooseShopping[i];
            obj.item_id = this.item_id
            obj.store_id = this.store_id
            obj.buyer_id = 1
            obj.title = this.tit
            obj.origin_price = this.price
            // obj.price = this.price
            obj.sub_total = obj.num * this.price
            this.$http.post('/api/carts', {"cart":obj})
              .then(function (ret) {
                console.log(ret.data)
              },
              function (err) {
                console.log(err)
              })          
          }
        }
        
      },
      _subkey (val) {
        this.$emit('subKeyword',val)
      },
      _subStor (n) {
          if(n == 0){
            this.isStore = false
          }else{
            this.isStore = true
          }
        },
      _subkeyword(keyword){
        if(this.isStore){
          window.location.href = "./visitingMarket.html?q=" + keyword
        }else{
          window.location.href = "./search.html?q="+keyword
        }
        
      },
      _r_detail (e,t) {
        window.location.href = './detail.html?' + this.showcase[t].num_iid
      },
      _n_times (t) {
        var date = new Date().getTime()
        var subTime = date - t
        subTime = subTime/1000/60
        if (subTime < 1) {
          return '1分钟前'
        }
        else if (subTime < 1 * 60) {
          return parseInt(subTime) + '分钟前'
        }
        else if (subTime < 1 * 60 * 24){
          return parseInt(subTime/60) + '小时前'
        }
        else if (subTime < 1 * 60 * 24 * 30){
          return parseInt(subTime/60/24) + '天前'
        }
        else {
          return parseInt(subTime/60/24/30) + '个月前'
        }
      },
      _n_detail (t) {
        window.open('./detail.html?' + this.newList[t].num_iid)
      },
      _more () {
        window.open('./sellerAllProduct.html?store_id=' + this.store_id)
      },
      tab (t) {
        this.tabList = t
      }
    },
    mounted () {
      var p = window.location.href.split('?')[1];
      this.$http.get('/api/items/' + p)
        .then(function (ret) {
          if(ret.data.error){
            window.location.href = './uf.html'
            return
          }
          this.data = ret.data
          this.productNum = ret.data.count
          this.logoUrl = ret.data.store.store_logo
          this.skus = ret.data.skus
          this.item_id = ret.data.num_iid
          this.store_id = ret.data.store.id
          this.showImg = ret.data.item_imgs[0].tb_url
          this.carousel = ret.data.item_imgs
          for(var i = 0;i < this.carousel.length;i++){
            this.carousel[i].tb_url += '_70x70.jpg' 
          }
          this.store_name = ret.data.store.store_name
          this.phone = ret.data.store.mobile
          this.price = ret.data.price
          this.addr = /*ret.data.data.store.origin_area + '-' + */ ret.data.store.location
          this.tit = ret.data.title
          var tit = document.createElement('title')
          tit.innerHTML = this.tit + ' - ' + this.store_name + ' - 柯咔服装网'
          document.getElementsByTagName('head')[0].appendChild(tit)
          var meta = document.createElement('meta')
          meta.name = 'description'
          meta.content = this.tit
          document.getElementsByTagName('head')[0].appendChild(meta)
          if(ret.data.prop_imgs){
            this.colorItem = ret.data.prop_imgs
          }
          for(var i = 0; i < ret.data.sku_props.length; i++){
            if(ret.data.sku_props[i].prop_name == "颜色" || ret.data.sku_props[i].prop_name == "颜色分类" || ret.data.sku_props[i].prop_name == "主要颜色"){
              this.colorName = '颜色'
            }
            if(ret.data.sku_props[i].prop_name == '尺码'){
              this.sizeName = '尺码'
            }
            else{
              this.colorName = ret.data.sku_props[i].prop_name
            }
          }
          for(var i = 0;i < ret.data.sku_props.length;i++){
            var diff = ret.data.sku_props[i].sku_prop_vals;
            if(ret.data.sku_props[i].prop_name == this.colorName){
              for(var j = 0 ;j < diff.length;j++){
                for(var k = 0;k < this.colorItem.length; k++){
                  if(this.colorItem[k].properties && this.colorItem[k].properties.split(':')[1] == diff[j].value_id){
                    this.colorItem[k].tit = diff[j].name
                    break;
                  }
                }                
                if(k == this.colorItem.length){
                  this.colorItem.push({'tit':diff[j].name})
                }               
              }
            }
            if(ret.data.sku_props[i].prop_name == this.sizeName){
              for(var j = 0 ;j < diff.length;j++){
                this.sizeItem.push(diff[j].name)
              }
            }
          }
          this.sizeItem.reverse()
          var props_name = ret.data.props_name.split(';')
          if(props_name.length % 3){
            for(var i = 0; i < props_name.length % 3;i++){
              props_name.push('')
            }
          }
          this.item_props = props_name
          this.description = ret.data.desc
          this.$http.get('/api/items?store_id=' + this.store_id +'&type=new&page=1&page_size=3')
            .then(function(ret){
              this.showcase = ret.data.data
              for(var i = 0;i < this.showcase.length;i++){
                this.showcase[i].pic_url += '_160x160.jpg'
              }
              this.showcaseTotalPage = ret.data.total_pages
              if(ret.data.total_pages > 1){
                this.hasNextPage = true
              }
            },function(err){
              console.log(err)
            })
          this.$http.get('/api/items?store_id=' + this.store_id +'&type=new&page=1&page_size=5')
            .then(function(ret){
              this.newList = ret.data.data 
              for(var i = 0;i < this.newList.length;i++){
                this.newList[i].pic_url += '_220x220.jpg'
              }
            },function(err){
              console.log(err)
            })
        },
        function (err) {
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
  @import "../../assets/less/detail.less";
  
</style>
