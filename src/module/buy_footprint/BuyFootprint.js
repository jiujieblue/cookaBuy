import Vue from 'vue'
import buyFootprint from './buyFootprint.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
	el: '#buyFootprint',
  render: h => h(buyFootprint)
})