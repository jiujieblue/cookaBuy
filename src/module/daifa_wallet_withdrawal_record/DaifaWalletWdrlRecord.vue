<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/DaifaWalletWdrlRecord.less';
</style>

<template>
<div id='daifaWalletWdrlRecord'>
	<DaifaCenterHeader></DaifaCenterHeader>
	<div class='container'>
	  	<div class="row">
	  		<div class="col-md-2">
	  			<DaifaSideBar></DaifaSideBar>
	  		</div>
	  		<div class="daifaWalletWdrlRecord col-md-10">
	  			<div class="row daifaWalletWdrlRecord-container">
		  			<div class="daifaWalletWdrlRecord-container-top">
		  				<div class="daifaWalletWdrlRecord-container-top-title">
		  					<span>当前位置：我的钱包></span>钱包余额
		  				</div>
		  				<div class="daifaWalletWdrlRecord-container-top-find">
		  					<ul>
		  						<li>
		  							时间范围：
		  							<input type="date"> --
		  							<input type="date">
		  						</li>
		  						<li>
		  							流水号：
		  							<input type="text">
		  						</li>
		  						<li>
	  								交易类型：
		  							<select name="">
		  								<option value="">全部</option>
		  								<option value="">快捷支付</option>
		  								<option value="">商城订单</option>
		  							</select>
		  						</li>
		  					</ul>
		  				</div>
		  				<div class="daifaWalletWdrlRecord-container-top-detail">
		  					<ul>
		  						<li>
		  							<button>查<span class="em"></span><span class="em_5"></span>找</button>
		  						</li>
		  						<li>2016-05-30 至 2016-06-02</li>
		  						<li>收入总金额：<span>5050.00元</span></li>
		  						<li>支出总金额：<span>5050.00元</span></li>
		  					</ul>
		  				</div>
		  			</div>
		  			<div class="daifaWalletWdrlRecord-container-list">
		  				<table>
		  					<tr>
		  						<th>序号</th>
		  						<th>交易时间</th>
		  						<th>交易类型</th>
		  						<th>流水号</th>
		  						<th>金额</th>
		  						<th>收入/支出</th>
		  					</tr>
		  					<tr>
		  						<td>1</td>
		  						<td>2016-06-15 10:15</td>
		  						<td>提现</td>
		  						<td>236646546161616</td>
		  						<td>1000.00</td>
		  						<td>支出</td>
		  					</tr>
		  					<tr>
		  						<td>2</td>
		  						<td>2016-06-15 10:15</td>
		  						<td>提现</td>
		  						<td>236646546161616</td>
		  						<td>1000.00</td>
		  						<td>支出</td>
		  					</tr>
		  					<tr>
		  						<td>3</td>
		  						<td>2016-06-15 10:15</td>
		  						<td>提现</td>
		  						<td>236646546161616</td>
		  						<td>1000.00</td>
		  						<td>支出</td>
		  					</tr>
		  					<tr>
		  						<td>4</td>
		  						<td>2016-06-15 10:15</td>
		  						<td>提现</td>
		  						<td>236646546161616</td>
		  						<td>1000.00</td>
		  						<td>支出</td>
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
	import DaifaCenterHeader from 'components/DaifaCenterHeader'
	import footerComponent from 'components/footer'
	import DaifaSideBar from 'components/DaifaSideBar'
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
	  	DaifaCenterHeader,
	  	footerComponent,
	  	DaifaSideBar,
	  	CkPagination
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->