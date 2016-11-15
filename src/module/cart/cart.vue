<template>
  <div>
    <OrderHeader></OrderHeader>
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
            <button @click="_close">关<span class="em"></span>闭</button>
            <button @click="_del">确<span class="em"></span>定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-m">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="cart">
              <ul class="cart-menu">
                <li class="menu-all">
                  <input type="checkbox" v-on:change="_checkAll($event)" v-bind:checked="checkAll">
                  <label>全选</label>
                </li>
                <li class="menu-shp">商品</li>
                <li class="menu-sty">规格</li>
                <li class="menu-num">数量</li>
                <li class="menu-pri">单价</li>
                <li class="menu-tot">小计</li>
                <li class="menu-act">操作</li>
              </ul>
              <div class="cart-detail" v-for="(item,index) in data">
                <div class="detail-tit">
                  <input type="checkbox" v-bind:checked="checkShp[index]" v-on:change="_checkShp(index,$event)">
                  <div class="shp-logo">SHOP</div>
                  <div>{{item.store_name}}</div>
                  <span class="icon-dianhua"></span>
                  <div>{{item.mobile}}</div>
                </div>
                <div class="detail-shp">
                  <div class="detail-list" v-for="(itemIn,indexIn) in item.carts">
                    <div class="list-shp">
                      <input type="checkbox" v-on:change="_checkOne(index,indexIn,$event)" v-bind:checked="checkOne[index][indexIn]">
                      <img v-bind:src="itemIn.pic_url" height="80" width="80">
                      <div>{{itemIn.title}}</div>
                    </div>
                    <div class="list-sty">
                      {{itemIn.prop_name.split(';')[1].split(':')[1]}}/{{itemIn.prop_name.split(';')[0].split(':')[1]}}
                    </div>
                    <div class="list-num">
                      <div class="num-box">
                        <button dir="sub" v-on:click="_changeNum(index,indexIn,-1)">-</button>
                        <input type="text" v-on:change="_changeNum(index,indexIn,$event)" v-model="itemIn.num">
                        <button dir="add" v-on:click="_changeNum(index,indexIn,1)">+</button>
                      </div>
                      <div class="num-text">
                        6-15件 : 110/件
                      </div>
                    </div>
                    <div class="list-pri">
                      &yen; {{itemIn.price}}
                    </div>
                    <div class="list-tot">
                      &yen; {{itemIn.num * itemIn.price}}
                    </div>
                    <div class="list-act">
                      <a @click="_showModal(index,indexIn)">删除</a> | <a v-on:click="_fav(index,indexIn)">{{itemIn.status == 'favorited' ? '已收藏' : '收藏'}}</a>
                    </div>
                  </div>

                  <div class="detail-send">
                    <div>配送服务 : </div>
                    <div>
                      <input type="radio" v-bind:name="'send'+index" value="1" v-on:change="_send(index,$event)">
                      <label>代发</label>
                    </div>
                    <div>
                      <input type="radio" v-bind:name="'send'+index" value="2" v-on:change="_send(index,$event)">
                      <label>商家发货</label>
                    </div>
                  </div>
                </div>
              </div>


              <div class="cart-oth">
                <div class="oth-l">
                  <input type="checkbox" v-on:change="_checkAll($event)" v-bind:checked="checkAll">
                  <label>全选</label>
                  <a v-on:click="_delMore">删除</a>
                  <a v-on:click="_favMore">收藏</a>
                  <a>清除失效商品</a>
                </div>
                <div class="oth-r">
                  <span>商品数量 : {{totalPeice}}件</span>
                  <span>金额总计(不含运费) : <mark>&yen;{{totalMoney}}</mark></span>
                  <button v-on:click="_balance">结算</button>
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
  import OrderHeader from 'components/OrderHeader'
  import fot from 'components/footer'
  import interceptors from 'components/interceptors'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  export default{
    components:{
      OrderHeader,
      fot
    },
    data () {
      return {
        showModal: false,
        data: [],
        checkOne: [],
        checkShp: [],
        checkAll: false,
        t1: -1,
        t2: -1,
        delOne: false,
        delMore: false,
        send: [],
        totalPeice: 0,
        totalMoney: 0
      }
    },
    methods: {
      _showModal (t1,t2) {
        this.showModal = true
        this.delOne = true
        this.t1 = t1
        this.t2 = t2
      },
      _close () {
        this.t1 = -1
        this.t2 = -1
        this.delOne = false
        this.delMore = false
      },
      _del () {
        this.showModal = false
        if(this.delOne){
          var id = this.data[this.t1].carts[this.t2].id
          this.$http.delete('/api/carts/'+id)
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
        if(this.delMore){
          var arr = [];
          for(var i = 0;i < this.checkOne.length;i++){
            for(var j = 0;j < this.checkOne[i].length;j++){
              if(this.checkOne[i][j]){
                arr.push(this.data[i].carts[j].id)
              }
            }
          }
          var ids = arr.join(',')
          console.log(ids)
          this.$http.delete('/api/carts/'+ids)
            .then(function(ret){
              console.log(ret.data)
            },function(err){
              console.log(err)
            })
        }
      },
      _checkOne (t1,t2,e) {
        this.$set(this.checkOne[t1],t2,e.target.checked)
        for(var i = 0; i < this.checkOne.length;i++){
          for(var j = 0; j < this.checkOne[i].length;j++){
            if(!this.checkOne[i][j]){
              break;
            }
          }
          if(j == this.checkOne[i].length){
            this.$set(this.checkShp, i, true);
          }
          else{
            this.$set(this.checkShp, i, false);
          }
        }
        for(var k = 0; k < this.checkShp.length;k++){
          if(!this.checkShp[k]){
            break;
          }
        }
        if(k == this.checkShp.length){
          this.checkAll = true;
        }
        else{
          this.checkAll = false;
        }
        this._total()
      },
      _checkShp (t,e) {
        this.$set(this.checkShp, t, e.target.checked)
        for(var i = 0; i < this.checkOne[t].length; i++){
          this.$set(this.checkOne[t], i, e.target.checked)
        }
        for(var j = 0; j< this.checkShp.length; j++){
          if(!this.checkShp[j]){
            break;
          }
        }
        if(j == this.checkShp.length){
          this.checkAll = true;
        }
        else{
          this.checkAll = false;
        }
        this._total()
      },
      _checkAll (e) {
        this.checkAll = e.target.checked
        for(var i = 0; i < this.checkShp.length;i++){
          this.$set(this.checkShp, i, e.target.checked)
        }
        for(var i = 0; i < this.checkOne.length;i++){
          for(var j = 0; j < this.checkOne[i].length;j++){
            this.$set(this.checkOne[i], j, e.target.checked)
          }
        }
        this._total()
      },
      _changeNum (t1,t2,s) {
        if(s == 1){
          ++this.data[t1].carts[t2].num
        }
        else if(s == -1){
          if(this.data[t1].carts[t2].num > 1){
            --this.data[t1].carts[t2].num
          }
        }
        else{
          if(!(/^(\d)*$/.test(s.target.value))){
            this.data[t1].carts[t2].num = 1
          }
          else{
            this.data[t1].carts[t2].num = parseInt(s.target.value)
          }         
        }
        this.$http.put('/api/carts/' + this.data[t1].carts[t2].id,{"cart":{"num":this.data[t1].carts[t2].num}})
          .then(function(ret){
            console.log(ret.data)
          },function(err){
            console.log(err)
          })
        this._total()
      },
      _fav (t1,t2,s) {
        var favorite = {
          "user_id": this.data[t1].carts[t2].buyer_id,
          "store_id": this.data[t1].id,
          "cart_id": this.data[t1].carts[t2].id,
          "item_id": this.data[t1].carts[t2].item_id
        }
        this.$http.post('/api/favorites',{"favorite":favorite})
          .then(function(ret){
            console.log(ret.data)
          },function(err){
            console.log(err)
          })
      },
      _delMore () {
        this.showModal = true
        this.delMore = true
      },
      _favMore () {
        for(var i = 0;i < this.checkOne.length;i++){
          for(var j = 0;j < this.checkOne[i].length;j++){
            if(this.checkOne[i][j]){
              var favorite = {
                "user_id": this.data[i].carts[j].buyer_id,
                "store_id": this.data[i].id,
                "cart_id": this.data[i].carts[j].id,
                "item_id": this.data[i].carts[j].item_id
              }
              this.$http.post('/api/favorites',{"favorite":favorite})
                .then(function(ret){
                  console.log(ret.data)
                },function(err){
                  console.log(err)
                })
            }
          }
        }
      },
      _send (t,e) {
        this.$set(this.send,t,e.target.value)
      },
      _total () {
        this.totalPeice = 0
        this.totalMoney = 0
        for(var i = 0; i < this.checkOne.length;i++){
          for(var j = 0; j < this.checkOne[i].length;j++){
            if(this.checkOne[i][j]){
              ++this.totalPeice;
              this.totalMoney += this.data[i].carts[j].price * this.data[i].carts[j].num
            }
          }
        }
      },
      _balance () {
        var list = []
        for(var i = 0; i < this.checkOne.length;i++){
          var obj = {}
          obj.cart = []
          for(var j = 0; j < this.checkOne[i].length;j++){
            if(this.checkOne[i][j]){
            obj.store_name = this.data[i].store_name
            obj.mobile = this.data[i].mobile
            obj.location = this.data[i].location
            obj.cart.push(this.data[i].carts[j])
            obj.send = this.send[i]
            }
          }
          if(obj.cart.length){
            list.push(obj)
          }
        }
        console.log(list)
        localStorage.setItem('list',JSON.stringify(list))
      }
    },
    mounted () {
      this.$http.get('/api/carts')
        .then(function(ret){
          this.data = ret.data.data
          for(var i = 0;i < this.data.length;i++){
            this.$set(this.checkOne, i, []);
            this.checkShp.push(false);
            this.send.push(0);
            for(var j = 0;j < this.data[i].carts.length;j++){
              this.checkOne[i].push(false)
            }
          }
        },function(err){
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/cart.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
