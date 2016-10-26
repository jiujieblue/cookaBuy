import Vue from 'vue'
import sellerWithdrawal from './sellerWithdrawal.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#sellerWithdrawal',
  render: h => h(sellerWithdrawal)
}).$mount('#app')