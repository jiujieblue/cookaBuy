<template>
	<div>
		<BCH></BCH>
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<BCS></BCS>
				</div>
				<div class="col-md-10 trim-left">
					<div class="accountsecuritylv" v-if="show == '账户安全等级'">
						<div class="accountsecuritylv-breadcrumbnav">
							<ol class="breadcrumb">
								<span>当前位置：</span>
								<li><a>账号管理</a></li>
								<li class="active">账户安全</li>
							</ol>
						</div>
						<div class="accountsecuritylv-lv">
							<div class="lvbody">
								<span><strong>您的安全等级：</strong></span>
								<span>中</span>
								<div class="lvline"></div><div class="lvline"></div><div class="lvline"></div><div></div><div></div><div></div>
								<span class="lvcircle">中</span>
							</div>
						</div>
						<hr class="ck-hr" />
						<div class="accountsecuritylv-bind">
							<div class="img">
								<span class="icon-shouji" />
							</div>
							<span>绑定手机</span>
							<div>
								<p>绑定手机后，您可以免费享受柯咔网的短信提示服务，同时可用于找回账号登录密码和支付密码</p>
								<p>已绑定手机：<strong>15914678910</strong></p>
							</div>
							<button type="button" class="btn" @click="_ClickPartOne">修 改</button>
						</div>
						<hr class="ck-hr" />
						<div class="accountsecuritylv-bind">
							<div class="img">
								<span class="icon-denglu" />
							</div>
							<span>登录密码</span>
							<div>
								<p>安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度6以上的密码</p>
								<p>密码强度：<strong>中</strong></p>
							</div>
							<button type="button" class="btn" @click="_ClickPartTwo">修 改</button>
						</div>
						<hr class="ck-hr" />
						<div class="accountsecuritylv-bind">
							<div class="img">
								<span class="icon-zhifu" />
							</div>
							<span>支付密码</span>
							<div>
								<p>安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度6以上的密码</p>
								<p></p>
							</div>
							<button type="button" class="btn" @click="_ClickPartThree">修 改</button>
						</div>
						<hr class="ck-hr" />
						<button class="btn">提交</button>
					</div>
					<EditBindPhone v-if="show == '修改绑定手机'"></EditBindPhone>
					<EditLoginPwd v-if="show == '修改登录密码'"></EditLoginPwd>
					<EditPaymentPwd v-if="show == '修改支付密码'"></EditPaymentPwd>
				</div>
			</div>
		</div>
		<FC></FC>
	</div>
</template>

<script>
	import Vue from 'vue'
	import BCH from 'components/BuyerCenterHeader'
	import BCS from 'components/BuyerCenterSideBar'
	import FC from 'components/footer'

	import EditBindPhone from './buyer_accountsecurity_editbindphone.vue'
	import EditLoginPwd from './buyer_accountsecurity_editloginpwd.vue'
	import EditPaymentPwd from './buyer_accountsecurity_settingpaymentpwd.vue'

	export default{
		data(){
			return{
				show: '账户安全等级'
			}
		},
		components:{
			BCH,
			BCS,
			FC,
			EditBindPhone,
			EditLoginPwd,
			EditPaymentPwd
		},
		mounted(){

		},
		methods: {
			_ClickPartOne () {
				this.show='修改绑定手机'
			},
			_ClickPartTwo () {
				this.show='修改登录密码'
			},
			_ClickPartThree () {
				this.show='修改支付密码'
			}
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/buyer_as_index.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>
