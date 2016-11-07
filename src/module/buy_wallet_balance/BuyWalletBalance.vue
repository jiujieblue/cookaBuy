<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyWalletBalance.less';
</style>

<template>
<div id='buyWalletBalance'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container'>
	  	<div class="row">
	  		<div class="col-md-2">
	  			<BuyerCenterSideBar></BuyerCenterSideBar>
	  		</div>
	  		<div class="buyWalletBalance col-md-10">
	  			<div class="row buyWalletBalance-container">
		  			<div class="buyWalletBalance-container-top">
		  				<div class="buyWalletBalance-container-top-title">
		  					<span>当前位置：我的钱包></span>钱包余额
		  				</div>
		  				<div class="buyWalletBalance-container-top-info">
		  					<ul>
		  						<li>
		  							<ul>
		  								<li>
		  									<a href=""><img src="../../assets/images/user.gif" alt="买家头像"></a>
		  									郑思远
		  								</li>
			  							<li :class="[shimingyanzheng ? 'beenset' : 'notset']">
				  							<link class="icon-shimingyanzheng" />
				  							未实名验证
			  							</li>
			  							<li :class="[zhifumima ? 'beenset' : 'notset']">
				  							<link class="icon-zhifumima" />
				  							未设置支付密码
			  							</li>
			  							<li :class="[bangdingshouji ? 'beenset' : 'notset']">
				  							<link class="icon-bangdingshouji" />
				  							已绑定手机
			  							</li>
		  							</ul>
		  						</li>
		  						<li>
		  							<ul>
		  								<li>
		  									<span>我的余额：<b>0.00</b>元</span><a>提现记录</a>
		  								</li>
		  								<li>
				  							<button>提<span class="em"></span>现</button>
				  							<button>去<span class="em_2"></span>付<span class="em_2"></span>款</button>
		  								</li>
		  							</ul>
		  						</li>
		  						<li>
		  							<ul>
		  								<li style="display:none">
		  									<link class="icon-xianjingquan"/>现金券<span>0</span>张
		  								</li>
		  								<li style="display:none">
		  									<link class="icon-youhuiquan"/>店铺优惠券<span>4</span>张
		  								</li>
		  								<li>
		  									<link class="icon-yinghangka"/>银行卡<span>2</span>张
		  								</li>
		  							</ul>
		  						</li>
		  					</ul>
		  				</div>
		  				<div class="buyWalletBalance-container-top-detail">
		  					<h4>交易明细</h4>
		  					<table>
		  						<tr>
		  							<td>	
			  							时间范围：
			  							<input type="date">--
			  							<input type="date">
		  							</td>
		  							<td>
			  							订单号：
			  							<input type="text">
		  							</td>
		  							<td>
		  								<button>搜<span class="em"></span>索</button>
		  								<button>导<span class="em"></span>出</button>
		  							</td>
		  							<td>
			  							<select name="">
			  								<option value="">最近一个月</option>
			  								<option value="">最近三个月</option>
			  								<option value="">最近半年</option>
			  							</select>
		  							</td>
		  						</tr>
		  					</table>
		  				</div>
		  			</div>
		  			<div class="buyWalletBalance-container-list">
		  				<table>
		  					<tr>
		  						<th>时间</th>
		  						<th>订单</th>
		  						<th>类型</th>
		  						<th>订单金额</th>
		  						<th>收入/支出</th>
		  						<th>支付方式</th>
		  					</tr>
		  					<tr>
		  						<td>2016-06-15 10:15</td>
		  						<td>236646546161616</td>
		  						<td>快捷支付-时尚潮流批发</td>
		  						<td>1000.00</td>
		  						<td>-950.00</td>
		  						<td>微信支付</td>
		  					</tr>
		  					<tr>
		  						<td>2016-06-15 10:15</td>
		  						<td>236646546161616</td>
		  						<td>快捷支付-时尚潮流批发</td>
		  						<td>1000.00</td>
		  						<td>-950.00</td>
		  						<td>微信支付</td>
		  					</tr>
		  				</table>
		  			</div>
	  			</div>
	  			<CkPagination pages=10 pageNum=1 nextPage=2></CkPagination>
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
	import CkPagination from 'components/CkPagination'
	export default {
	  data () {
	    return {
	    	shimingyanzheng: false,
	    	zhifumima: false,
	    	bangdingshouji: true
	    }
	  },
	  mounted () {

	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar,
	  	CkPagination
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->