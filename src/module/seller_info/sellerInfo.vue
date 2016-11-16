<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/SellerInfo.less';
</style>

<template>
	<div id="sellerInfo">
		<SellerCenterHeader></SellerCenterHeader>
		<div class="container marketInfo">
			<div class="row">
				<div class="col-md-2">
					<SellerCenterSideBar></SellerCenterSideBar>
				</div>
				<div class="col-md-10">
					<div class="marketInfo-container">
						<div class="marketInfo-container-title">
							<span>当前位置：账户管理 ></span> 商家资料
						</div>
						<div class="marketInfo-container-data">
							<div class="col-md-6 marketInfo-container-data-left">
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
							<div class="col-md-6 marketInfo-container-data-right">
								<div>
									<img v-if="!image" src="../../assets/images/userImg.jpg" alt="头像">
									<img v-if="image" :src="image" alt="头像">
									<p @click="openModal">编辑头像</p>
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
			<div v-if="showModal" class="modal-mask">
		    <div class="modal-wrapper">
		      <div class="modal-container">
		        <div class="modal-header">
		        	<slot name="body">
		          	编辑头像
		        	</slot>
		        	<span class="icon-cha" @click="closeModal"></span>
		        </div>

		        <div class="modal-body">
		          <slot name="body">
		            <button data_img="close" @click="chooseImg($event)"><span class="icon-iconfont-tupianku"></span>选择照片</button><br>
								<button data_img="shooting" @click="chooseImg($event)"><span class="icon-iconfont-xiangji"></span>拍摄照片</button>
								<input style="display:none" ref="changeImg" type="file" accept="image/*" @change="changeImg($event)">
		          </slot>
		        </div>

		        <div class="modal-footer">
		          <slot name="footer">
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
	import SellerCenterHeader from 'components/SellerCenterHeader'
	import footerComponent from 'components/footer'
	import SellerCenterSideBar from 'components/SellerCenterSideBar'
	export default {
	  data () {
	    return {
	      showModal: false,
	      image: '',
	      imageUrl: ''
	    }
	  },
	  methods: {
	  	openModal () {
	  		this.showModal = true
	  	},
	  	closeModal () {
	  		this.showModal = false
	  	},
	  	chooseImg (e) {
	  		this.showModal = false
	  		if(e.target.getAttribute('data_img') == 'close'){
	  			this.$refs.changeImg.click()
	  		}
	  	},
	  	changeImg (e) {
	  		var target = e.target
	  		var reg = /(\.jpg|\.png)$/ig
	  		if(!reg.test(target.value)){
	  			alert('请选择 JPG 或者 PNG 格式的图片')
					return
	  		}
	  		if(target.files[0]){
	  			var me = this
	  			var reader = new FileReader()
	  			reader.onload = function(e){
	  				me.image = e.target.result
	  				me.imageUrl = target.files[0]
	  			}
	  		}
	  		reader.readAsDataURL(target.files[0])
	  	}
	  },
	 	components: {
	 		footerComponent,
	 		SellerCenterHeader,
	 		SellerCenterSideBar
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->