import Vue from 'vue'
import marketInfo from './marketInfo.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#marketInfo',
  render: h => h(marketInfo)
}).$mount('#app')