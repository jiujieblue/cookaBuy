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
          <button @click="showModal=false">关<span class="em"></span>闭</button>
          <button @click="_del">确<span class="em"></span>定</button>
        </div>
      </div>
    </div>
  </div>

  <headerComponent></headerComponent>

  <div class="fav-m">
    <div class="container">
      <div class="row">
        <div class="fav">
          <div class="fav-tit">
            <span class="icon-guanzhudianjia"></span>
            <span>我关注的店家</span>
            <span>({{this.data.length}})家</span>  
          </div>

          <div class="fav-shp" v-for="(item,index) in data">
            <div class="shp-l">
              <div class="l-t">
                <img v-bind:src="item.store_logo" height="80" width="80">
                <div>
                  <h4>{{item.store_name}}</h4>
                  <p>{{item.mobile}}</p>
                </div>
              </div>
              <div class="l-m">
                <p>市场 : {{item.market}}</p>
                <p>楼层 : {{item.floor}}</p>
                <p>电话 : {{item.mobile2}}</p>
              </div>
              <div class="l-b">
                <a v-on:click="_showModal(index)"><span class="icon-shanchu"></span>删除</a>
                <button>进店逛逛</button>
              </div>
            </div>
            <div class="shp-r">
              <div class="r-menu">
                <a v-bind:class="menu[index] == 1 ? 'active' : ''" v-on:click="_menu(index,1)">最新上架</a>
                <a v-bind:class="menu[index] == 2 ? 'active' : ''" v-on:click="_menu(index,2)">本店热卖</a>
              </div>
              <div class="r-slider">
                <div>
                  <swiper :options="swiperOption">
                    <swiper-slide v-for="(itemIn,indexIn) in item.items">
                      <a>
                        <img v-bind:src="itemIn.pic_url" height="150" width="150">
                      </a>
                      <div>&yen; {{itemIn.price}}</div>
                      <a>{{itemIn.title}}</a>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"><span class="icon-xiangqian"></span></div>
                    <div class="swiper-button-next" slot="button-next"><span class="icon-xianghou"></span></div>
                  </swiper>
                </div>
              </div>
            </div>
          </div>

        </div>  
      </div>
    </div>  
  </div>
  <footerComponent></footerComponent>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import AwesomeSwiper from 'vue-awesome-swiper'
  import headerComponent from 'components/header'
  import footerComponent from 'components/footer'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  Vue.use(AwesomeSwiper)
  export default{
    components:{
      headerComponent,
      footerComponent
    },
    data () {
      return {
        showModal: false,
        delNum: -1,
        menu: [],
        swiperOption: {
          name: 'mySwiper',
          slidesPerView: 4,
          slidesPerGroup : 4,
          autoplay: 0,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
        },
        data:[]
      }
    },
    methods: {
      _menu (t1,t2) {
        this.$set(this.menu, t1, t2)
      },
      _showModal (t) {
        this.showModal = true
        this.delNum = t
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
          for(var i = 0;i < this.data.length;i++){
            this.menu.push(1)
          }
        },function(err){
          console.log(err)
        })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/fav.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>