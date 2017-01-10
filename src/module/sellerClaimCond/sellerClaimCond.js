import Vue from 'vue'
import sellerClaimCond from './sellerClaimCond.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import sellerClaimResults from './sellerClaimResults.vue'
import sellerClaimChooseStore from './sellerClaimChooseStore.vue'
import sellerClaimSubData from './sellerClaimSubData.vue'
import sellerClaimSubDataSucc from './sellerClaimSubDataSucc.vue'
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
	{path: '/results', component: sellerClaimResults},
	{path: '/chooseStore', component: sellerClaimChooseStore},
	{path: '/subData', component: sellerClaimSubData},
	{path: '/subDataSucc', component: sellerClaimSubDataSucc}
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