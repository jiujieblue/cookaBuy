<template>
<div class="aaa">
  <div v-for="(item,index) in list" v-if="index < 3">{{item}}</div>
  <button @click="_timer">aaa</button>
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
      _timer () {
        var me = this;
        var timer = setInterval(function(){
          var s = me.list.splice(0,3)
          me.list = me.list.concat(s)
          console.log(me.list)
        },1000)
      }
    },
    mounted () {
      this.list = [1,2,3,4,5,6,7,8]
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/ep.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
