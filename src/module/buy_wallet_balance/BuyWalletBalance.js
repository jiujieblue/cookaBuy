import Vue from 'vue'
import buyWalletBalance from './BuyWalletBalance.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyWalletBalance',
  render: h => h(buyWalletBalance)
}).$mount('#buyWalletBalance')