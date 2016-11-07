<template>
	<div class="receiptinfo-box">
		<div class="receiptinfo-box-top">
			<span class="title">
				收货信息
			</span>
			<span>
				<a href="#">管理收货地址</a>
			</span>
		</div>
		<div class="receiptinfo-box-addr">
			<div :class="{'da_active' : default_addr == 0}" v-on:click="DefaultAddr($event)" data-id="0">
				<i :class="{'icon-dibiao' : default_addr == 0}"></i>
				<input id="1" name="radio" type="radio">
				<label for="1">
					<span>广东省</span>
					<span>广州市</span>
					<span>白云区</span>
					<span>新市齐富路1525号</span>
					<span>510510</span>
					<span>（郑成功收</span>
					<span>12312312312</span>
					<span>0660-8601048）</span>
					<span v-bind:style="{'display':default_addr == 0?'inline-block':'none'}"><a href="#">默认地址</a></span>
					<span><a href="#">修改地址</a></span>
					<span><a @click="showModal = true">删除</a></span>
				</label>
			</div>
			<div :class="{'da_active' : default_addr == 1}" v-on:click="DefaultAddr($event)" data-id="1">
				<i :class="{'icon-dibiao' : default_addr == 1}"></i>
				<input id="2" name="radio" type="radio">
				<label for="2">
					<span>广东省</span>
					<span>广州市</span>
					<span>白云区</span>
					<span>新市齐富路1525号</span>
					<span>510510</span>
					<span>（郑成功收</span>
					<span>12312312312</span>
					<span>0660-8601048）</span>
					<span v-bind:style="{'display':default_addr == 1?'inline-block':'none'}"><a href="#">默认地址</a></span>
					<span><a href="#">修改地址</a></span>
					<span><a @click="showModal = true">删除</a></span>
				</label>
			</div>
		</div>

		<!--  vue-Modal -->
		<!-- <button type="button" id="show-modal" @click="showModal = true">Show Modal</button> -->
		<!-- use the modal component, pass in the prop -->
		<div class="modal-mask" v-if="showModal">
			<div class="modal-wrapper">
				<div class="modal-container">
		
					<div class="modal-header">
						<slot name="header">
							<i class="icon-tishi"></i><span>收货地址删除</span>
						</slot>
					</div>
		
					<div class="modal-body">
						<slot name="body">
							<p>请确认是否删除如下收货信息</p>
							<p>收货地址：广东省 广州市 白云区 新市齐富路1525号510510</p>
							<p></p>
							<p></p>
						</slot>
					</div>
		
					<div class="modal-footer">
						<slot name="footer">
								default footer
							<button class="modal-default-button" @click="showModal = false">
								OK
							</button>
						</slot>
					</div>
		
				</div>
			</div>
		</div>
		<!--  vue-Modal -->

		<div class="receiptinfo-box-newaddr">
			<div @click="add_addr">
				<div :class="[newaddr ? 'circle_active':'circle']">
					<div :class="[newaddr ? 'na_active':'']"></div>
				</div>
				<span>使用新地址（最多10个有效地址）</span>
			</div>
			<div class="newaddrdiv" v-if="newaddr">
				<div>
					<p>
						<span class="icon-tishi"></span>电话号码、手机号码选填一项，其余均为必填项
					</p>
				</div>
				<div class="formbody">
					<form action="">
						<div>
							<span>*</span>
							<span>所在地区<i class="_5em"></i>:</span>
							<select name="" id="">
								<option value="">广东省</option>
								<option value="">广东省</option>
								<option value="">广东省</option>
							</select>
							<select name="" id="">
								<option value="">广州市</option>
								<option value="">广州市</option>
								<option value="">广州市</option>
							</select>
							<select name="" id="">
								<option value="">越秀区</option>
								<option value="">越秀区</option>
								<option value="">越秀区</option>
							</select>
						</div>
						<div>
							<span>*</span>
							<span>详细地址<i class="_5em"></i>:</span>
							<input type="text">
						</div>
						<div>
							<span>*</span>
							<span>邮政编码<i class="_5em"></i>:</span>
							<input type="text">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>收货人姓名 :</span>
							<input type="text">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>手机号码<i class="_5em"></i>:</span>
							<input type="text">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>电话号码<i class="_5em"></i>:</span>
							<input type="text">
						</div>
						<div>
							<div v-on:click="set_default">
								<i class="icon-weixuan" :style="{'display':newaddr_default?'none':'inline-block'}"></i>
								<i class="icon-xuanze" :style="{'display':newaddr_default?'inline-block':'none'}"></i>
								<span>设置为默认地址</span>
							</div>
						</div>
						<div>
							<button type="submit">保存</button>
							<button>取消</button>
						</div>
					</form>
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
				newaddr_default:false,
				newaddr: false,
				default_addr: 0,
				showModal: false
			}
		},
		components:{

		},
		methods:{
			DefaultAddr:function(e){
				var parentNode = ''
				this.default_addr = true;
				if(e.target.nodeName == "LABEL" || e.target.nodeName == "INPUT"){
					parentNode = e.target.parentNode
				}else if(e.target.nodeName == "SPAN"){
					parentNode = e.target.parentNode.parentNode
				}else if(e.target.nodeName == "A"){
					parentNode = e.target.parentNode.parentNode.parentNode
				}else{
					parentNode = e.target
				}
				var _id = parentNode.getAttribute("data-id")
				this.default_addr = _id
				this.newaddr = false
			},
			add_addr:function(){
				this.newaddr = true
			},
			set_default:function(){
				this.newaddr_default = !this.newaddr_default
			}
		},
		mounted(){

		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/orderconfirm.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>