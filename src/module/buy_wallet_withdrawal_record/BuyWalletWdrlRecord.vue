<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyWalletWdrlRecord.less';
</style>

<template>
<div id='buyWalletWdrlRecord'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container'>
	  	<div class="row">
	  		<div class="col-md-2">
	  			<BuyerCenterSideBar></BuyerCenterSideBar>
	  		</div>
	  		<div class="buyWalletWdrlRecord col-md-10">
	  			<div class="row buyWalletWdrlRecord-container">
		  			<div class="buyWalletWdrlRecord-container-top">
		  				<div class="buyWalletWdrlRecord-container-top-title">
		  					<span>当前位置：我的钱包></span>钱包余额
		  				</div>
		  				<div class="buyWalletWdrlRecord-container-top-record">
		  					<p>提现记录</p>
		  					<ul>
		  						<li>可提现余额：<span>641.21</span>元</li>
		  						<li>已提现余额：<span>50</span>元</li>
		  					</ul>
		  				</div>
		  				<div class="buyWalletWdrlRecord-container-top-detail">
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
		  			<div class="buyWalletWdrlRecord-container-list">
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