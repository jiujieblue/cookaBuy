<template>
<div class="aaa">
  <aaa></aaa>
  <bbb></bbb>
  <div class="test">
    <b></b>
    <input class="aaa" type="text" name="">
  </div>
  <div v-for="(item,index) in list">
    <img v-bind:src="item.pic_url" width="200" height="200" v-on:load="changeImg($event)" crossorigin="anonymous">
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
        list: [],
        t: -1
      }
    },
    methods: {
      changeImg (i) {
          var me = this
          if(me.list && me.list[i] && me.list[i].pic_url){
            var img = new Image();
            img.src = me.list[i].pic_url
            img.setAttribute('crossOrigin', 'anonymous');
            var canvas = document.createElement("canvas");
            canvas.width = 200;
            canvas.height = 200;
            var ctx = canvas.getContext("2d");
            img.onload= function(){
              ctx.drawImage(img, 0, 0, 200, 200);
              var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
              var dataURL = canvas.toDataURL("image/"+ext);
              me.list[i].pic_url = dataURL
            }   
          }
          
      }
    },
    mounted () {

      this.$http.get('/api/items?store_id=6&type=new&page=1&page_size=3')
        .then(function(ret){
          var me = this
          this.list = ret.data.data
          for(var i = 0; i < this.list.length;i++){           
            this.changeImg(i)
          }
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
