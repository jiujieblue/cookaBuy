<template>
<div class="aaa">
  <aaa></aaa>
  <bbb></bbb>
  <div class="test">
    <b></b>
    <input class="aaa" type="text" name="">
  </div>
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

      }
    },
    methods: {
      
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  @import "../../assets/less/ep.less";
  @import '../../assets/css/icons.css';
  @import '../../assets/css/bootstrap.css';
</style>
