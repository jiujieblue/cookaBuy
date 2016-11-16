import Vue from 'vue'
import buyWalletWdrlRecord from './BuyWalletWdrlRecord.vue'
import DatePicker from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(DatePicker)

/* eslint-disable no-new */
new Vue({
	el: '#buyWalletWdrlRecord',
  render: h => h(buyWalletWdrlRecord)
}).$mount('#buyWalletWdrlRecord')