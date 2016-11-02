<template>
	<ul>
		<li v-for="item in items">
			{{item.message}}
		</li>
	</ul>
</template>

<script>
	import Vue from 'vue'
	
	const qs = require('qs');
	const _ = require('lodash');

	export default{
		data(){
			return{
				items:[
					{message:'aaa'},
					{message:'bbb'}
				]
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	@import '../assets/less/pagination.less';
	@import '../assets/css/bootstrap.css';
</style>