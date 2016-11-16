<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyBankcardManagement.less';
</style>

<template>
<div id='buyBankcardManagement'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class="container buyBankcardManagement">
		<div class="row">
				<div class="col-md-2">
					<BuyerCenterSideBar></BuyerCenterSideBar>
				</div>
				<div class="col-md-10">
					<div class="buyBankcardManagement-right">
						<div class="buyBankcardManagement-right-title"><span>当前位置：我的钱包 > </span>银行卡管理</div>
						<div class="buyBankcardManagement-right-card">
							<p>我的银行卡</p>
							<ul>
								<li>
									<ul>
										<li>
											<img src="../../assets/images/bankCard_js.png"/>
											<span>储存卡</span>
										</li>
										<li>
											****<i class="em"></i>****<i class="em"></i>****<i class="em"></i>5555
										</li>
										<li><span @click="_del">删除此卡</span></li>
									</ul>
								</li>
								<li>
									<span>+</span>
									添加银行卡
									<i @click="_openModel"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
		</div>
		<div v-if="showModal" class="modal-mask">
	    <div class="modal-wrapper">
	      <div class="modal-container">
	        <div class="modal-header">
	        	<slot name="body">
	          	<link rel="stylesheet" class="icon-tishi" v-if="!isadd">{{ isadd ? '添加银行卡' : '提示' }}
	          	<link rel="stylesheet" class="icon-cha" @click="_delOrClear" v-else>
	        	</slot>
	        </div>

	        <div class="modal-body">
	          <slot name="body">
	            <p v-if="!isadd">确定要删除此卡</p>
	            <ul v-else>
	            	<li>
	            		<label for="issuer">开户银行：</label>
	            		<select id="issuer" name="issuer">
			            	<option value="" v-for="(card,index) in cards">{{ index }}</option>
			            </select>
	            	</li>
	            	<li>
	            		<label for="userName">真实姓名：</label>
	            		<input type="text" id="userName">
	            	</li>
	            	<li>
	            		<label for="bankaccount">银行账号：</label>
	            		<input type="text" id="bankaccount">
	            		<span>该银行卡开户名需跟真实名字一致，否则将体现失败</span>
	            	</li>
	            </ul>
	          </slot>
	        </div>

	        <div class="modal-footer">
	          <slot name="footer">
	          	<div v-if="!isadd">
		          	<button @click="_delOrClear" class="cancel">取<span class="em"></span>消</button>
		          	<button @click="_delOrClear(1)">确<span class="em"></span>定</button>
	          	</div>
	          	<div class="add_bank" v-else>
	          		<button @click="_delOrClear(1)">保存账户</button>
	          	</div>
	          </slot>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	<footerComponent></footerComponent>
</div>
</template>

<script>
	import Vue from 'vue'
	import BuyerCenterHeader from 'components/BuyerCenterHeader'
	import footerComponent from 'components/footer'
	import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
	export default {
	  data () {
	    return {
	    	showModal: false,
	    	isadd: true,
	    	cards: {
					'中国银行':'bankCard_zg',
					'招商银行':'bankCard_zs',
					'中信银行':'bankCard_zx',
					'广东农信':'bankCard_gdnx',
					'广州农商银行':'bankCard_gzns',
					'中国建设银行':'bankCard_js',
					'平安银行':'bankCard_pa',
					'广发银行':'bankCard_gf',
					'广州银行':'bankCard_gz',
					'广州农商':'bankCard_gzns',
					'华夏银行':'bankCard_hx',
					'中国光大银行':'bankCard_zggd',
					'中国工商银行':'bankCard_zggs',
					'中国民生银行':'bankCard_zgms',
					'中国农业银行':'bankCard_zgny',
					'中国邮政储蓄银行':'bankCard_zgyzcx'
				}
	    }
	  },
	  mounted () {

	  },
	  methods: {
	  	_del () {
	  		this.showModal = true
	  		this.isadd = false
	  	},
	  	_openModel () {
	  		this.showModal = true
	  		this.isadd = true
	  	},
	  	_delOrClear (e) {
	  		this.showModal = false
	  		if(e == 1){
	  			console.log('del')
	  		}
	  	}
	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->