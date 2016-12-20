<template>
	<div class="header" :style="{marginBottom:this.pageName == 'detailPage'?'0px':'20px'}">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-2 trim-col">
						你好，欢迎光临柯咔商城！
					</div>
					<div class="col-md-3 trim-col">
						<div class="text-left" style="display:none">
							<a href="#" class="header-top-link">
								请登录
							</a>
							<span class="header-top-sep">|</span>
							<a href="#" class="header-top-link">
								免费注册
							</a>
						</div>
					</div>
					<div class="col-md-7">
						<div class="text-right">
							<a href="./index.html" class="header-top-link" style="margin-right:10px;">首页</a>
							<a href="#" class="header-top-link" style="display:none;margin-right: 30px;margin-left: 30px;">
								商家入驻
							</a>
							<a style="display:none" href="#" class="header-top-link">
								收藏本站
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-inner" :style="{backgroundColor:this.pageName == 'detailPage'?'#FFFFFF':''}">
			<div class="container">
				<div class="row">
					<div class="col-md-2 trim-left">
						<div class="header-logo">
							<a href="index.html"><img src="../assets/images/logo.svg" width="150"/></a>
						</div>
					</div>
					<div class="col-md-1"></div>
					<div class="col-md-1"></div>
					<div class="col-md-2 trim-right">
						<div class="header-qrcode" style="display: none">
							<img src="../assets/images/qrcode.jpg" width="100" height="100"/>
						</div>
					</div>
					<div class="col-md-6">
						<CkSearch @subKeyword="_subkey" :keyword="keyword"></CkSearch>
					</div>
				</div>
			</div>
		</div>
		<div class="header-nav" v-if="this.pageName != 'detailPage'">
			<div class="header-nav-inner">
				<span href="#" class="header-category-all">
					<a href="#"> 全部商品分类 </a><span class="icon-daohangxianghou"/>

					<ul class="header-category-lv-1">
						<li v-for="(daohangoneItem, daohangoneIndex) in daohangone">
							<a @mouseover="_get_onecid(daohangoneIndex)">{{daohangoneItem.name}}{{daohangoneItem.cid}}<span class="icon-xianghou"/></a>
							<ul class="header-category-lv-2">
								<li v-for="(daohangtwoItem, daohangtwoIndex) in daohangtwo">
									<a >{{daohangtwoItem.name}}{{daohangtwoItem.cid}}</a>
									<ul class="header-category-lv-3">
										<li v-for="(daohangthreeItem, daohangthreeIndex) in daohangthree"><a href="#">{{daohangthreeItem.name}}</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</span>

				<ul class="header-nav-items">
					<li class="header-nav-item"><a :style="{color: this.pageName == 'indexPage'? '#fff':'' }" href="./index.html">首页</a></li>
					<li :class="['header-nav-item', this.pageName == 'hotPage'? 'active':'']"><a href="./hotSale.html">爆款专区</a></li>
					<li :class="['header-nav-item', this.pageName == 'visitPage'? 'active':'']"><a href="./visitingMarket.html?market=大西豪&page=1">逛市场</a></li>
					<li class="header-nav-item" style="display:none"><a>我的关注</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import CkSearch from 'components/CkSearch'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default{
	data(){
		return{
			daohangone: [],
			daohangtwo: [],
			daohangthree: [],
			cid: '',
			daohangoneIndex: '',
			daohangtwoIndex: '' 
		}
	},
	components:{
		CkSearch
	},
	methods: {
		_subkey (val) {
			this.$emit('subKeyword',val)
		},
		_get_onecid(daohangoneIndex){
			this.daohangoneIndex = daohangoneIndex
			//console.log(this.daohangoneIndex)
			this.cid = this.daohangone[daohangoneIndex].cid
			//console.log(this.cid)
			this.$http.get('/api/categories?pid=' + this.cid)
			.then(
				function(res){
					//console.log(res)
					this.daohangtwo = res.data.data
					for (var i = 0; i < this.daohangtwo.length; i++) {
						// this.cid = this.daohangtwo[i].cid
						// console.log(this.cid)
						// this.$http.get('/api/categories?pid=' + this.cid).
						// then(
						// 	function(res){
						// 		this.daohangthree = res.data.data
						// 	},
						// 	function(err){
						// 		console.log(err)
						// 	}
						// )
						//console.log(this.daohangtwo[i])
						//for(var j = 0 ; j < this.daohangtwo[i].length ; j ++){
							// $.get('/api/categories?pid='+this.daohangtwo[i].cid,function(res){
							// 	this.daohangtwo[i][j] = res.data.data
							// 	this.daohangthree.push(this.daohangtwo[i][j])
							// })
							for( var j in this.daohangtwo[i]){
								this.$http.get('/api/categories?pid='+this.daohangtwo[i].cid)
								.then(
									function(res){
										//console.log(res.data.data)
										this.daohangthree[j] = res.data.data
										//this.daohangthree.push(this.daohangtwo[i][j])
										//console.log(this.daohangthree)
									},
									function(err){
										console.log(err)
									}
								)
							}
						//}
					}
				},
				function(err){
					console.log(err)
				}
			)
		}
	},
	props: {
		keyword: {
			default: ''
		},
		pageName: {
			default: ''
		}
	},
	mounted(){
		
		this.$http.get('/api/categories')
		.then(
			function(res){
				this.daohangone = res.data.data
			},
			function(err){
				console.log(err)
			}
		)
		

	}
}
</script>
<style lang="less">
	@import '../assets/less/header.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
</style>