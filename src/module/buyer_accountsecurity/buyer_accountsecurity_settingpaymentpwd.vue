<template>
	<div class="pps">
		<div class="pps-breadcrumbnav">
			<ol class="breadcrumb">
				<span>当前位置：</span>
				<li><a>账号管理</a></li>
				<li><a>账户安全</a></li>
				<li class="active">设置支付密码</li>
			</ol>
		</div>
		<div class="pps-step">
			<div class="num1 activenum">
				<span>1</span>
			</div>
			<span>手机验证</span>
			<div v-bind:class="['dottedline',step >= 2 ? 'activeline':'']"></div>
			<div v-bind:class="['num2',step >= 2 ? 'activenum':'']">
				<span>2</span>
			</div>
			<span>设置秘密</span>
			<div v-bind:class="['dottedline',step >= 3 ? 'activeline' : '']"></div>
			<div v-bind:class="['ok',step >= 3 ? 'activenum':'']">
				<span>√</span>
			</div>
			<span>完成</span>
		</div>
		<hr class="ck-hr" />

		<div class="pps-phoneset" v-show="step == 1">
			<form @submit="_SubmitForm1">
				<div>
					<span>原手机号码：</span>
					<span>15966678910</span>
				</div>
				<div>
					<span>验<i class="_5em"></i><i class="_5em"></i>证<i class="_5em"></i><i class="_5em"></i>码：</span>
					<input type="text" placeholder="请输入验证码" name="vc" />
					<button type="button" class="btn" :disabled="disablebtn" @click="_GetVC">获取验证码<span v-show="disablebtn">({{time}}s)</span></button>
				</div>
				<button type="submit" v-show="step == 1" class="btn nextbtn">下一步</button>
			</form>
			<hr class="ck-hr" />
		</div>



		<div v-show="step == 2" class="pps-pwdset">
			<form @submit="_SubmitForm2">
				<div>
					<span>支付密码：</span>
					<input type="text" placeholder="请输入新密码" name="zhifupwd" />
					<span>6~20个字符，可由中英文、数字、"-"组成</span>
				</div>
				<div>
					<span>确认密码：</span>
					<input type="text" placeholder="请再次输入新密码" name="confirmzhifupwd"/>
				</div>
				<div class="steptwobtn">
					<button type="submit" class="btn tijiaobtn">提交</button>
				</div>
			</form>
			<hr class="ck-hr" />
		</div>



		<div v-show="step == 3" class="pps-done">
			<div class="img">
				<span class="icon-zhifuchenggong"></span>
			</div>
			<div class="text">
				<p>设置成功</p>
				<p>您已成功设置支付密码，请牢记！</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import fto from 'form_to_object'

	export default{
		data(){
			return{
				step:1,
				way:'',
				time:120,
				error:'',
				disablebtn:false,
				type:''
			}
		},
		components:{

		},
		methods:{
			_GetVC:function(){
				this.disablebtn = true
				var timer = setInterval(this._Countdown, 1000);
			},
			_Countdown:function(e){
				this.time = --this.time
				if (this.time <= 0) {
					clearInterval(this.timer);
					this.time = 120
				}
			},
			_NextStep:function(){
				this.step = ++this.step
			},
			_PreviousStep:function(e){
				e.preventDefault();
				this.step = --this.step
			},
			_SubmitForm1:function(formone){
				formone.preventDefault();
				var data = fto(formone.target);
				console.log(data);
				if (!data.vc){
					alert( '验证码不能为空')
					return false;
				}
				if (!(/^[\d]{6}$/.test(data.vc))){
					alert( '验证码格式不正确')
					return false;
				}
				this.step = ++this.step
			},
			_SubmitForm2:function(formtwo){
				formtwo.preventDefault();
				var data = fto(formtwo.target);
				console.log(data);
				if(!data.zhifupwd){
					alert('支付密码不能为空')
					return false;
				}
				if(!(/^[\d]{6}$/.test(data.zhifupwd))){
					alert( '支付密码格式不正确')
					return false;
				}
				if (!data.confirmzhifupwd){
					alert( '确认密码不能为空')
					return false;
				}
				if(data.confirmzhifupwd !== data.zhifupwd){
					alert( '两次密码输入不一致')
					return false;
				}
				this.step = ++this.step
			}
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/buyer_accountsecurity_settingpaymentpwd.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>