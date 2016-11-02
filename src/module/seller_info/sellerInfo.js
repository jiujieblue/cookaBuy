import Vue from 'vue'
import sellerInfo from './SellerInfo.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#sellerInfo',
  render: h => h(sellerInfo)
}).$mount('#sellerInfo')