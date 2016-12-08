<template>
	<div class="mpbind">
		<div class="mpbind-breadcrumbnav">
			<ol class="breadcrumb">
				<span>当前位置：</span>
				<li><a>账号管理</a></li>
				<li><a>账户安全</a></li>
				<li class="active">修改绑定手机</li>
			</ol>
		</div>
		<div class="mpbind-step">
			<div class="num1 activenum">
				<span>1</span>
			</div>
			<span>选择修改方式</span>
			<div v-bind:class="['dottedline',step >= 2 ? 'activeline':'']"></div>
			<div v-bind:class="['num2',step >= 2 ? 'activenum':'']">
				<span>2</span>
			</div>
			<span>修改手机</span>
			<div v-bind:class="['dottedline',step >= 3 ? 'activeline' : '']"></div>
			<div v-bind:class="['ok',step >= 3 ? 'activenum':'']">
				<span>√</span>
			</div>
			<span>完成</span>
		</div>
		<hr class="ck-hr" />
		
			
		<div class="mpbind-way" v-show="step == 1">
			<span>
				<strong>修改方式：</strong>
			</span>
			<div class="form">
				<form>
					<div>
						<input type="radio" name="radio" id="radio1" @click="_MPBChooseWayone"/><label for="radio1" @click="_MPBChooseWayone">通过原手机号码修改</label>
					</div>
					<div>
						<input type="radio" name="radio" id="radio2" @click="_MPBChooseWaytwo"/><label for="radio2" @click="_MPBChooseWaytwo">通过支付密码修改</label>
					</div>
				</form>
			</div>
			<button v-show="step == 1" class="btn nextbtn" @click="_NextStep">下一步</button>
		</div>


		<div v-show="step == 2">
			<div v-show="way =='通过原手机号码修改'" class="mpbind-phoneset">
				<form @submit="_Submit">
					<div>
						<span>原手机号码：</span>
						<span>{{result}}</span>
					</div>
					<div>
						<span>验<i class="_5em"></i><i class="_5em"></i>证<i class="_5em"></i><i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入验证码" name="vc" />
						<button type="button" class="btn" :disabled="disablebtn" @click="_GetVC">获取验证码<span v-show="disablebtn">({{time}}s)</span></button>
						
					</div>
					<div>
						<span>新手机号码：</span>
						<input type="text" placeholder="请输入新手机号码" name="newmp"/>
					</div>
					<hr class="ck-hr" />
					<div v-show="step == 2" class="steptwobtn">
						<button class="btn prevbtn" @click="_PreviousStep">上一步</button>
						<button type="submit" class="btn tijiaobtn">提交</button>
					</div>
				</form>
			</div>

			<div v-show="way =='通过支付密码修改'" class="mpbind-zhifuset">
				<form @submit="_Submit">
					<div>
						<span>支<i class="_5em"></i>付<i class="_5em"></i>密<i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入支付密码" name="zhifupwd" />
					</div>
					<div>
						<span>新手机号码<i class="_5em"></i>：</span>
						<input type="text" placeholder="请输入新手机号码" name="newmp" />
					</div>
					<hr class="ck-hr" />
					<div v-show="step == 2" class="steptwobtn">
						<button class="btn prevbtn" @click="_PreviousStep">上一步</button>
						<button type="submit" class="btn tijiaobtn">提交</button>
					</div>
				</form>
			</div>
		</div>
		<div v-show="step == 3" class="mpbind-done">
			<div class="img">
				<span class="icon-zhifuchenggong"></span>
			</div>
			<div class="text">
				<p>设置成功</p>
				<p>您已成功绑定新手机号码！</p>
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
				time:60,
				error:'',
				type:'',
				disablebtn: false,
				type:'',
				result: '',
				paymentPassword:'',
				newMobile:'',
				txtmsg:''
			}
		},
		components:{

		},
		mounted(){

		},
		methods: {
			_GetVC:function(e){
				this.disablebtn=true
				var timer = setInterval(this._Countdown, 1000);
			},
			_Countdown:function(){
				this.time = --this.time
				if (this.time <= 0) {
					clearInterval(this.timer);
					this.time = 60
					this.disablebtn = false
				}
			},
			_NextStep:function(e){
				this.step = ++this.step,
				this.type = this.type
			},
			_PreviousStep:function(e){
				e.preventDefault();
				this.step = --this.step
			},
			_Submit:function(e){
				console.log(e.target)
				e.preventDefault();
				console.log(123);
				var data = fto(e.target);
				console.log(data);
				if(this.way == '通过原手机号码修改'){
					if (!data.newmp) {
						alert('手机号码不能为空')
						return false;
					}
					if(!(/^1[\d]{10}$/.test(data.newmp))){
						alert('手机号码格式不正确')
						return false;
					}
					if (!data.vc){
						alert('验证码不能为空')
						return false;
					}
					if (!(/^[\d]{6}$/.test(data.vc))){
						alert('验证码格式不正确')
						return false;
					}
					// var q = {
					// 	type:me.state.type,
					// 	newMobile:data.newmp,
					// 	txtmsg:data.vc
					// }
					// Buyer_MobilePhoneBindUtil.resetMyMobile(q,function(res){
					// 	if(res.result == 'txtmsg_not_right'){
					// 		me.setState({
					// 			error:'验证码错误'
					// 		});
					// 	}
					// 	if(res.result == 'ok'){
					// 		me.setState({
					// 			error:''
					// 		});
					// 	}
					// });
					else{
						this.step = ++this.step
					}
				}
				if(this.way == '通过支付密码修改'){
					if(!data.zhifupwd){
						alert('支付密码不能为空')
						return false;
					}else if(!(/^[\d]{6}$/.test(data.zhifupwd))){
						alert('支付密码格式不正确')
						return false;
					}
					if(!data.newmp){
						alert('新手机号码不能为空')
						return false;
					}else if(!(/^1[\d]{10}$/.test(data.newmp))){
						alert('新手机号码格式不正确')
						return false;
					}
					else{
						this.step = ++this.step
					}
					console.log(data.zhifupwd + ',' + data.newmp)
				}
			},
			_MPBChooseWayone:function(){
				this.way='通过原手机号码修改'
				this.type='mobile'
			},
			_MPBChooseWaytwo:function(){
				this.way = '通过支付密码修改',
				this.type = 'password'
			}
		}
	}
</script>
	
<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/buyer_accountsecurity_editbindphone.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>