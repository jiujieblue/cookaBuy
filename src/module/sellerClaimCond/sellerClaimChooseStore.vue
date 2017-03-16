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
							position: relative;
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
								&.claim{
									background: #372f2c;
								}
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
								&.claim{
									cursor: inherit;
									background: #bcbcbc;
									&:hover{
										background: #bcbcbc;
									}
								}
							}
							>div{
								position: absolute;
								bottom: 70px;
								left: 0;
								display: none;
								>div{
									width: 80%;
									margin: 0 auto;
									padding: 10px;
									background: #fff;
									border: 1px solid #dedede;
									border-radius: 3px;
									z-index: 100;
									span{
										color: #fcc505;
									}
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
			<ul>
				<li>市<span class="em"></span>场</li>
				<li>
					<ul>
						<li @click="_choose('markets', 'all')" :class="{active: (navListChoose.markets + '').slice(0,2) == '全部'}">
							全部
						</li>
						<li v-for="(navS,index) in navList.markets" @click="_choose('markets', nav)" :class="{active: navListChoose.markets == nav}">
						{{ navS.market_name }}
						</li>
					</ul>
				</li>
			</ul>
			<ul v-show="navList.floors.length != 0">
				<li>楼<span class="em"></span>层</li>
				<li>
					<ul>
						<li @click="_choose('floors', 'all')" :class="{active: (navListChoose.floors + '').slice(0,2) == '全部'}">
							全部
						</li>
						<li v-for="(navS,index) in navList.floors" @click="_choose('floors', nav)" :class="{active: navListChoose.floors == nav}">
						{{ navS.floor }}
						</li>
					</ul>
				</li>
			</ul>
			<ul v-show="navList.categories.length != 0">
				<li>主<span class="em"></span>营</li>
				<li>
					<ul>
						<li @click="_choose('categories', 'all')" :class="{active: (navListChoose.categories + '').slice(0,2) == '全部'}">
							全部
						</li>
						<li v-for="(navS,index) in navList.categories" @click="_choose('categories', nav)" :class="{active: navListChoose.categories == nav}">
						{{ navS }}
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="sellerClaimChooseStore-main">
			<p>
				<span v-for="(nav, key) in navListChoose">{{_navTitle(nav, key)}}</span>
			</p>
			<div class="sellerClaimChooseStore-main-list">
				<ul>
					<li v-for="(navData_O, navData_I) in navData">
						<p>{{ navData_O.store_name }}</p>
						<div>
							<img src="../../assets/images/sellerClaimStore.png" alt="认领店铺logo"><br>
							<span :class="{claim: navData_O.claim_status}">未认领</span>
							<ul>
								<li>{{ navData_O.market }}</li>
								<li>
									主营：{{ navData_O.cat }}
								</li>
								<li>{{ navData_O.floor }}&nbsp;&nbsp;&nbsp;{{ navData_O.store_number }}档</li>
							</ul>
							<button @mouseover="_claimOver($event, navData_O.claim_status)" @mouseout="_claimOut($event, navData_O.claim_status)" :class="{claim: navData_O.claim_status}">我要认领</button>
							<div>
								<div>
									该店铺已被认领，如有疑问，请联系客服 <br>
									<span>400-46541321</span>
								</div>
							</div>
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
	    		markets: '市<span class="em"></span>场',
	    		floors: '楼<span class="em"></span>层',
	    		categories: '主<span class="em"></span>营'
	    	},
	    	navData: '',
	    	navList: {
	    		markets: ['新产犊','大西豪','长运'],
	    		floors: [1,5,6,7,9,8,64],
	    		categories: ['女装','男装','童装']
	    	},
	    	navListChoose: {
	    		markets: '全部市场',
	    		floors: '全部楼层',
	    		categories: '全部主营'
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
	  	this.$http.get('api/stores/list_stores')
	  	.then(function (res) {
	  		console.log(res.data)
	  		this.navList.markets = res.data.markets
	  		this.navList.floors = res.data.floors
	  		this.navList.categories = res.data.categories
	  		this.navData = res.data.data
	  		console.log(this.navData)
	  	},
	  	function (res) {
	  		console.log(res)
	  	})
	  },
	  methods: {
	  	_claimOver (e, status) {
	  		if(status){
	  			$(e.target).next().css({display: 'block'})
	  		}
	  	},
	  	_claimOut (e, status) {
	  		if(status){
	  			$(e.target).next().css({display: 'none'})
	  		}
	  	},
	  	_returName (key) {

	  	},
	  	_choose (key, str) {
	  		if(str == 'all'){
	  			key == 'markets' ? str = '全部市场' : key == 'floors' ? str = '全部楼层' : str = '全部主营'
	  		}
	  		this.navListChoose[key] = str
	  	},
	  	_openMarkey (e, n) {
	  		if(this.markeyShow && n == 1){
	  			this.$refs.markeyBox.textContent = e.target.textContent
	  		}
	  		this.markeyShow = !this.markeyShow
	  	},
	  	_navTitle (nav, key) {
	  		if (nav && key != 'markets') {
	  			return ' > ' + nav
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