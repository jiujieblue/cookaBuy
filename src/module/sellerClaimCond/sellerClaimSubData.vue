<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.sellerClaimSubData{
		.em{
			display: inline-block;
			width: 1em;
		}
		&-storeinfo{
			margin-top: 10px;
			background: #fff;
			>p{
				padding: 10px 30px;
				font-size: 20px;
				color: #c1c1c1;
			}
			>div{
				padding: 20px 60px;
				font-size: 16px;
				>ul{
					&.textinfo{
						>li{
							line-height: 25px;
							margin-bottom: 20px;
							>span{
								padding-right: 5px;
								color: red;
								&:last-child{
									padding-left: 10px;
									font-size: 14px;
								}
							}
							>label{
								position: relative;
								bottom: 2px;
								font-weight: normal;
							}
							>input{
								width: 200px;
								padding: 0 10px;
							}
						}
					}
					&.imginfo{
						.clearfix();
						>li{
							float: left;
							&:first-child{
								width: 60%;
							}
							>p{
								span{
									color: red;
								}
							}
							ul{
								.clearfix();
								>li{
									float: left;
								}
								&.imginfo-upload{
									padding: 30px 10px;
									>li{
										margin-right: 30px;
										text-align: center;
										>div{
											width: 169px;
											height: 115px;
											margin-bottom: 15px;
											border: 1px dashed #e6e6e6;
											text-align: center;
											position: relative;
											overflow: hidden;
											>img{
												height: 100%;
											}
											&:hover >div{
												bottom: 0;
											}
											>link{
												margin-top: 20px;
												font-size: 80px;
								    		cursor: pointer;
											}
											>div{
												position: absolute;
												bottom: -48px;
												left: 0;
												width: 100%;
												transition: bottom 0.3s linear;
												link{
													float: left;
													width: 50%;
													padding: 8px;
													background: #b5b5b5;
													opacity: 0.7;
													color: #fff;
													font-size: 30px;
													cursor: pointer;
													&:hover{
														background: #9f9f9f;
													}
												}
											}
										}
										>span{
											font-size: 14px;
											color: #adadad;
										}
									}
								}
								&.imginfo-sample{
									margin-top: 55px;
									>li{
										margin-right: 20px;
										text-align: center;
										>div{
											width: 135px;
											height: 90px;
											padding: 5px;
											border: 1px dashed #e6e6e6;
											>img{
												width: 100%;
											}
										}
										>span{
											display: block;
											margin-top: 15px;
											font-size: 14px;
											color: #adadad;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		&-archivesinfo{
			margin-top: 10px;
			background: #fff;
			>p{
				padding: 10px 30px;
				font-size: 20px;
				color: #c1c1c1;
			}
			>div{
				padding: 20px 60px;
				font-size: 16px;
				>ul{
					>li{
						.clearfix();
						line-height: 25px;
						margin-bottom: 20px;
						>span,>div{
							float: left;
						}
						label{
							font-weight: normal;
						}
						>span{
							&:first-child{
								display: inline-block;
								width: 20px;
								height: 25px;
								padding: 2px 0 0 2px;
								color: red;
							}
							&:nth-child(2){
								display: inline-block;
								width: 120px;
							}
						}
					}
					&.textinfo{
						>li{
							&:first-child{
								>div{
									position: relative;
									>span{
										display: inline-block;
										width: 200px;
										line-height: 32px;
										padding: 0 10px;
										margin-top: -3px;
										border: 1px solid #d5d5d5;
										&:after{
											content: '';
									    display: inline-block;
									    width: 8px;
									    height: 8px;
									    border: 2px solid #372f2c;
									    border-top: none;
									    border-left: none;
									    position: absolute;
									    top: 10px;
									    right: 13px;
									    transform: rotate(45deg);
									    transform-origin: 75% 75%;
									    transition: transform 0.3s linear;
										}
										&.active{
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
							}
							&:nth-child(2){
								>div{
									>label{
										padding: 0 5px;
									}
									>span{
										display: block;
										font-size: 14px;
										color: #979797;
									}
								}
							}
							&:nth-child(3){
								>div{
									>div{
										margin-bottom: 20px;
										>label{
											padding: 0 5px;
										}
										>input[type='text']{
											width: 240px;
											padding: 0 10px;
											margin: 0 10px;
										}
										span{
											font-size: 14px;
											color: #979797;
										}
									}
								}
							}
							&:nth-child(4){
								>div{
									>input{
										width: 150px;
										padding: 0 10px;
									}
									>span{
										padding: 0 5px;
									}
								}
							}
						}
					}
					&.imginfo{
						.clearfix();
						padding-left: 20px;
						margin-top: 50px;
						>li{
							float: left;
							width: 50%;
							>ul{
								padding: 25px 0;
								&.imginfo-upload{
									.clearfix();
									>li{
										float: left;
										width: 115px;
										height: 130px;
										margin-right: 30px;
										border: 1px dashed #e6e6e6;
										text-align: center;
								    position: relative;
								    overflow: hidden;
								    >img{
											width: 100%;
								    }
								    >link{
								    	margin-top: 25px;
								    	font-size: 80px;
								    	cursor: pointer;
								    }
								    >div{    
								    	position: absolute;
									    bottom: -46px;
									    left: 0;
									    width: 100%;
									    transition: bottom 0.3s linear;
								    	>link{
								    		float: left;
										    width: 50%;
										    padding: 8px;
										    background: #b5b5b5;
										    opacity: 0.7;
										    color: #fff;
										    font-size: 30px;
										    cursor: pointer;
										    &:hover{
										    	background: #9f9f9f;
										    }
								    	}
								    }
								    &:hover >div{
								    	bottom: 0;
								    }
									}
								}
								&.imginfo-sample{
									.clearfix();
									>li{
										float: left;
										margin-right: 30px;
										text-align: center;
										>div{
											width: 115px;
											height: 130px;
											padding: 5px;
											margin-bottom: 10px;
											border: 1px dashed #e6e6e6;
										}
										>span{
											font-size: 14px;
											color: #adadad;
										}
									}
								}
								&.imginfo-prompt{
									font-size: 14px;
									color: #30c2ff;
								}
							}
							>p:last-child{
								font-size: 14px;
								color: #979797;
							}
						}
					}
				}
			}
		}
		&-validation{
			margin-top: 10px;
			background: #fff;
			>p{
				padding: 10px 30px;
				font-size: 20px;
				color: #c1c1c1;
			}
			>div{
				padding: 30px 70px 80px;
				font-size: 16px;
				color: #232323;
				>button{
					width: 120px;
					height: 42px;
					margin-left: 20px;
					border: none;
					border-radius: 3px;
					background: #30c2ff;
					color: #fff;
					&:hover{
						background: #09a6e7;
					}
				}
			}
		}
		&-sub{
			margin-top: 50px;
			text-align: center;
			button{
				width: 230px;
				height: 50px;
				border: none;
				border-radius: 3px;
				background: #09a6e7;
				font-size: 24px;
				color: #fff;
			}
		}
		&-plusModal{
			.modal-container{
				max-width: 500px;
				padding: 0;
				background: transparent;
				box-shadow: 0 2px 8px transparent;
			}
			.modal-body{
				padding: 0;
				margin: 0;
				img{
					width: 100%;
				}
				link{
					display: block;
					margin-top: 30px;
					font-size: 50px;
					color: #a5a5a5;
					&:hover{
						color: #ccc;
					}
				}
			}
		}
		&-delModal{
			.modal-header{
				link.icon-wenhao{
					color: red;
					margin-top: -2px;
				}
			}
			.modal-body{
				margin: 40px 0;
				font-size: 18px;
			}
			.modal-footer{
				padding: 20px 20px;
				border-top: 1px solid #e5e5e5;
				button{
					width: 120px;
					height: 35px;
					border-radius: 3px;
					font-size: 16px;
					outline: none;
					&.cancel{
						float: left;
						border: 1px solid #aaa;
						background: #fff;
						color: #1a1a1a;
						&:hover{
							background: #dedede;
						}
					}
					&.determine{
						float: right;
						border: none;
						background: #fcc505;
						color: #372f2c;
						&:hover{
							background: #ffd131;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="sellerClaimSubData">
		<sellerClaimStatus :status="2"></sellerClaimStatus>
		<div class="sellerClaimSubData-storeinfo">
			<p>店铺信息</p>
			<div>
				<ul class="textinfo">
					<li>
						<span>*</span>
						<label for="name">店主姓名：</label>
						<input id="name" type="text" placeholder="请输入真是姓名">
					</li>
					<li>
						<span>*</span>
						<label for="phone">联系电话：</label>
						<input id="phone" type="text" placeholder="请输入电话号码" @blur="_phoneYZ">
						<span v-if="errorPhone">您填写的手机号码有误，请重新输入！</span>
					</li>
				</ul>
				<ul class="imginfo">
					<li>
						<p>
							<span>*</span>
							身份证正反面：
						</p>
						<ul class="imginfo-upload">
							<li>
								<div>
									<img v-if="img.idCardPo" :src="img.idCardPo" alt="用户上传-身份证正面">
									<link @click="_openImg('idCardPo', 'addModal')" v-else rel="stylesheet" class="icon-plusDashed">
									<div v-if="img.idCardPo" data_img="idCardPo">
										<link rel="stylesheet" class="icon-amplification" @click="_openImg('idCardPo', 'plusModal')">
										<link rel="stylesheet" class="icon-shanchu" @click="_openImg('idCardPo', 'delModal')">
									</div>
								</div>
								<span>正面照片</span>
							</li>
							<li>
								<div>
									<img v-if="img.idCardRe" :src="img.idCardRe" alt="用户上传-身份证反面">
									<link @click="_openImg('idCardRe', 'addModal')" v-else rel="stylesheet" class="icon-plusDashed">
									<div v-if="img.idCardRe" data_img="idCardRe">
										<link rel="stylesheet" class="icon-amplification" @click="_openImg('idCardRe', 'plusModal')">
										<link rel="stylesheet" class="icon-shanchu" @click="_openImg('idCardRe', 'delModal')">
									</div>
								</div>
								<span>反面照片</span>
							</li>
						</ul>
					</li>
					<li>
						<p>
							示例：
						</p>
						<ul class="imginfo-sample">
							<li>
								<div>
									<img src="../../assets/images/idCardPositivemin.png" alt="示例身份证照片-正面">
								</div>
								<span>正面照片</span>
							</li>
							<li>
								<div>
									<img src="../../assets/images/idCardReverse.png" alt="示例身份证照片-反面">
								</div>
								<span>反面照片</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="sellerClaimSubData-archivesinfo">
			<p>档口信息</p>
			<div>
				<ul class="textinfo">
					<li>
						<span>*</span>
						<span>主营类目：</span>
						<div>
							<span>精品女装</span>
							<ul v-if="chooseClothing">
								<li>连衣裙</li>
								<li>T恤</li>
								<li>毛衣</li>
							</ul>
						</div>
					</li>
					<li>
						<span></span>
						<span>配送服务</span>
						<div>
							<input id="service" type="checkbox">
							<label for="service">商家发货</label>
							<span>平台默认提供代发服务，商家可自愿选择提供商家发货。</span>
						</div>
					</li>
					<li>
						<span>*</span>
						<span>折扣</span>
						<div>
							<div>
								<input type="radio" id="amount">
								<label for="amount">固定金额</label>
								<input type="text" placeholder="请输入大于5的整数">
								<span>其他平台上的标价100.0的商品。如果固定折扣金额10元，会在搜款网上按90.0标价</span>
							</div>
							<div>
								<input type="radio" id="discount">
								<label for="discount">固定折扣</label>
								<input type="text" placeholder="请输入0.00~10.00之间的数值">
								<span>其他平台上的标价100.0的商品。如果固定折扣比例8折，会在搜款网上按80.0标价</span>
							</div>
						</div>
					</li>
					<li>
						<span></span>
						<span>租赁有效期</span>
						<div>
							<input type="text" placeholder="开始时间">
							<span>--</span>
							<input type="text" placeholder="时间">
						</div>
					</li>
				</ul>
				<ul class="imginfo">
					<li>
						<p>
							租赁合同文件：
						</p>
						<ul class="imginfo-upload">
							<li>
								<img v-if="img.contract1" :src="img.contract1" alt="用户上传-合同照片1">
								<link @click="_openImg('contract1', 'addModal')" v-else rel="stylesheet" class="icon-plusDashed">
								<div v-if="img.contract1" data_img="contract1">
									<link rel="stylesheet" class="icon-amplification" @click="_openImg('contract1', 'plusModal')">
									<link rel="stylesheet" class="icon-shanchu" @click="_openImg('contract1', 'delModal')">
								</div>
							</li>
							<li>
								<img v-if="img.contract2" :src="img.contract2" alt="用户上传-合同照片2">
								<link @click="_openImg('contract2', 'addModal')" v-else rel="stylesheet" class="icon-plusDashed">
								<div v-if="img.contract2" data_img="contract2">
									<link rel="stylesheet" class="icon-amplification" @click="_openImg('contract2', 'plusModal')">
									<link rel="stylesheet" class="icon-shanchu" @click="_openImg('contract2', 'delModal')">
								</div>
							</li>
						</ul>
						<p>合同信息只用于证明档口归属，搜款网不会把此信息泄露给第三方</p>
					</li>
					<li>
						<p>
							示例：
						</p>
						<ul class="imginfo-sample">
							<li>
								<div>
									<img src="../../assets/images/contract.png" alt="示例身份证照片-正面">
								</div>
								<span>第1页</span>
							</li>
							<li>
								<div>
									<img src="../../assets/images/contract.png" alt="示例身份证照片-反面">
								</div>
								<span>第2页</span>
							</li>
							<li>
								<div>
									<img src="../../assets/images/contract.png" alt="示例身份证照片-反面">
								</div>
								<span>第3页</span>
							</li>
						</ul>
						<ul class="imginfo-prompt">
							<li>• &nbsp;请保证照片清晰、完整、无水印，否则无法通过审核！</li>
							<li>• &nbsp;上传的资质必须是有最新年检的租赁合同文件。</li>
							<li>• &nbsp;如果您上传的是证照的复印件，复印件上必须盖有清晰的红章。</li>
							<li>• &nbsp;照片大小不超过10M，支持格式：JPG、JPEG、PNG、BMP。</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="sellerClaimSubData-validation">
			<p>验证淘宝店铺</p>
			<div>
				<span>验证成功之后才可以认领店铺，只有验证淘宝店铺，我们才能放心的把店铺交到您的手上。</span>
				<button>去验证>></button>
			</div>
		</div>
		<div class="sellerClaimSubData-sub">
			<button>提<span class="em"></span>交</button>
		</div>
		<modal v-show="showModal.addModal" @changeImg="_changeImg" @closeModal='_closeModal'></modal>
		<div class="sellerClaimSubData-plusModal">
			<modal v-show="showModal.plusModal" @closeModal='_closeModal' :isHeader="false">
				<div slot="body">
					<img :src="plusImg" alt="放大的图片">
					<link rel="stylesheet" class="icon-chacha" @click="_closeModal">
				</div>
			</modal>
		</div>
		<div class="sellerClaimSubData-delModal">
			<modal v-show="showModal.delModal">
				<div slot="header">
					<link rel="stylesheet" class="icon-wenhao">
					删除图片
					<link rel="stylesheet" class="icon-cha" @click="_closeModal">
				</div>
				<div slot="body">确定要删除选中的图片吗？</div>
				<div slot="footer">
					<button @click="_closeModal" class="cancel">取<span class="em"></span>消</button>
	        <button @click="_del" class="determine">确<span class="em"></span>定</button>
				</div>
			</modal>
		</div>
	</div>
</template>

<script>
	

	import Vue from 'vue'
	import sellerClaimStatus from './sellerClaimStatus'
	import modal from './modal'
	export default {
	  data () {
	    return {
	    	showModal: {
	    		addModal: false,
	    		plusModal: false,
	    		delModal: false,
	    		modal: ''
	    	},
	    	plusImg: '',
	    	delImg: '',
	    	chooseClothing: false,
	    	errorPhone: false,
	    	img:{
		    	idCardPo: '',
		    	idCardRe: '',
		    	contract1: '',
		    	contract2: '',
		    	img: ''
	    	},
	    	imgURL: {
		    	idCardPo: '',
		    	idCardRe: '',
		    	contract1: '',
		    	contract2: '',
		    	img: ''
	    	}
	    }
	  },
	  methods: {
	  	_del () {
	  		this.img[this.img.img] = ''
	  		this.imgURL[this.imgURL.img] = ''
	  		this.showModal[this.showModal.modal] = false
	  	},
	  	_changeImg (val) {
	  		this.img[this.img.img] = val.img
	  		this.imgURL[this.imgURL.img] = val.imgURL
	  	},
	  	_closeModal () {
	  		this.showModal[this.showModal.modal] = false
	  	},
	  	_openImg (imgkey, showkey) {
	  		// $('body').css({overflow: 'hidden'})
	  		this.showModal.modal = showkey
	  		this.showModal[showkey] = true
	  		if(showkey == 'addModal'){
		  		this.img.img = imgkey
		  		this.imgURL.img = imgkey
	  		}else if(showkey == 'plusModal'){
	  			this.plusImg = this.img[imgkey]
	  		}else{
	  			this.delImg = this.img[imgkey]
	  		}
	  	},
	  	_phoneYZ (e) {
	  		var reg = /1[3578]\d{9}/ig
	  		if(reg.test(e.target.value)){
	  			this.errorPhone = false
	  		}else{
	  			this.errorPhone = true
	  		}
	  	}
	  },
	 	components: {
	 		sellerClaimStatus,
	 		modal
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->