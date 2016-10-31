<template>
	<div>
		<scHeaderComponent></scHeaderComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<scSideBarComponent></scSideBarComponent>
				</div>
				<div class="col-md-10">
					<ppap></ppap>
					<form action="" v-on:submit="_submit">
						<input type="text" name="text">
						<ErrorMsg></ErrorMsg>
						<button class="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import scHeaderComponent from 'components/SellerCenterHeader'
import scSideBarComponent from 'components/SellerCenterSideBar'
import ErrorMsg from 'components/ErrorMsg'
import ppap from 'components/Pagination'

const fto = require('form_to_object')

export default{
	data(){
		return{
			props:{
				errorMsg:''
			}
		}
	},
	components:{
		scHeaderComponent,
		scSideBarComponent,
		ppap,
		ErrorMsg
	},
	methods:{
		_submit(e){
			var me = this;
			e.preventDefault()
			var data = fto(e.target)
			console.log(data)
			if(!data.name){
				me.errorMsg='不能为空!'
				return false;
			}
			if(!/^\d{6}$/.test(data.name)){
				me.errorMsg='名字必须是6位数字'
				return false;
			}
		}
	}
} 
</script>

<style lang="less">
@import '../../assets/css/icons.css';
@import "../../assets/less/public.less";
@import "../../assets/less/C.less";
</style>