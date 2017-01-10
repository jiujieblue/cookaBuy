import Vue from 'vue'
import sellerClaimCond from './sellerClaimCond.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import sellerClaimResults from './sellerClaimResults.vue'
import sellerClaimChooseStore from './sellerClaimChooseStore.vue'
import sellerClaimSubData from './sellerClaimSubData.vue'
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
	{path: '/results', component: sellerClaimResults},
	{path: '/chooseStore', component: sellerClaimChooseStore},
	{path: '/sellerClaimSubData', component: sellerClaimSubData}
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
	//el: '#sellerClaimCond',
	router: router,
  render: h => h(sellerClaimCond)
}).$mount('#sellerClaimCond')