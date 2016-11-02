<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/SellerWithdrawal.less';
</style>

<template>
<div id='sellerWithdrawal'>
	<headerComponent></headerComponent>
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				侧边栏
			</div>
			<div class="col-md-10 sellerWithdrawal">
				<p class="row sellerWithdrawal-title">
					<span>当前位置：账户管理 ></span> 商家资料
				</p>
				<div class="row sellerWithdrawal-operation">
					<form>
						<ul>
							<li>
								<span>选择银行卡：</span>
								<div>
									<div ref="current">
										<img src="../../assets/images/bankCard_js.png" alt="银行卡">
										<span>尾号：4001</span>
										傻逼卡
									</div>
									<b @mouseover="chooseOver()" @mouseout="chooseOut()"></b>
									<i ref="transform"></i>
								</div>
								<ul ref="bankList" @mouseover="chooseOver()" @mouseout="chooseOut()">
									<li @click="chooseClick($event)">
										<img src="../../assets/images/bankCard_zggs.png" alt="银行卡">
										<span>尾号：8852</span>
										老人卡
									</li>
									<li @click="chooseClick($event)">
										<img src="../../assets/images/bankCard_zx.png" alt="银行卡">
										<span>尾号：4242</span>
										单身卡
									</li>
								</ul>
							</li>
							<li>
								<span></span>
								<button>添加银行卡</button>
							</li>
							<li>
								<label>提现金额：</label>
								<input type="text" placeholder="请输入金额" @blur="money($event)">
								<p ref="money">{{ moneyHtml }}</p>
							</li>
							<li>
								<label>支付密码：</label>
								<input type="text" placeholder="请输入支付密码" @blur="pwd($event)">
								<p ref="pwd">{{ pwdHtml }}</p>
							</li>
						</ul>
						<p><span>&lowast;</span>一千元以上不收手续费，低于一千元收两块钱手续费。视具体银行到账时间稍有延迟，请注意查收。</p>
						<p><button>提<span class="em"></span>交</button></p>
					</form>
				</div>
			</div>
		</div>
	</div>
	<goTop></goTop>
	<footerComponent></footerComponent>
</div>
</template>

<script>
	import Vue from 'vue'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import CkSearch from 'components/CkSearch'
	import goTop from 'components/goTop'
	export default {
	  data () {
	    return {
	      moneyHtml: '',
	      pwdHtml: ''
	    }
	  },
	  mounted () {

	  },
	  methods: {
	  	chooseOver () {
	  		$(this.$refs.transform).addClass('active')
	  		$(this.$refs.bankList).addClass('active')
	  	},
	  	chooseOut () {
	  		$(this.$refs.transform).removeClass('active')
	  		$(this.$refs.bankList).removeClass('active')
	  	},
	  	chooseClick (e) {
	  		if(e.target.nodeName !== "LI"){
	  			this.$refs.current.innerHTML = e.target.parentNode.innerHTML
	  		}else{
	  			this.$refs.current.innerHTML = e.target.innerHTML
	  		}
	  	},
	  	money (e) {
	  		var regM = /^\d+(.)*\d*$/;
	  		var val = e.target.value.replace(/\s*/g,'')
	  		if(!val){
	  			this.moneyHtml = '金额不能为空!'
	  		}else if(!regM.test(val)){
	  			this.moneyHtml = '请输入正确的金额数目!'
	  		}else if(parseInt(val)<20){
	  			this.moneyHtml = '提取金额不能小于20!'
	  		}else{
	  			this.moneyHtml = ''
	  		}
	  	},
	  	pwd (e) {
	  		var regP = /^[\w\W]{6,20}$/g;
	  		var val = e.target.value.replace(/\s*/g,'')
	  		if(!val){
	  			this.pwdHtml = '密码不能为空!'
	  		}else if(!regP.test(val)){
	  			this.pwdHtml = '密码长度不正确，请重新输入!'
	  		}else{
	  			this.pwdHtml = ''
	  		}
	  	}
	  },
	  components: {
	  	headerComponent,
	  	footerComponent,
	  	CkSearch,
	  	goTop
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->