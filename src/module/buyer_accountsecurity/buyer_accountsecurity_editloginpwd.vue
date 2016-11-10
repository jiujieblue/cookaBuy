<template>
	<div class="esip">
		<div class="esip-breadcrumbnav">
			<ol class="breadcrumb">
				<span>当前位置：</span>
				<li><a>账号管理</a></li>
				<li><a>账户安全</a></li>
				<li class="active">设置登录密码</li>
			</ol>
		</div>
		<div class="esip-step">
			<div class="num1 activenum">
				<span>1</span>
			</div>
			<span>选择修改方式</span>
			<div v-bind:class="['dottedline',step >= 2 ? 'activeline':'']"></div>
			<div v-bind:class="['num2',step >= 2 ? 'activenum':'']">
				<span>2</span>
			</div>
			<span>修改登录密码</span>
			<div v-bind:class="['dottedline',step >= 3 ? 'activeline' : '']"></div>
			<div v-bind:class="['ok',step >= 3 ? 'activenum':'']">
				<span>√</span>
			</div>
			<span>完成</span>
		</div>
		<hr class="ck-hr" />
		<div class="esip-way" v-show="step == 1">
			<span>
				<strong>修改方式：</strong>
			</span>
			<div class="form">
				<form>
					<div>
						<input type="radio" name="radio" id="radion1" @click="_ESIPChooseWayone"/><label for="radion1" @click="_ESIPChooseWayone">通过原密码修改</label>
					</div>
					<div>
						<input type="radio" name="radio" id="radion2" @click="_ESIPChooseWaytwo"/><label for="radion2" @click="_ESIPChooseWaytwo">通过手机重置修改</label>
					</div>
				</form>
			</div>
			<button v-show="step == 1" class="btn nextbtn" @click="_NextStep">下一步</button>
		</div>


		<div v-show="step==2">
			<div v-show="way =='通过原密码修改'" class="esip-pwdset">
				<form @submit="_Submit">
					<div>
						<span>原<i class="_5em"></i><i class="_5em"></i>密<i class="_5em"></i><i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入原密码" name="pwd" />
					</div>
					<div>
						<span>新<i class="_5em"></i><i class="_5em"></i>密<i class="_5em"></i><i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入新密码" name="newpwd" />
						<span>6~20个字符，可由中英文、数字、"-"组成</span>
					</div>
					<div>
						<span>确认新密码：</span>
						<input type="text" placeholder="请再次输入新密码" name="confirmnewpwd"/>
					</div>
					<div v-show="step == 2" class="steptwobtn">
						<button class="btn prevbtn" @click="_PreviousStep">上一步</button>
						<button type="submit" class="btn tijiaobtn">提交</button>
					</div>
				</form>
				<hr class="ck-hr" />
			</div>

			<div v-show="way =='通过手机重置修改'" class="esip-phoneset">
				<form @submit="_Submit">
					<div>
						<span>原手机号码：</span>
						<span>15966678910</span>
					</div>
					<div>
						<span>验<i class="_5em"></i><i class="_5em"></i>证<i class="_5em"></i><i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入验证码" name="vc" />
						<button type="button" class="btn" :disabled="disablebtn" @click="_GetVC">获取验证码<span v-show="disablebtn">({{time}}s)</span></button>
					</div>
					<div>
						<span>新<i class="_5em"></i><i class="_5em"></i>密<i class="_5em"></i><i class="_5em"></i>码：</span>
						<input type="text" placeholder="请输入新密码" name="newpwd"/>
					</div>
					<div>
						<span>确认新密码：</span>
						<input type="text" placeholder="请再次输入新密码" name="confirmnewpwd"/>
					</div>
					<div v-show="step == 2" class="steptwobtn">
						<button class="btn prevbtn" @click="_PreviousStep">上一步</button>
						<button type="submit" class="btn tijiaobtn">提交</button>
					</div>
				</form>
				<hr class="ck-hr" />
			</div>

		</div>
		<div v-show="step == 3" class="esip-done">
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
					this.time = 60
				}
			},
			_NextStep:function(){
				this.step = ++this.step
				this.type = this.type
			},
			_PreviousStep:function(e){
				e.preventDefault();
				this.step = --this.step
			},
			_Submit:function(e){
				e.preventDefault();
				var data = fto(e.target);
				console.log(data);
				if(this.way == '通过原密码修改'){
					if (!data.pwd) {
						alert( '原密码不能为空')
						return false;
					}else if(!/^[\w]{6,20}$/.test(data.newpwd)){
						alert( '原密码格式不正确')
						return false;
					}
					if (!data.newpwd){
						alert( '新密码不能为空')
						return false;
					}else if(!/^[\w]{6,20}$/.test(data.newpwd)){
						alert( '新密码格式不正确')
						return false;
					}
					if (data.confirmnewpwd !== data.newpwd){
						alert( '两次密码输入不一致')
						return false;
					}
					else{
						this.step = ++this.step
					}
					console.log(data.pwd+','+data.newpwd+','+data.confirmnewpwd)
				}
				if(this.way == '通过手机重置修改'){
					if (!data.vc){
						alert( '验证码不能为空')
						return false;
					}
					if (!(/^[\d]{6}$/.test(data.vc))){
						alert( '验证码格式不正确')
						return false;
					}
					if (!data.newpwd){
						alert( '新密码不能为空')
						return false;
					}else if(!/^[\w]{6,20}$/.test(data.newpwd)){
						alert( '新密码格式不正确')
						return false;
					}
					if (!data.confirmnewpwd){
						alert( '确认密码不能为空')
						return false;
					}
					if(data.confirmnewpwd !== data.newpwd){
						alert( '两次密码输入不一致')
						return false;
					}
					else{
						console.log(111)
						this.step = ++this.step
					}
					console.log(data.pwd+','+data.newpwd+','+data.confirmnewpwd)
				}
			},
			_ESIPChooseWayone:function(){
				this.way = '通过原密码修改',
				this.type = 'mobile'
			},
			_ESIPChooseWaytwo:function(){
				this.way = '通过手机重置修改',
				this.type = 'password'
			}
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/buyer_accountsecurity_editloginpwd.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>