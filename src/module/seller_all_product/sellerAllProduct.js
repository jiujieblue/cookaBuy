import Vue from 'vue'
import sellerAllProduct from './SellerAllProduct.vue'
import VueReasource from 'vue-resource'
Vue.use(VueReasource)
/* eslint-disable no-new */
new Vue({
	el: '#sellerAllProduct',
  render: h => h(sellerAllProduct)
})