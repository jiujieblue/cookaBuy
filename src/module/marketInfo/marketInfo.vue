<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/marketInfo.less';
</style>

<template>
	<div id="app">
		<div id='marketInfo'>
			<div style="text-align:center;margin: 50px 0;">
				<h1>我是商家</h1>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-2">
						侧边栏
					</div>
					<div class="col-md-10 marketInfo">
						<div class="row marketInfo-title">
							<span>当前位置：账户管理 ></span> 商家资料
						</div>
						<div class="row marketInfo-data">
							<div class="col-md-6 marketInfo-data-left">
								<ul>
									<li>
										<span>店铺名称：</span>
										<input type="text" value="七匹狼专卖店">
									</li>
									<li>
										<span>市场位置：</span>
										广东广州
									</li>
									<li>
										<span>市场名称：</span>
										<select name="" value='长城'>
											<option>新潮都</option>
											<option>长运</option>
											<option>灏丰</option>
											<option>长城</option>
										</select>
									</li>
									<li>
										<span>楼层：</span>
										<select name="" value='3'>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											<option>6</option>
											<option>7</option>
											<option>8</option>
											<option>9</option>
											<option>10</option>
										</select>
									</li>
									<li>
										<span>档口号：</span>
										<input type="text" value="155323">
									</li>
									<li>
										<span>主营类目：</span>
										<select name="" value='家具'>
											<option>女装</option>
											<option>男装</option>
											<option>童装</option>
											<option>家具</option>
										</select>
									</li>
									<li>
										<span>店主姓名：</span>
										刘亦菲
									</li>
									<li>
										<span>联系电话：</span>
										<input type="text" value="18826421373">
									</li>
									<li>
										<span>商家服务：</span>
										<input type="checkbox" value="df" id="df">
										<label for="df">代发</label>
										<input type="checkbox" value="djfh" id="djfh">
										<label for="djfh">店家发货</label>
										<input type="checkbox" value="zt" id="zt">
										<label for="zt">自提</label>
									</li>
									<li>
										<span></span>
										<button>保<span class="em"></span>存</button>
									</li>
								</ul>
							</div>
							<div class="col-md-6 marketInfo-data-right">
								<div>
									<div>
										<img src="../../assets/images/userImg.jpg" alt="">
										<a href="">编辑头像</a>
									</div>
									<ul>
										<li>用户名称：18826421373</li>
										<li>店主姓名：刘亦菲</li>
										<li>市场位置：广东广州</li>
									</ul>
								</div>
							</div>
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
	import footerComponent from 'components/footer'
	import goTop from 'components/goTop'
	export default {
	  data () {
	    return {
	      
	    }
	  },
	  methods: {
	  	
	  },
	 	components: {
	 		footerComponent
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->