import Vue from 'vue'
import buyFootprint from './BuyFootprint.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
	el: '#buyFootprint',
  render: h => h(buyFootprint)
})