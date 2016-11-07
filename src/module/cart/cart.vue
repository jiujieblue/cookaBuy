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
            确定要删除该宝贝吗？
          </div>

          <div class="modal-footer">
            <button @click="showModal=false">关<span class="em"></span>闭</button>
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
                        <a @click="_showModal">删除</a> | <a>收藏</a>
                      </div>
                    </div>

                    <div class="detail-send">
                      <div>配送服务 : </div>
                      <div>
                        <input type="checkbox">
                        <label>代发</label>
                      </div>
                      <div>
                        <input type="checkbox">
                        <label>商家发货</label>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="cart-oth">
                  <div class="oth-l">
                    <input type="checkbox" v-on:change="_checkAll($event)" v-bind:checked="checkAll">
                    <label>全选</label>
                    <a>删除</a>
                    <a>收藏</a>
                    <a>清除失效商品</a>
                  </div>
                  <div class="oth-r">
                    <span>商品数量 : 12件</span>
                    <span>金额总计(不含运费) : <mark>&yen;1255.00</mark></span>
                    <button>结算</button>
                  </div>
                </div>
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
        showModal: false,
        data: [],
        checkOne: [],
        checkShp: [],
        checkAll: false,
      }
    },
    methods: {
      _showModal () {
        this.showModal = true
      },
      _del () {
        this.showModal = false
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
      },
      _changeNum (t1,t2,s) {
        if(s == 1){
          ++this.data[t1].carts[t2].num  
        }
        else if(s == -1){
          --this.data[t1].carts[t2].num 
        }
        else{
          this.data[t1].carts[t2].num = s.target.value
        }
        this.$http.put('/api/carts/' + this.data[t1].carts[t2].id,{"cart":{"num":this.data[t1].carts[t2].num}})
          .then(function(ret){
            console.log(ret.data)
          },function(err){
            console.log(err)
          })
      }
    },
    mounted () {
      this.$http.get('/api/carts')
        .then(function(ret){
          this.data = ret.data.data
          for(var i = 0;i < this.data.length;i++){
            this.$set(this.checkOne, i, []);
            this.checkShp.push(false);
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