import Vue from 'vue'
import buyerWithdrawal from './buyerWithdrawal.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyerWithdrawal',
  render: h => h(buyerWithdrawal)
}).$mount('#buyerWithdrawal')