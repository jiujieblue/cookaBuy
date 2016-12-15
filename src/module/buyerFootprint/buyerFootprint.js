import Vue from 'vue'
import buyerFootprint from './buyerFootprint.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
	el: '#buyerFootprint',
  render: h => h(buyerFootprint)
})