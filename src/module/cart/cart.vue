<template>
  <div>
    <div class="cart-m">
      <div class="container">      
          <div class="row">
            <div class="col-md-12">
              <div class="cart">
                <ul class="cart-menu">
                  <li class="menu-all">
                    <input type="checkbox">
                    <label>全选</label>
                  </li>
                  <li class="menu-shp">商品</li>
                  <li class="menu-sty">规格</li>
                  <li class="menu-num">数量</li>
                  <li class="menu-pri">单价</li>
                  <li class="menu-tot">小计</li>
                  <li class="menu-act">操作</li>
                </ul>

                <div class="cart-detail">
                  <div class="detail-tit">
                    <input type="checkbox">
                    <div class="shp-logo">SHOP</div>
                    <div>ABCDE</div>
                    <span class="icon-dianhua"></span>
                    <div>12345612345</div>
                  </div>
                  <div class="detail-shp">
                    <div class="detail-list">
                      <div class="list-shp">
                        <input type="checkbox">
                        <img src="../../assets/images/cart-show.jpg" height="80" width="80">
                        <div>2016年夏季圆领宽松腰贴布中长款短袖连衣裙</div>
                      </div>
                      <div class="list-sty">
                        黑色/XL码
                      </div>
                      <div class="list-num">
                        <div class="num-box">
                          <button dir="sub">-</button>
                          <input type="text">
                          <button dir="add">+</button>
                        </div>
                        <div class="num-text">
                          6-15件 : 110/件
                        </div>
                      </div>
                      <div class="list-pri">
                        &yen; 110.00
                      </div>
                      <div class="list-tot">
                        &yen; 1255.00
                      </div>
                      <div class="list-act">
                        <a>删除</a> | <a>收藏</a>
                      </div>
                    </div>
                    <div class="detail-list">
                      <div class="list-shp">
                        <input type="checkbox">
                        <img src="../../assets/images/cart-show.jpg" height="80" width="80">
                        <div>2016年夏季圆领宽松腰贴布中长款短袖连衣裙</div>
                      </div>
                      <div class="list-sty">
                        黑色/XL码
                      </div>
                      <div class="list-num">
                        <div class="num-box">
                          <button dir="sub">-</button>
                          <input type="text">
                          <button dir="add">+</button>
                        </div>
                        <div class="num-text">
                          6-15件 : 110/件
                        </div>
                      </div>
                      <div class="list-pri">
                        &yen; 110.00
                      </div>
                      <div class="list-tot">
                        &yen; 1255.00
                      </div>
                      <div class="list-act">
                        <a>删除</a> | <a>收藏</a>
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

                <div class="cart-detail">
                  <div class="detail-tit">
                    <input type="checkbox">
                    <div class="shp-logo">SHOP</div>
                    <div>ABCDE</div>
                    <span class="icon-dianhua"></span>
                    <div>12345612345</div>
                  </div>
                  <div class="detail-shp">
                    <div class="detail-list">
                      <div class="list-shp">
                        <input type="checkbox">
                        <img src="../../assets/images/cart-show.jpg" height="80" width="80">
                        <div>2016年夏季圆领宽松腰贴布中长款短袖连衣裙</div>
                      </div>
                      <div class="list-sty">
                        黑色/XL码
                      </div>
                      <div class="list-num">
                        <div class="num-box">
                          <button dir="sub">-</button>
                          <input type="text">
                          <button dir="add">+</button>
                        </div>
                        <div class="num-text">
                          6-15件 : 110/件
                        </div>
                      </div>
                      <div class="list-pri">
                        &yen; 110.00
                      </div>
                      <div class="list-tot">
                        &yen; 1255.00
                      </div>
                      <div class="list-act">
                        <a>删除</a> | <a>收藏</a>
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
                    <input type="checkbox">
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
       
      }
    },
    methods: {
    
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/cart.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>