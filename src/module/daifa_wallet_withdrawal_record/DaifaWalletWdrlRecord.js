import Vue from 'vue'
import daifaWalletWdrlRecord from './DaifaWalletWdrlRecord.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#daifaWalletWdrlRecord',
  render: h => h(daifaWalletWdrlRecord)
}).$mount('#daifaWalletWdrlRecord')