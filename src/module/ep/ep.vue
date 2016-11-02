<template>
<div class="aaa">

  <p>{{arr[0][0]}}</p>
  <p>{{arr[0][1]}}</p>
  <p>{{arr[1][0]}}</p>
  <button v-on:click="_add">jiajiajia</button>
  
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  const fto = require('form_to_object')
  Vue.use(fto)


  export default{
    data () {
      return {
        arr: [[true,false],[false]],

      }
    },
    methods: {
      _add () {
        console.log(this.arr)
        this.$set(this.arr[0], 0, 1);
        this.$set(this.arr[0], 1, !(this.arr[0][1]));
        this.$set(this.arr[1], 0, !(this.arr[1][0]));
        console.log(this.arr)
      }
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