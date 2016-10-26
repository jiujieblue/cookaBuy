import Vue from 'vue'
import sellerAllProduct from './sellerAllProduct.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#SellerAllProduct',
  render: h => h(sellerAllProduct)
}).$mount('#app')