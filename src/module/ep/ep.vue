<template>
<div>
    <div class="sex-box">
      <div class="sex" v-on:click="_click(1)"><div class="xuanze" v-bind:style="{display: checkSex == 1 ? 'block' : 'none'}"></div></div>
      <input type="radio" name="sex" v-on:change="_checkSex">
      <label>男</label>
    </div>
    <div class="sex-box">
      <div class="sex" v-on:click="_click(2)"><div class="xuanze" v-bind:style="{display: checkSex == 2 ? 'block' : 'none'}"></div></div>
      <input type="radio" name="sex" v-on:change="_checkSex">
      <label>女</label>
    </div>
    <br>
    <div class="checkbox-box">
      <div class="aaa" v-on:click="_aaa(0)"><span class="icon-xuanze" v-bind:style="{display: checkOth[0] ? 'block' : 'none'}"></span></div>
      <input type="checkbox" name="a1"> 
      <label>check1</label> 
    </div>
    <br>
    <div class="checkbox-box">
      <div class="aaa" v-on:click="_aaa(1)"><span class="icon-xuanze" v-bind:style="{display: checkOth[1] ? 'block' : 'none'}"></span></div>
      <input type="checkbox" name="a2"> 
      <label>check2</label>
    </div>
    <br>
    <div class="checkbox-box">
      <div class="aaa" v-on:click="_aaa(2)"><span class="icon-xuanze" v-bind:style="{display: checkOth[2] ? 'block' : 'none'}"></span></div>
      <input type="checkbox" name="a3"> 
      <label>check3</label>
    </div>
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
        checkSex: '',
        checkOth: [true,false,false]
      }
    },
    methods: {
      _click (t) {
        this.checkSex = t
      },
      _checkSex (t) {
        this.checkSex = t
      },
      _aaa (t) {
        console.log(this.checkOth)
        this.checkOth[t] = !this.checkOth[t]
        console.log(this.checkOth)
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