import Vue from 'vue'
import buyUserCenter from './BuyUserCenter.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyUserCenter',
  render: h => h(buyUserCenter)
}).$mount('#buyUserCenter')