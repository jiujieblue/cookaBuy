import Vue from 'vue'
import buyFootprint from './BuyFootprint.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#buyFootprint',
  render: h => h(buyFootprint)
}).$mount('#buyFootprint')