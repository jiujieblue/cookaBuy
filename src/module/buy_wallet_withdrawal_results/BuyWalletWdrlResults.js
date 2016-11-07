import Vue from 'vue'
import buyWalletWdrlResults from './BuyWalletWdrlResults.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyWalletWdrlResults',
  render: h => h(buyWalletWdrlResults)
}).$mount('#buyWalletWdrlResults')