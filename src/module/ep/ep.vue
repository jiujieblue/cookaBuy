<template>
<div class="aaa">
  
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  import calendar from "./calendar.vue"
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)

  var lk = document.createElement('link')
  lk.rel = 'icon'
  lk.href = '../../favicon.ico'
  document.getElementsByTagName('head')[0].appendChild(lk)

  var aaa = Vue.extend({
    template: '<div><h2>this is h2</h2><p>this is p</p></div>'
  })
  var bbb = Vue.extend({
    template: `
      <div>
        <h2>this is h2</h2>
        <p>this is p</p>
      </div>
    `
  })
  
  export default{

    components: {
      aaa: aaa,
      bbb: bbb,
      calendar
    },
    data () {
      return {
        list: [],
        t: -1
      }
    },
    methods: {
      
    },
    mounted () {
      this.$http.get('/api/items?store_id=6&type=new')
            .then(function(ret){
              this.list = ret.data.data
              console.log(this.list)
            },function(err){
              console.log(err)
            })
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/ep.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
