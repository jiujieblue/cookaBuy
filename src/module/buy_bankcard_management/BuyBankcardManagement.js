import Vue from 'vue'
import buyBankcardManagement from './BuyBankcardManagement.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyBankcardManagement',
  render: h => h(buyBankcardManagement)
}).$mount('#buyBankcardManagement')