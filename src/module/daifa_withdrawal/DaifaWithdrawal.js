import Vue from 'vue'
import daifaWithdrawal from './DaifaWithdrawal.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#daifaWithdrawal',
  render: h => h(daifaWithdrawal)
}).$mount('#daifaWithdrawal')