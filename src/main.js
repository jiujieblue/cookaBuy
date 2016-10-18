// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../src/assets/css/icons.css'
const VueResource = require('vue-resource')
Vue.use(VueResource)
import Hello from './components/Hello.vue'
import Test from './components/Test.vue'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
Vue.use(VueRouter)

var router = new VueRouter({
  mode:'hash',
  routes: [
    {path:'/hello',component:Hello},
    {path:'/test',component:Test}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
