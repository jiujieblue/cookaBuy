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
							<a title="柯咔服装网" href="./index.html"><img src="../assets/images/logo.svg" width="150" alt="柯咔服装网"/></a>
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
						<CkSearch :stroe="stroe" @subKeyword="_subkey" :keyword="keyword" @subStor="_subStor" :isShowStroe="isShowStroe"></CkSearch>
					</div>
				</div>
			</div>
		</div>
		<div class="header-nav" v-if="this.pageName != 'detailPage'">
			<div class="header-nav-inner">
				<span href="#" class="header-category-all">
					<a href="#"> 全部商品分类 </a><span class="icon-daohangxianghou"/>

					<ul class="header-category-lv-1">
						<!-- @mouseover="_liover"-->
						<li @mouseover="_liover" :class="'li'+daohangoneIndex" v-for="(daohangoneItem, daohangoneIndex) in daohangone">
							<a @click="_goMore(daohangoneItem.name)" :data_li="'li'+daohangoneIndex">
								<span 
									:class="{
										'icon-nanz':daohangoneItem.name=='男装',
										'icon-nz':daohangoneItem.name=='女装',
										'icon-yunfuz':daohangoneItem.name=='孕妇装',
										'icon-tz':daohangoneItem.name=='童装'
									}" 
								/>
								{{daohangoneItem.name}}
								<span class="icon-daohangonexianghou"/>
							</a>
							<!-- @mouseover="_cltwoover" @mouseout="_cltwoout"-->
							<ul :data_li="'li'+daohangoneIndex" class="header-category-lv-2">
								<li v-for="(daohangtwoItem, daohangtwoIndex) in daohangoneItem.children">
									<span class="line"></span>
									<a @click="_goMore(daohangoneItem.name,daohangtwoItem.name)">{{daohangtwoItem.name}}</a>
									<ul class="header-category-lv-3">
										<li v-for="(daohangthreeItem, daohangthreeIndex) in daohangtwoItem.links"><a @click="_goMore(daohangoneItem.name,daohangthreeItem.alias)">{{daohangthreeItem.alias}}</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</span>

				<ul class="header-nav-items">
					<li class="header-nav-item"><a :style="{color: this.pageName == 'indexPage'? '#fff':'' }" href="./index.html">首页</a></li>
					<li :class="['header-nav-item', this.pageName == 'hotPage'? 'active':'']"><a href="./hotSale.html">爆款专区</a></li>
					<li :class="['header-nav-item', this.pageName == 'visitPage'? 'active':'']"><a href="./visitingMarket.html">逛市场</a></li>
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
		_liover (e) {
			$('.'+e.target.getAttribute('data_li')).addClass('active').siblings('.active').removeClass('active')
		},
		// _cltwoover (e){
		// 	var tar = $(e.target)
		// 	if(tar.attr('data_li') === undefined){
		// 		tar = tar.parents('.header-category-lv-2')
		// 	}
		// 	tar.prev('a').children('.icon-daohangonexianghou').css({display: 'none'})
		// },
		// _cltwoout (e){
		// 	var tar = $(e.target)
		// 	if(tar.attr('data_li') === undefined){
		// 		tar = tar.parents('.header-category-lv-2')
		// 	}
		// 	tar.prev('a').children('.icon-daohangonexianghou').css({display: 'block'})
		// },
		
		_subStor (n) {
			this.$emit('subStor',n)
		},
		_subkey (val) {
			this.$emit('subKeyword',val)
		},
		_goMore(daohangone,daohangtwo,daohangthree){
			var cpath = ''
			if(!daohangtwo && !daohangthree){
				if(daohangone == '女装'){
					cpath = '16'
				}else if(daohangone == '男装'){
					cpath = '30'
				}else if(daohangone == '孕妇装'){
					cpath = '50022517'
				}else if(daohangone == '童装'){
					cpath = '50008165'
				}
				window.open("./search.html?q="+ daohangone + '&cpath=' + cpath)
			}else if(daohangtwo){
				if(daohangone == '女装'){
					cpath = '16'
				}else if(daohangone == '男装'){
					cpath = '30'
				}else if(daohangone == '孕妇装'){
					cpath = '50022517'
				}else if(daohangone == '童装'){
					cpath = '50008165'
				}
				window.open("./search.html?q="+ daohangtwo + '&cpath=' + cpath)
			}else if(daohangthree){
				if(daohangone == '女装'){
					cpath = '16'
				}else if(daohangone == '男装'){
					cpath = '30'
				}else if(daohangone == '孕妇装'){
					cpath = '50022517'
				}else if(daohangone == '童装'){
					cpath = '50008165'
				}
				window.open("./search.html?q="+ daohangthree + '&cpath=' + cpath)
			}
		}
	},
	props: {
		keyword: {
			default: ''
		},
		pageName: {
			default: ''
		},
		stroe: {
			default: ''
		},
		isShowStroe: {
			default: true
		}
	},
	mounted(){

		$('.header-category-all').hover(
			function(){
				$('.icon-daohangxianghou').removeClass('out').addClass('hover')
			},function(){
				$('.icon-daohangxianghou').addClass('out').removeClass('hover')
			}
		)
		this.$http.get('/api/cats')
		.then(
			function(res){
				this.daohangone = res.data.cats
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