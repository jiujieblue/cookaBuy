<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.sellerClaimChooseStore{
		button{
			outline: none;
		}
		.em{
			display: inline-block;
			width: 1em;
		}
		&-header{
			background: #fff;
			&-choose{
				.clearfix();
				padding: 0 70px 20px;
				>span,>input,>button,>div{
					float: left;
					height: 35px;
				}
				.sellerClaimChooseStore-text{
					margin: 10px 10px 0 5px;
					color: red;
				}
				.sellerClaimChooseStore-show{
					margin-right: 25px;
					position: relative;
					>span{
						display: inline-block;
						width: 200px;
						padding: 0 10px;
						line-height: 33px;
						border: 1px solid #dedede;
						&:after{
							content: '';
							display: inline-block;
							width: 8px;
							height: 8px;
							border: 2px solid #372f2c;
							border-top: none;
							border-left: none;
							position: absolute;
							top: 13px;
							right: 13px;
							transform: rotate(45deg);
							transform-origin: 75% 75%;
							transition: transform 0.3s linear;
						}
						&.active:after{
							transform: rotate(225deg);
						}
					}
					>ul{
						position: absolute;
						left: 0;
						width: 100%;
						border: 1px solid #ccc;
						background: #fff;
						z-index: 10;
						>li{
							padding: 5px 10px;
							cursor: pointer;
							&:hover{
								background: #30c2ff;
								color: #fff;
							}
						}
					}
				}
				input{
					width: 200px;
					padding: 0 10px;
					margin-right: 40px;
					border: 1px solid #dedede;
				}
				button{
					width: 80px;
					border: none;
					border-radius: 3px;
					background: #30c2ff;
					color: #fff;
					&:hover{
						background: #1cafed;
					}
				}
			}
		}
		&-nav{
			margin: 20px 0;
			>ul{
				.clearfix();
				>li{
					float: left;
					height: 40px;
					line-height: 40px;
					border-bottom: 1px solid #ececec;
					&:first-child{
						width: 8%;
						border-color: #fff;
						background: #ececec;
						text-align: center;
						font-size: 16px;
					}
					&:last-child{
						width: 92%;
						background: #fff;
						>ul{
							.clearfix();
							padding-left: 20px;
							>li{
								float: left;
								margin-right: 20px;
								cursor: pointer;
								&.active,&:hover{
									color: #fcc505;
								}
							}
						}
					}
				}
				&:last-child li{
					border: none;
				}
			}
		}
		&-main{
			>p{
				margin-bottom: 10px;
				color: #a2a2a2;
				span:last-child{
					color: #372f2c;
				}
			}
			&-list{
				>ul{
					.clearfix();
					width: 100%;
					>li{
						float: left;
						width: 20%;
						margin-bottom: 20px;
						border: 1px solid #f7f7f7;
						background: #fff;
						>p{
							width: 100%;
							height: 70px;
							line-height: 50px;
							line-height: 50px;
							padding: 10px 0;
							border-bottom: 1px solid #e1e1e1;
							text-align: center;
							font-size: 18px;
						}
						>div{
							padding: 10px 10px 30px;
							text-align: center;
							>span{
								display: inline-block;
								padding: 2px 10px;
								margin: 10px 0;
								border-radius: 2px;
								background: red;
								color: #fff;
								font-size: 12px;
							}
							>ul{
								>li{
									margin-bottom: 3px;
									color: #665c59;
									&:last-child{
										color: #a89d99;
									}
								}
							}
							>button{
								display: inline-block;
								padding: 5px 20px;
								margin-top: 20px;
								border: none;
								border-radius: 3px;
								background: #372f2c;
								font-size: 16px;
								color: #fff;
								&:hover{
									background: #554d49;
								}
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="sellerClaimChooseStore">
		<div class="sellerClaimChooseStore-header">
			<sellerClaimStatus :status="1"></sellerClaimStatus>
			<div class="sellerClaimChooseStore-header-choose">
				<span class="sellerClaimChooseStore-text">*</span>
				<div class="sellerClaimChooseStore-show">
					<span @click="_openMarkey" ref='markeyBox' :class="{'active': markeyShow}" data_open="openMarkey">请选择市场</span>
					<ul v-if="markeyShow">
						<li @click='_openMarkey($event, 1)'>大西豪</li>
						<li @click='_openMarkey($event, 1)'>你妹</li>
					</ul>
				</div>
				<input type="text" placeholder="请输入店铺名称">
				<button>搜&nbsp;索</button>
			</div>
		</div>
		<div class="sellerClaimChooseStore-nav">
			<ul v-for="(navObj,key) in navTitle">
				<li>市<span class="em"></span>场</li>
				<li>
					<ul>
						<li @click="_choose(key, 'all')" :class="{active: (navTitleChoose[key] + '').slice(0,2) == '全部'}">全部</li>
						<li v-for="(nav,index) in navObj" @click="_choose(key, nav)" :class="{active: navTitleChoose[key] == nav}">{{ nav }}</li>
				</li>
			</ul>
		</div>
		<div class="sellerClaimChooseStore-main">
			<p>
				<span v-for="(nav, key) in navTitleChoose">{{_navTitle(nav, key)}}</span>
			</p>
			<div class="sellerClaimChooseStore-main-list">
				<ul>
					<li v-for="item in 5">
						<p>吴江市甜服饰</p>
						<div>
							<img src="../../assets/images/sellerClaimStore.png" alt="认领店铺logo"><br>
							<span>未认领</span>
							<ul>
								<li>长城</li>
								<li>
									主营：女装
								</li>
								<li>1F 522档</li>
							</ul>
							<button >我要认领</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<CkPagination :pages='5' :pageNum='1' @submitPage='_subPage'></CkPagination>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sellerClaimStatus from './sellerClaimStatus'
	import CkPagination from 'components/CkPagination'
	export default {
	  data () {
	    return {
	    	status1: 1,
	    	navTitle: {
	    		market: ['新产犊','大西豪','长运'],
	    		floor: [1,5,6,7,9,8,64],
	    		theMain: ['女装','男装','童装']
	    	},
	    	navTitleChoose: {
	    		market: '全部市场',
	    		floor: '全部楼层',
	    		theMain: '全部主营'
	    	},
	    	markeyShow: false
	    }
	  },
	  mounted () {
	  	var _this = this
	  	$(function(){
	  		$('body').click(function(e){
	  			if(_this.markeyShow){
	  				if(!$(e.target).attr('data_open')){
	  					_this.markeyShow = false
	  				}
	  			}
	  		})
	  	})
	  },
	  methods: {
	  	_choose (key, str) {
	  		if(str == 'all'){
	  			key == 'market' ? str = '全部市场' : key == 'floor' ? str = '全部楼层' : str = '全部主营'
	  		}
	  		this.navTitleChoose[key] = str
	  	},
	  	_openMarkey (e, n) {
	  		if(this.markeyShow && n == 1){
	  			this.$refs.markeyBox.textContent = e.target.textContent
	  		}
	  		this.markeyShow = !this.markeyShow
	  	},
	  	_navTitle (nav, key) {
	  		if (nav && key != 'market') {
	  			return '>' + nav
	  		}else{
	  			return nav
	  		}
	  	},
	  	_subPage (page) {
	  		console.log(page)
	  	}
	  },
	 	components: {
	 		sellerClaimStatus,
	 		CkPagination
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->