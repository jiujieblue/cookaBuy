<template>
	<div class="ck-search">
		<div class="ck-search-select">
			<span @click="_open">
				<span ref="type">商品</span>
				<link rel="stylesheet" class="icon-jiantoud">
			</span>
			<ul v-if="isShow">
				<li @click="_sel">商品</li>
				<li @click="_sel">店铺</li>
			</ul>
			<input type="search" name="query" :class="[isDisabled ? 'disabled' : '']" placeholder="搜索关键字..." ref="query" @keyup="_sub($event, 1)" :value="key || keyword"/>
		</div>
		<button :disabled="isDisabled" type="submit" @click="_sub">
			搜索
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
			isDisabled: false,
			key: '',
			isShow: false
		}
	},
	mounted () {
		
	},
  // 组件加载完成之后
  updated () {
  	var me = this
  	$('document').click(function(){
  		me.isShow = false
  	})
  },
	methods: {
		_open () {
			this.isShow = !this.isShow
		},
		_sel (e) {
			var val = e.target.innerHTML
			this.$refs.type.innerHTML = val
			this.isShow = false
		},
		_sub (e, n) {
			e.preventDefault()
			if(n && e.which != 13){
  			return
  		}
			var val = this.$refs.query.value
  		var regH = /<[^>]*>/g
  		var regStr = /[`~!@#$^&*()=|{}':;,\\[\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_"]*/ig
  		val = val.replace(/\s/g,'').replace(regH,'').replace(regStr,'')
  		if(val.length >= 100){
				return
			}
			val = encodeURIComponent(this.$refs.query.value)
			this.$emit('subKeyword',val)
		}
	},
	props: {
		keyword: {
			default: ''
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