import Vue from 'vue'
import search from './search.vue'
import '../../assets/css/icons.css'
import '../../assets/css/bootstrap.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
	el: '#app',
  render: h => h(search)
}).$mount('#app')