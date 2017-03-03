<template>
	<div class="ck-search">
		<div class="ck-search-select">
			<span>
				<span class="ck-search-type" ref="type">{{ isStroe ? '店铺' :'商品'}}</span>
				<link rel="stylesheet" :class="['icon-jiantoud', isShow ? 'active' : '']" v-show="isShowStroe">
				<!-- 遮罩整个span -->
				<i data_i="open" @click="_open" v-if="isShowStroe"></i>
			</span>
			<ul v-if="isShow">
				<li @click="_sel($event, 0)">商品</li>
				<li @click="_sel($event, 1)">店铺</li>
			</ul>
			<input type="search" name="query" :placeholder=" isStroe ? '搜索店铺名称...' : '搜索商品名称...'" ref="query" @keyup="_sub($event, 1)" v-model="keyword"/>
		</div>
		<button type="submit" @click="_sub">
			{{ isShowStroe ? '搜索' : '搜本店'}}
		</button>
	</div>
</template>

<script>

import Vue from 'vue'
import CkSearch from 'components/CkSearch'

export default {
	components:{
		CkSearch
	},
	data () {
		return{
			isShow: false,
			isStroe: false
		}
	},
	mounted () {
		var me = this
		if(this.stroe){
			this.isStroe = true
		}
		$(function(){
			$('body').click(function(e){
	  		if(me.isShow){
		  		if($(e.target).attr('data_i') !== 'open'){
		  			me.isShow = false
		  		}
	  		}
	  	})
		})
	},
	methods: {
		_open () {
			this.isShow = !this.isShow
		},
		_sel (e, n) {
			var val = e.target.textContent
			this.$refs.type.textContent = val
			n == 0 ? (this.isStroe = false) : (this.isStroe = true)
			this.isShow = false
			this.$emit('subStor',n)
		},
		_sub (e, n) {
			e.preventDefault()
			if(n && e.which != 13){
  			return
  		}
			var val = this.$refs.query.value
  		var regH = /<[^>]*>/g
  		var regStr = /[`~!@$^&*()=|{}':;,\\[\].<>?~！@……&*（）——|{}【】‘；：”“'。，、？+_"]*/ig
  		val = val.replace(/\s/g,'').replace(regH,'').replace(regStr,'')
  		if(val.length >= 100){
				return
			}
			//val = encodeURIComponent(val)
			if(val.indexOf('%') != -1 || val.indexOf('#') != -1){
				val = encodeURIComponent(val)
			}
			this.$emit('subKeyword',val)
		}
	},
	props: {
		keyword: {
			default: ''
		},
		stroe: {
			default: ''
		},
		isShowStroe: {
			default: true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/less/C.less";
@import '../assets/css/icons.css';
@import '../assets/css/bootstrap.css';
@import "../assets/less/CkSearch.less";
@import "../assets/less/public.less";

</style>