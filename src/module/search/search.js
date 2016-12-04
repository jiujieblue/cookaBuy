import Vue from 'vue'
import search from './search.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#search',
  render: h => h(search)
}).$mount('#search')