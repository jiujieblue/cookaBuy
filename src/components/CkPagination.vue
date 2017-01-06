<style lang="less">
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/icons.css';
	@import '../assets/less/CkPagination.less';
</style>

<template>
	<div class="ck-pagination" v-if="!isFunction(pages) && !isFunction(pageNum)">
    <ul>
      <li v-if="showFirst" class="ck-pagination-text" @click="childPage(parseInt(pageNum)-1)"><span class="icon-xiangqian"></span></li>
			<li v-if="shennueLeft" class="ck-pagination-text" @click="childPage(1)">1</li>
			<li v-if="shennueLeft">...</li>
      <li :class="['ck-pagination-text', index == pageNum ? 'active': '']" v-for='index in indexs' @click="childPage(index)">
      	{{ index }}
      </li>
      <li v-if='shennueRigth'>...</li>
      <li :class="['ck-pagination-text',pages == pageNum ? 'active' : '']" @click="childPage(pages)">{{ pages }}</li>
      <li class="ck-pagination-text" v-if="showLast" @click="childPage(parseInt(pageNum)+1)"><span class="icon-xianghou"></span></li>
      <li class="ck-pagination-input">到 <input type="text" ref="go_num" @input="validation" @keyup="go_num($event, 1)"> 页</li>
     	<li class="ck-pagination-input"><button @click='go_num'>确<span class="em_5"></span>定</button></li>
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
  mounted () {

  },
  computed : {
    indexs () {
      var left = 0
      var right = 0
      var pages = !isNaN(parseInt(this.pages)) ? parseInt(this.pages) : 1
      var pageNum = !isNaN(parseInt(this.pageNum)) ? parseInt(this.pageNum) : 1
      var ar = []
      if(pages <= 7){
      	left = 1
      	right = pages-1
      }else{
      	if(pageNum <= 4){
      		left = 1
      		right = 5
      	}else if(pageNum <= 6){
      		left = 4
      		if(pages < 11){
      			right = pages - 1
      		}else{
      			right = 8
      		}
      	}else{
    			if(pages - pageNum >= 5){
    				left = pageNum - 2
    				right = pageNum + 2
    			}else if(pages - pageNum == 4){
    				left = pageNum - 3
    				right = pageNum + 1
    			}else{
    				left = pages - 4
    				right = pages - 1
    			}
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
    shennueRigth: function(){
    	if(this.pageNum < 5){
	    	if(this.pages-this.pageNum >= 4 && this.pages >7){
	    		return true
	    	}
	    	return false
    	}else{
    		if(this.pages-this.pageNum >= 4 && this.pages >10){
    			return true
    		}
    		return false
    	}
    },
    shennueLeft: function(){
    	if(this.pageNum >= 5 && this.pages > 7){
    		return true
    	}
    	return false
    }
  },
  methods: {
  	go_num (e, n) {
  		if(n && e.which != 13){
  			return
  		}
  		e.preventDefault();
  		var val = parseInt(this.$refs.go_num.value.replace(/\s*/g,''))
  		if(/^\d*$/.test(val) || !parseInt(val)>this.pages || val){
  			this.$refs.go_num.value = ''
  			this.$emit('submitPage',val)
  		}
  	},

  	isFunction (fn) {
    	return (!!fn&&!fn.nodename&&fn.constructor!=String&&fn.constructor!=RegExp&&fn.constructor!=Array&&/function/i.test(fn+""))
  	},

  	childPage (page){
  		if(page != this.pageNum){
  			this.$emit('submitPage',page)
  		}
  	},

  	validation (e) {
  		var val = parseInt(e.target.value.replace(/\s*/g,''))
  		if(!/^\d*$/.test(val) || parseInt(val) > this.pages || !val){
  			e.target.value = ''
  		}
  	}
  }
}
</script>