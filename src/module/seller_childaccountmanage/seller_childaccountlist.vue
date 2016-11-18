<template>
	<div>
		<SCH></SCH>
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<SCS></SCS>
				</div>
				<div class="col-md-10 trim-col">
					<div class="cam">
						<div class="cam-breadcrumbnav">
							<ol class="breadcrumb">
								<span>当前位置：</span>
								<li><a>账户管理</a></li>
								<li class="active">子账户管理</li>
							</ol>
						</div>

						<!-- 子账户列表 -->
						<div class="cam-calist" v-if="false">
							<div class="title">
								<span>子账户列表</span>
								<button class="btn">添加子账户</button>
							</div>
							<div class="clearfix"></div>
							<div class="listbody">
								<table>
									<tr>
										<td>序号</td>
										<td>子账号</td>
										<td>添加时间</td>
										<td>角色</td>
										<td>状态</td>
										<td>操作</td>
									</tr>
									<tr>
										<td>1</td>
										<td>12312312312</td>
										<td>2016-08-19 <span>15:36</span></td>
										<td>商品管理员</td>
										<td>启用</td>
										<td>
											<button class="btn-link" @click="_changeStatus">停用</button>
											<button class="btn-link">修改</button>
										</td>
									</tr>
									<tr>
										<td>2</td>
										<td>12312312312</td>
										<td>2016-08-19 <span>15:36</span> </td>
										<td>商品管理员</td>
										<td>停用</td>
										<td>
											<button class="btn-link">启用</button>
											<button class="btn-link">修改</button>
										</td>
									</tr>
								</table>
							</div>
						</div>

						<!-- 停用/启用 Modal -->
						<div class="modal-mask" v-if="IsShowModal">
							<div class="modal-wrapper">
								<div class="modal-container">

									<div class="modal-header">
										<slot name="header">
											<i class="icon-tishi"></i><span>状态更改</span>
										</slot>
									</div>

									<div class="modal-body">
										<slot name="body">
											<p>请确认是否将子账户12312312312</p>
											<p>启用</p>
										</slot>
									</div>

									<div class="modal-footer">
										<slot name="footer">
											<button class="button-ok" @click="_ok">
												确定
											</button>
											<button class="button-cel" @click="_cel">
												取消
											</button>
										</slot>
									</div>

								</div>
							</div>
						</div>
						
						<!-- 添加 子账户 -->
						<div class="cam-add_ac">
							<div class="title">添加子账号</div>
							<div class="body">
								<div class="left">
									<div>
										<span>手机号：</span>
										<input type="text">
									</div>
									<div>
										<span>姓<i class="em"></i>名：</span>
										<input type="text">
									</div>
									<div>
										<span>账<i class="em"></i>号：</span>
										<input type="text">
									</div>
									<div class="dottedline"></div>
									<div>
										<span>密<i class="em"></i><i class="em"></i>码：</span>
										<input type="text">
									</div>
									<div>
										<span>确认密码：</span>
										<input type="text">
									</div>
									<div class="dottedline"></div>
									<div>
										<span>角<i class="em"></i>色：</span>
										<input type="text">
									</div>
								</div>
								<div class="right">
									<div class="right-title">
										权限
									</div>
									<div>
										<table class="tb_one">
											<tr>
												<td>账户管理</td>
												<td>商品管理</td>
												<td>物流管理</td>
											</tr>
											<tr>
												<td>
													<div>
														<input type="checkbox">
														<span>商家资料查看</span>
													</div>
													<div>
														<input type="checkbox">
														<span>子账户列表查看</span>
													</div>
													<div>
														<input type="checkbox">
														<span>子账户安全</span>
													</div>
												</td>
												<td>
													<div>
														<input type="checkbox">
														<span>一键同步</span>
													</div>
													<div>
														<input type="checkbox">
														<span>商品上传</span>
													</div>
													<div>
														<input type="checkbox">
														<span>在售/停售商品</span>
													</div>
												</td>
												<td>
													<div>
														<input type="checkbox">
														<span>运费模板设置</span>
													</div>
												</td>
											</tr>
										</table>
									</div>
									<div>
										<table class="tb_one">
											<tr>
												<td>交易中心</td>
												<td>我的钱包</td>
												<td>其他</td>
											</tr>
											<tr>
												<td>
													<div>
														<input type="checkbox">
														<span>我的订单</span>
													</div>
													<div>
														<input type="checkbox">
														<span>快捷支付单查看</span>
													</div>
													<div>
														<input type="checkbox">
														<span>会员管理</span>
													</div>
												</td>
												<td>
													<div>
														<input type="checkbox">
														<span>钱包余额</span>
													</div>
													<div>
														<input type="checkbox">
														<span>交易明细</span>
													</div>
												</td>
												<td>
													<div>
														<input type="checkbox">
														<span>公告消息</span>
													</div>
													<div>
														<input type="checkbox">
														<span>帮助中心</span>
													</div>
												</td>
											</tr>
										</table>
									</div>
								</div>
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
	import FC from 'components/footer'

	export default{
		data(){
			return{
				IsShowModal:false
			}
		},
		components:{
			SCH,
			SCS,
			FC
		},
		methods: {
			_changeStatus(){
				this.IsShowModal = true
			},
			_ok(){
				this.IsShowModal = false
			},
			_cel(){
				this.IsShowModal = false
			}
		},
		mounted(){

		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/seller_childaccountlist.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>