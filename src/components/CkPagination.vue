<style lang="less">
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/icons.css';
	@import '../assets/less/CkPagination.less';
</style>

<template>
	<div class="ck-pagination">
    <ul>
      <li v-if="showFirst" class="ck-pagination-text" @click="childPage(pageNum-1)"><span class="icon-xiangqian"></span></li>
      <li class="ck-pagination-text" v-for='index in indexs' :class="{active : index == pageNum}" @click="childPage(index)">
      	{{ index }}
      </li>
      <li v-if='shennue'>...</li>
      <li class="ck-pagination-text" @click="childPage(pages)">{{ pages }}</li>
      <li class="ck-pagination-text" v-if="showLast" @click="childPage(pageNum+1)"><span class="icon-xianghou"></span></li>
      <li class="ck-pagination-input">到 <input type="text" ref="go_num" @input="validation"> 页</li>
     	<li class="ck-pagination-input"><button @click='go_num($event)'>确定</button></li>
    </ul>
  </div>
</template>

<script>
	import Vue from 'vue'

	export default {
  data () {
    return {
    	
    }
  },
  props: {
  	pages: {
  		default: 1
  	},
  	pageNum: {
  		default: 1
  	}
  },
  computed : {
    indexs () {
      var left = 0
      var right = 0
      var pages = parseInt(this.pages)
      var pageNum = parseInt(this.pageNum)
      var ar = []
      if(pages <= 6){
      	left = 1
      	right = pages-1
      }else{
      	if(pageNum <= 3){
      		left = 1
      		right = 5
      	}else if(pages-pageNum <= 2){
      		left = pages-5
      		right = pages-1
      	}else{
      		left = pageNum-2
      		right = pageNum+2
      	}
      }
      while (left <= right){
        ar.push(left)
        left ++
      }
      return ar
    },
    showLast: function(){
      if(this.pageNum == this.pages){
        return false
      }
      return true
    },
    showFirst: function(){
      if(this.pageNum == 1){
        return false
      }
      return true
    },
    shennue: function(){
    	if(this.pages-this.pageNum >= 4 && this.pages >6 ){
    		return true
    	}
    	return false
    }
  },
  methods: {
  	go_num (e) {
  		e.preventDefault();
  		var val = parseInt(this.$refs.go_num.value.replace(/\s*/g,''))
  		if(/^\d*$/.test(val) || !parseInt(val)>this.pages || val){
  			this.$emit('submitPage',val)
  		}
  	},

  	childPage (page){
  		if(page != this.pageNum){
  			this.$emit('submitPage',page)
  		}
  	},

  	validation (e) {
  		var val = parseInt(e.target.value.replace(/\s*/g,''))
  		if(!/^\d*$/.test(val) || parseInt(val)>this.pages || !val){
  			e.target.value = ''
  		}
  	}
  }
}
</script>