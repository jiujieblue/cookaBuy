import Vue from 'vue'
import buyWithdrawal from './BuyWithdrawal.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyWithdrawal',
  render: h => h(buyWithdrawal)
}).$mount('#buyWithdrawal')