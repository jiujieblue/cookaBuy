<template>
	<div class="orderdetail-box">
		<div class="title">订单详情</div>
		<div class="daifa-box" v-if="daifaList.length != 0">
			<div class="daifa-box-top">代发</div>
			<div class="daifa-box-body">
				<table class="daifa_tb">
					<tr>
						<td>商品</td>
						<td>规格</td>
						<td>单价(元)</td>
						<td>数量</td>
						<td>商品总价(元)</td>
						<td>代发服务费</td>
						<td>小计</td>
					</tr>
				</table>
				<div class="shop" v-for="(daifaItem, daifaIndex) in daifaList">
					<div class="shop-title">
						<span>SHOP</span>
						<span>{{daifaItem.store_name}}</span>
						<span>{{daifaItem.location}}&nbsp;({{daifaItem.mobile}})</span>
					</div>
					<div class="shop-body" >
						<table class="shop_tb">
							<tr v-for="(daifaCart, daifaCartIndex) in daifaItem.cart">
								<td>
									<div class="img">
										<img :src="daifaCart.pic_url" alt="">
									</div>
									<span>{{daifaCart.title}}</span>
									<span>货号：8634</span>
								</td>
								<td>{{daifaCart.pro_name}}</td>
								<td>{{daifaCart.origin_price}}</td>
								<td>{{daifaCart.num}}</td>
								<td>90.00</td>
								<td>10.00</td>
								<td>100.00</td>
							</tr>
						</table>
					</div>
					<div class="shop-footer">
						<div>配送服务：代发</div>
					</div>
				</div>
				<div class="peisong">
					<div class="peisong-left">
						<div class="way">
							<span>配送方式：</span>
							<select name="" id="">
								<option value="">中通快递：¥7.00</option>
								<option value="">圆通快递：¥7.00</option>
								<option value="">顺丰快递：¥7.00</option>
							</select>
						</div>
						<div class="comment">
							<span>订单留言：</span>
							<textarea name="" id="" cols="70" rows="4" placeholder="最多输入100个字"></textarea>
							<div>您的特殊要求需要跟商家确认一致，否则视为无效。</div>
						</div>
					</div>
					<div class="peisong-right">
						<div class="tip">
							<div>运费：7.00元<i class="icon-wenhao"></i></div>
							<div class="tip-modal">
								<div class="square"></div>
								<div class="triangle"></div>
								<div class="content">运费费率：首重7.00元/公斤，续重3.00元/公斤</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="shangjiafahuo-box" v-if="fahuoList != 0">
			<div class="shangjiafahuo-box-top">商家发货</div>
			<div class="shangjiafahuo-box-body">
				<table class="shangjiafahuo_tb">
					<tr>
						<td>商品</td>
						<td>规格</td>
						<td>单价(元)</td>
						<td>数量</td>
						<td>商品总价(元)</td>
						<td>代发服务费</td>
						<td>小计</td>
					</tr>
				</table>
				<div class="order" v-for="(fahuoItem, fahuoIndex) in fahuoList">
					<div class="order-title">
						<span>SHOP</span>
						<span>{{fahuoItem.store_name}}</span>
						<span>{{fahuoItem.location}}&nbsp;(&nbsp;{{fahuoItem.mobile}}&nbsp;)</span>
					</div>
					<div class="order-body">
						<table class="order_tb">
							<tr v-for="(fahuoCart, fahuoCartIndex) in fahuoItem.cart">
								<td>
									<div class="img">
										<img :src="fahuoCart.pic_url" alt="">
									</div>
									<span>{{fahuoCart.title}}</span>
									<span>货号：8634</span>
								</td>
								<td>{{fahuoCart.pro_name}}</td>
								<td>{{fahuoCart.origin_price}}</td>
								<td>{{fahuoCart.num}}</td>
								<td>90.00</td>
								<td>————</td>
								<td>100.00</td>
							</tr>
						</table>
						<div class="peisong">
							<div class="peisong-left">
								<div class="way">
									<span>配送方式：</span>
									<select name="" id="">
										<option value="">快递：¥7.00</option>
										<option value="">平邮：¥7.00</option>
										<option value="">EMS：¥7.00</option>
									</select>
								</div>
								<div class="comment">
									<span>订单留言：</span>
									<textarea name="" id="" cols="70" rows="4" placeholder="最多输入100个字"></textarea>
									<div>您的特殊要求需要跟商家确认一致，否则视为无效。</div>
								</div>
							</div>
							<div class="peisong-right">
								<div class="tip">
									<div>运费：7.00元<i class="icon-wenhao"></i></div>
									<div class="tip-modal">
										<div class="square"></div>
										<div class="triangle"></div>
										<div class="content">运费费率：首重7.00元/公斤，续重3.00元/公斤</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		data(){
			return{
        list:[],
        part:'',
        daifaList: [],
        fahuoList: []
			}
		},
		components:{

		},
		methods:{

		},
		mounted(){
      this.list = JSON.parse(localStorage.getItem('list'))
      console.log(this.list)
      for(var i = 0 ; i < this.list.length ; i ++){
        if(this.list[i].send==2) {
          this.part = '商家发货'
          this.fahuoList.push(this.list[i])
        }
        else{
          this.daifaList.push(this.list[i])
        }
      }
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/orderconfirm.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>
