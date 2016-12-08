<template>
	<div>
		<SCH></SCH>
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<SCS></SCS>
				</div>
				<div class="col-md-10 trim-col">
				
					<!-- 删除商品弹框 -->
					<div class="modal-mask" v-if="IsShowDelModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品删除</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“xxx”删除!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_delPro">
											确定
										</button>
										<button class="button-cel" @click="IsShowDelModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 删除商品弹框 -->
					
					<!-- 删除所有商品弹框 -->
					<div class="modal-mask" v-if="IsShowDelAllModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品删除</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“全部商品”删除!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_delPro">
											确定
										</button>
										<button class="button-cel" @click="IsShowDelAllModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 删除所有商品弹框 -->

					<!-- 商品起售弹框 -->
					<div class="modal-mask" v-if="IsShowOnSaleModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品起售</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“xxx”起售!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_onSale">
											确定
										</button>
										<button class="button-cel" @click="IsShowOnSaleModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 商品起售弹框 -->
					
					<!-- 商品停售弹框 -->
					<div class="modal-mask" v-if="IsShowUnSaleModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品起售</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“xxx”起售!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_unSale">
											确定
										</button>
										<button class="button-cel" @click="IsShowUnSaleModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 商品停售弹框 -->

					<!-- 起售全部商品 -->
					<div class="modal-mask" v-if="IsShowOnSaleAllModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品起售</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“全部商品”起售!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_onSaleAll">
											确定
										</button>
										<button class="button-cel" @click="IsShowOnSaleAllModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 起售全部商品 -->

					<!-- 起售全部商品 -->
					<div class="modal-mask" v-if="IsShowUnSaleAllModal">
						<div class="modal-wrapper">
							<div class="modal-container">

								<div class="modal-header">
									<slot name="header">
										<i class="icon-tishi"></i><span>商品停售</span>
									</slot>
								</div>

								<div class="modal-body">
									<slot name="body">
										<p>请确认是否将“全部商品”停售!</p>
									</slot>
								</div>

								<div class="modal-footer">
									<slot name="footer">
										<button class="button-ok" @click="_unSaleAll">
											确定
										</button>
										<button class="button-cel" @click="IsShowUnSaleAllModal = false">
											取消
										</button>
									</slot>
								</div>

							</div>
						</div>
					</div>
					<!-- 起售全部商品 -->

					<div class="pm">
						<div class="pm-breadcrumbnav">
							<ol class="breadcrumb">
								<span>当前位置：</span>
								<li><a>商品管理</a></li>
								<li class="active">在售/停售商品</li>
							</ol>
						</div>
						<div class="pm-tab">
							<div class="title">
								<span :class="part == '在售商品'? 'active':''" @click="_ClickOnSale">在售商品</span>
								<span :class="part == '停售商品'? 'active':''" @click="_ClickUnSale">停售商品</span>
							</div>
							<div class="criteria">
								<div>
									<span> 商品分类：</span>
									<select>
										<option>--请选择--</option>
										<option></option>
										<option></option>
									</select>
									<select>
										<option>--请选择--</option>
										<option></option>
										<option></option>
									</select>
									<select>
										<option>--请选择--</option>
										<option></option>
										<option></option>
									</select>
								</div>
								<div>
									<span>可见：</span>
									<select>
										<option>--请选择--</option>
										<option>完全公开</option>
										<option>不完全公开</option>
									</select>
								</div>
								<div>
									<span>商品名称：</span>
									<input type="text" />
								</div>
								<div>
									<span>停售时间：</span>
									<input type="text" />
								</div>
								<div>
									<button type="submit" class="btn">查找</button>
								</div>
							</div>
						</div>
						<div class="pm-body">
							<div v-show="part == '在售商品'" class="pm-body-onsale">
								<div class="title clearfix">
									<div class="col-md-1 trim-col">
										<input type="checkbox" />
									</div>
									<div class="col-md-1 trim-col">序号</div>
									<div class="col-md-2 trim-col">商品分类</div>
									<div class="col-md-2 trim-col">商品名称</div>
									<div class="col-md-1 trim-col">库存</div>
									<div class="col-md-1 trim-col">可见</div>
									<div class="col-md-2 trim-col">停售时间</div>
									<div class="col-md-2 trim-col">操作</div>
								</div>

								<div class="detail clearfix">
									<div class="col-md-1 trim-col">
										<input type="checkbox" />
									</div>
									<div class="col-md-1 trim-col">1</div>
									<div class="col-md-2 trim-col">女装/女士精品>裤子>休闲裤</div>
									<div class="col-md-2 trim-col">百搭休闲健身运动裤</div>
									<div class="col-md-1 trim-col">25500</div>
									<div class="col-md-1 trim-col">完全公开</div>
									<div class="col-md-2 trim-col">
										<p>2016-08-24</p>
										<p>15:40:25</p>
									</div>
									<div class="col-md-2 trim-col">
										<button class="btn-link" @click="_showUnSaleModal">停售</button>
										<button class="btn-link">编辑</button>
										<button class="btn-link">取消推荐</button>
									</div>
								</div>

								<div class="some">
									<input type="checkbox"/>
									<span>全选</span>
									<button class="btn" @click="_showUnSaleAllModal">停售</button>
									<button class="btn-link">设为推荐</button>
									<button class="btn-link">取消推荐</button>
								</div>
								<CkPagination></CkPagination>
								<div class="clearfix"></div>
							</div>
							<div v-show="part == '停售商品'" class="pm-body-unsale">
								<div class="title clearfix">
									<div class="col-md-1 trim-col">
										<input type="checkbox" />
									</div>
									<div class="col-md-1 trim-col">序号</div>
									<div class="col-md-2 trim-col">商品分类</div>
									<div class="col-md-2 trim-col">商品名称</div>
									<div class="col-md-1 trim-col">库存</div>
									<div class="col-md-1 trim-col">可见</div>
									<div class="col-md-2 trim-col">停售时间</div>
									<div class="col-md-2 trim-col">操作</div>
								</div>

								<div class="detail clearfix">
									<div class="col-md-1 trim-col">
										<input type="checkbox" />
									</div>
									<div class="col-md-1 trim-col">1</div>
									<div class="col-md-2 trim-col">女装/女士精品>裤子>休闲裤</div>
									<div class="col-md-2 trim-col">百搭休闲健身运动裤</div>
									<div class="col-md-1 trim-col">25500</div>
									<div class="col-md-1 trim-col">完全公开</div>
									<div class="col-md-2 trim-col">2016-08-2415:40:25</div>
									<div class="col-md-2 trim-col">
										<button class="btn-link" @click="_showOnSaleModal">起售</button>
										<button class="btn-link">编辑</button>
										<button class="btn-link" @click="_showDelModal">删除</button>
									</div>
								</div>

								<div class="some">
									<input type="checkbox"/>
									<span>全选</span>
									<button class="btn" @click="_showOnSaleAllModal">起售</button>
									<button class="btn-link" @click="_showDelAllModal">删除</button>
								</div>
								<CkPagination></CkPagination>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<FC></FC>
	</div>
