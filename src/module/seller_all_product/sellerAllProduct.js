import Vue from 'vue'
import sellerAllProduct from './SellerAllProduct.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#sellerAllProduct',
  render: h => h(sellerAllProduct)
}).$mount('#sellerAllProduct')