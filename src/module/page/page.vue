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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import scHeaderComponent from 'components/SellerCenterHeader'
import scSideBarComponent from 'components/SellerCenterSideBar'
import ppap from 'components/Pagination'
export default{
	data(){
		return{

		}
	},
	components:{
		scHeaderComponent,
		scSideBarComponent,
		ppap
	}
} 
</script>

<style lang="less">
@import '../../assets/css/icons.css';
@import "../../assets/less/public.less";
@import "../../assets/less/C.less";
</style>