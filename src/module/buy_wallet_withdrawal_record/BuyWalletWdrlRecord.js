import Vue from 'vue'
import buyWalletWdrlRecord from './BuyWalletWdrlRecord.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyWalletWdrlRecord',
  render: h => h(buyWalletWdrlRecord)
}).$mount('#buyWalletWdrlRecord')