</template>

<script>
	import Vue from 'vue'
	import SCH from 'components/SellerCenterHeader'
	import SCS from 'components/SellerCenterSideBar'
	import CkPagination from 'components/CkPagination'
	import FC from 'components/footer'

	export default{
		data(){
			return{
				part:'在售商品',
				IsShowDelModal: false,
				IsShowOnSaleModal: false,
				IsShowUnSaleModal:false,
				IsShowDelAllModal: false,
				IsShowOnSaleAllModal: false,
				IsShowUnSaleAllModal: false
			}
		},
		components:{
			SCH,
			SCS,
			CkPagination,
			FC
		},
		methods: {
			_ClickOnSale(){
				this.part='在售商品'
			},
			_ClickUnSale(){
				this.part='停售商品'
			},
			_showDelModal(){
				this.IsShowDelModal = true
			},
			_showOnSaleModal(){
				this.IsShowOnSaleModal = true
			},
			_showUnSaleModal(){
				this.IsShowUnSaleModal = true
			},
			_showDelAllModal(){
				this.IsShowDelAllModal = true
			},
			_showOnSaleAllModal(){
				this.IsShowOnSaleAllModal = true
			},
			_showUnSaleAllModal(){
				this.IsShowUnSaleAllModal = true
			},
			_delPro(){
				this.IsShowDelModal = false
			},
			_onSale(){
				this.IsShowOnSaleModal = false
			},
			_unSale(){

			},
			_onSaleAll(){

			},
			_unSaleAll(){

			}
		},
		mounted(){

		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/seller_productmanage.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>