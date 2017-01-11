import Vue from 'vue'
import sellerClaim from './sellerClaim.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#sellerClaim',
  render: h => h(sellerClaim)
})