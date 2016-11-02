<style lang="less">
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/icons.css';
	@import '../assets/less/CkPagination.less';
</style>

<template>
	<div class="ck-pagination">
    <ul>
      <li v-if="showFirst" class="ck-pagination-text"><a class="icon-xiangqian" :href="pathname + '?' + qs.stringify({page: prePage})"></a></li>
      <li class="ck-pagination-text" v-for='index in indexs'>
      	<a :class="{active : index == pageNum}" :href="pathname + '?' + qs.stringify({page: index})" @click='btnClick(index)'>{{ index }}</a>
      </li>
      <li class="ck-pagination-text" v-if='shennueRight'>...</li>
      <li class="ck-pagination-text"><a :class="{active : pageNum == pages}" :href="pathname + '?' + qs.stringify({page: pages})">{{ this.pages }}</a></li>
      <li class="ck-pagination-text" v-if="showLast"><a class="icon-xianghou" :href="pathname + '?' + qs.stringify({page: nextPage})"></a></li>
      <li class="ck-pagination-input">到 <input type="text" ref="go_num"> 页</li>
     	<li class="ck-pagination-input"><button @click='go_num($event)'>确定</button></li>
    </ul>
  </div>
</template>

<script>
	import Vue from 'vue'
	import qs from 'qs'
	import _ from 'lodash'

	export default {
  data () {
    return {
      pathname: '',
      stringify: '',
      qs: qs
    }
  },
  props: {
  	pages: {
  		default: 1
  	},
  	pageNum: {
  		default: 1
  	},
  	prePage: {},
  	nextPage: {}
  },
  computed : {
    indexs () {
      var left = 0
      var right = 0
      var pages = parseInt(this.pages)
      var pageNum = parseInt(this.pageNum)
      var ar = []
      if(pages <= 8){
      	left = 1
      	right = pages-1
      }else{
      	if(pageNum <= 3){
      		left = 1
      		right = 5
      	}else if(pages-pageNum <= 2){
      		left = pages-4
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
    shennueRight: function(){
    	if(this.pages-this.pageNum >= 4){
    		return true
    	}
    	return false
    }
  },
  methods: {
  	go_num (e) {
  		e.preventDefault();
  		var val = parseInt(this.$refs.go_num.value.replace(/\s*/g,''))
  		if(!val){
  			return
  		}
  		if(!/^[1-9][\d]*$/.test(val)){
  			return
  		}
  		if(parseInt(val)>this.pages){
  			return
  		}
  		window.location.href = window.location.pathname + qs.stringify(_.assign({page: val}))
  	}
  },
  mounted () {
		this.pathname = window.location.pathname
  }
}
</script>