<template>
	<div className="alert alert-danger">
		{{this.props.errorMsg}}
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		data(){
			return{
				props:{
					errorMsg: ''
				}
			}
		},
		methods:{
			function(){
				if(this.props.errorMsg){
					return null
				}
			}
		}
	}
</script>

<style lang="less">
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
</style>