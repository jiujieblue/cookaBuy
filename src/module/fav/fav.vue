<template>
<div>
  <headerComponent></headerComponent>

  <div class="fav-m">
    <div class="container">
      <div class="row">
        <div class="fav">
          <div class="fav-tit">
            <span class="icon-guanzhudianjia"></span>
            <span>我关注的店家</span>
            <span>(85家)</span>  
          </div>
          <div class="fav-shp">
            <div class="shp-l">
              <div class="l-t">
                <img src="../../assets/images/default_avatar.png" height="126" width="126">
                <div>
                  <h4>吴江市甜心服饰</h4>
                  <p>12345612345</p>
                </div>
              </div>
              <div class="l-m">
                <p>市场 : 长城</p>
                <p>楼层 : 3F</p>
                <p>电话 : 12345612345</p>
              </div>
              <div class="l-b">
                <span class="icon-shanchu"></span><a>删除</a>
                <button>进店逛逛</button>
              </div>
            </div>
            <div class="shp-r">
              <div class="r-menu">
                <a v-bind:class="menu == 1 ? 'active' : ''" v-on:click="_menu(1)">最新上架</a>
                <a v-bind:class="menu == 2 ? 'active' : ''" v-on:click="_menu(2)">本店热卖</a>
              </div>
              <div class="r-slider">
                <div>
                  <swiper :options="swiperOption">
                    <swiper-slide><img src="../../assets/images/my-fav.jpg" height="150" width="150"></swiper-slide>
                    <swiper-slide><img src="../../assets/images/my-fav.jpg" height="150" width="150"></swiper-slide>
                    <swiper-slide><img src="../../assets/images/my-fav.jpg" height="150" width="150"></swiper-slide>
                    <swiper-slide><img src="../../assets/images/my-fav.jpg" height="150" width="150"></swiper-slide>
                    <swiper-slide><img src="../../assets/images/my-fav.jpg" height="150" width="150"></swiper-slide>
                    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
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
        menu: 1,
        swiperOption: {
          name: 'mySwiper',
          slidesPerView: 4,
          slidesPerGroup : 4,
          autoplay: 0,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
        }
      }
    },
    methods: {
      _menu (t) {
        this.menu = t
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  @import "../../assets/less/fav.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>