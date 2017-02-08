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
      <div :class="{'da_active' : default_addr == addrIndex}" v-on:click="DefaultAddr($event)" :data-id="addrIndex" v-for="(addrItem, addrIndex) in this.data">
        <i :class="{'icon-dibiao' : default_addr == addrIndex}"></i>
        <input v-bind:id="addrIndex" name="radio" type="radio">
        <label v-bind:for="addrIndex">
          <span>{{addrItem.state}}</span>
          <span>{{addrItem.city}}</span>
          <span>{{addrItem.area}}</span>
          <span>{{addrItem.address}}</span>
          <span>{{addrItem.zipcode}}</span>
          <span>（{{addrItem.receiver_name}}收</span>
          <span>{{addrItem.mobile}}</span>
          <span>{{addrItem.phone}}）</span>
          <span v-bind:style="{'display':default_addr == addrIndex?'inline-block':'none'}"><a href="#" @click="setaddr_default(addrIndex)">默认地址</a></span>
          <span><a @click="openEditModal(addrIndex,addrItem.id,addrItem.state,addrItem.city,addrItem.area)">修改地址</a></span>
          <span><a @click="openDelModal(addrIndex,addrItem.id)">删除</a></span>
        </label>
      </div>
			<!--<div :class="{'da_active' : default_addr == 0}" v-on:click="DefaultAddr($event)" data-id="0">
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
					<span><a @click="showEditAddrModal = true">修改地址</a></span>
					<span><a @click="showDelModal = true">删除</a></span>
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
					<span><a @click="showDelModal = true">删除</a></span>
				</label>
			</div>-->
		</div>

		<!--  vue-Modal for del -->
		<div class="delmodal-mask" v-if="showDelModal">
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
							<p>收货地址：{{data[add_index].state}} {{data[add_index].city}} {{data[add_index].area}} {{data[add_index].location}}{{data[add_index].zipcode}}</p>
							<p>收货人：{{data[add_index].receiver_name}}</p>
							<p>联系电话：{{data[add_index].mobile}}</p>
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							<button class="button-ok" @click="del">
								确定
							</button>
							<button class="button-cel" @click="showDelModal = false">
								取消
							</button>
						</slot>
					</div>

				</div>
			</div>
		</div>
		<!--  vue-Modal for del -->

		<!--  vue-Modal for Edit Address -->
		<div class="editaddrmodal-mask" v-if="showEditAddrModal">
			<div class="modal-wrapper">
				<div class="modal-container">

					<div class="modal-header">
						<slot name="header">
							<span>收货地址修改</span>
						</slot>
					</div>
					<form action="" @submit="_submitEdit($event)">
						<div class="modal-body">
							<slot name="body">
								<div>
									<p>
										<i class="icon-tishi"></i>电话号码、手机号码选填一项，其余均为必填项
									</p>
								</div>
								<div>
									<span>*</span>
									<span>所在地区<i class="_5em"></i>:</span>
                  <select v-model="default_stateId" name="state" @change="_selState">
                    <option :value="item.state_id" v-for="(item, index) in states" >{{item.state}}</option>
                  </select>
                  <select v-model="default_cityId" name="city" @change="_selCity">
                    <option :value="item.city_id" v-for="(item, index) in cities" >{{item.city}}</option>
                  </select>
                  <select v-model="default_areaId" name="area">
                    <option :value="item.region_id" v-for="(item, index) in areas" >{{item.region}}</option>
                  </select>
								</div>
								<div>
									<span>*</span>
									<span>详细地址<i class="_5em"></i>:</span>
									<input type="text" name="address" v-model="data[add_index].address">
								</div>
								<div>
									<span>*</span>
									<span>邮政编码<i class="_5em"></i>:</span>
									<input type="text" name="zipcode" v-model="data[add_index].zipcode">
								</div>
								<div>
									<span><i class="_5em"></i></span>
									<span>收货人姓名 :</span>
									<input type="text" name="receiver_name" v-model="data[add_index].receiver_name">
								</div>
								<div>
									<span><i class="_5em"></i></span>
									<span>手机号码<i class="_5em"></i>:</span>
									<input type="text" name="mobile" v-model="data[add_index].mobile">
								</div>
								<div>
									<span><i class="_5em"></i></span>
									<span>电话号码<i class="_5em"></i>:</span>
									<input type="text" name="phone" v-model="data[add_index].phone">
								</div>
								<div>
									<div @click="_editAddrDef">
                    <i class="icon-weixuan" v-show="!editaddr_default"></i>
                    <i class="icon-xuanze" v-show="editaddr_default"></i>
										<span>设置为默认地址</span>
									</div>
								</div>
							</slot>
						</div>
						<div class="modal-footer">
							<slot name="footer">
								<button type="submit" class="button-ok">
									确定
								</button>
								<button type="button" class="button-cel" @click="showEditAddrModal = false">
									关闭
								</button>
							</slot>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!--  vue-Modal for Edit Address -->

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
					<form action="" @submit="_submit($event)">
						<div>
							<span>*</span>
							<span>所在地区<i class="_5em"></i>:</span>
							<select v-model="default_stateId" name="state" @change="_selState">
								<option :value="item.state_id" v-for="(item, index) in states" >{{item.state}}</option>
							</select>
							<select v-model="default_cityId" name="city" @change="_selCity">
								<option :value="item.city_id" v-for="(item, index) in cities" >{{item.city}}</option>
							</select>
							<select v-model="default_areaId" name="area">
								<option :value="item.region_id" v-for="(item, index) in areas" >{{item.region}}</option>
							</select>
						</div>
						<div>
							<span>*</span>
							<span>详细地址<i class="_5em"></i>:</span>
							<input type="text" name="address">
						</div>
						<div>
							<span>*</span>
							<span>邮政编码<i class="_5em"></i>:</span>
							<input type="text" name="zipcode">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>收货人姓名 :</span>
							<input type="text" name="receiver_name">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>手机号码<i class="_5em"></i>:</span>
							<input type="text" name="mobile">
						</div>
						<div>
							<span><i class="_5em"></i></span>
							<span>电话号码<i class="_5em"></i>:</span>
							<input type="text" name="phone">
						</div>
						<div>
							<div @click="_newAddrDef">
								<i class="icon-weixuan" v-show="!newaddr_default"></i>
								<i class="icon-xuanze" v-show="newaddr_default"></i>
								<span @click="_newAddrDef">设置为默认地址</span>
							</div>
						</div>
						<div>
							<button type="submit">保存</button>
							<button @click="_closeNewAddrDiv($event)">取消</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
const fto = require('form_to_object')
Vue.use(fto)

export default{
	data(){
		return{
			newaddr_default: false,
			editaddr_default: false,
			newaddr: false,
			default_addr: true,
			showDelModal: false,
			showEditAddrModal: false,
	        data:[],
	        add_index: Number,
	        addr_id: Number,
	        states:[],
	        cities:[],
	        areas:[],
	        default_stateId:'',
	        default_cityId:'',
	        default_areaId:'',
	        state:'',
	        city:'',
	        area:'',
	        zipcode:'',
	        receiver_name:'',
	        mobile:'',
	        phone:''
		}
	},
	components:{

	},
	methods:{
		_closeNewAddrDiv(e){
			e.preventDefault()
			this.newaddr = false
		},
		_newAddrDef(){
			this.newaddr_default = !this.newaddr_default
		},
		_editAddrDef(){
			this.editaddr_default = !this.editaddr_default
		},
		_submit (e){
			var me = this
			e.preventDefault()
			var newaddrdata = fto(e.target)
			newaddrdata.default = me.newaddr_default
			newaddrdata.user_id = 1
			for(var i = 0 ; i < this.states.length ; i ++){
				console.log(this.states[i].state_id)
				if(newaddrdata.state == this.states[i].state_id){
					newaddrdata.state = this.states[i].state
				}
			}
			for(var j = 0 ; j < this.cities.length ; j ++){
				if(newaddrdata.city == this.cities[j].city_id){
					newaddrdata.city = this.cities[j].city
				}
			}
			for(var k = 0 ; k < this.areas.length ; k ++){
				if(newaddrdata.area == this.areas[k].region_id){
					newaddrdata.area = this.areas[k].region
				}
			}
			if(!newaddrdata.address){
				alert('详细地址不能为空')
				return false
			}
			if(!newaddrdata.receiver_name){
				alert('收货人姓名不能为空')
				return false
			}
			if(!/^\d{6}$/.test(newaddrdata.zipcode)){
				alert('邮政编码必须是6位数字')
				return false
			}
			if(!/^1\d{10}$/.test(newaddrdata.mobile)){
				alert('手机号码格式不正确')
				return false
			}
			this.$http.post('/api/addresses',{'address':newaddrdata})
			.then(
				function(res){
					console.log(res)
				},function(err){
					console.log(err)
				}
			)
			window.location.reload()
		},
		_submitEdit(e){
			var me = this
			e.preventDefault()
			var editaddrdata = fto(e.target)
			editaddrdata.default = me.newaddr_default
			editaddrdata.user_id = 1
			for(var i = 0 ; i < this.states.length ; i ++){
				console.log(this.states[i].state_id)
				if(editaddrdata.state == this.states[i].state_id){
					editaddrdata.state = this.states[i].state
				}
			}
			for(var j = 0 ; j < this.cities.length ; j ++){
				if(editaddrdata.city == this.cities[j].city_id){
					editaddrdata.city = this.cities[j].city
				}
			}
			for(var k = 0 ; k < this.areas.length ; k ++){
				if(editaddrdata.area == this.areas[k].region_id){
					editaddrdata.area = this.areas[k].region
				}
			}
			if(!editaddrdata.address){
				alert('详细地址不能为空')
				return false
			}
			if(!editaddrdata.receiver_name){
				alert('收货人姓名不能为空')
				return false
			}
			if(!/^\d{6}$/.test(editaddrdata.zipcode)){
				alert('邮政编码必须是6位数字')
				return false
			}
			if(!/^1\d{10}$/.test(editaddrdata.mobile)){
				alert('手机号码格式不正确')
				return false
			}
			console.log(editaddrdata)
			this.$http.put('/api/addresses/'+this.data[this.add_index].id,{'address':editaddrdata})
			.then(
				function(res){
					console.log(res)
				},function(err){
					console.log(err)
				}
			)
			this.showEditAddrModal = false
			window.location.reload()
		},
		openDelModal(i,n){
			this.showDelModal = true
			this.add_index = i
			this.addr_id = n
			console.log(i)
		},
		openEditModal(i,n,state,city,area){
			this.showEditAddrModal = true
			this.add_index = i
			this.addr_id = n
			this.$http.get('/api/states')
			.then(
				function(res){
					this.states = res.data.data
					console.log(this.states)
					for(var j = 0; j< this.states.length; j++){
						if(this.states[j].state == state){
							this.default_stateId = this.states[j].state_id
						}
					}
					this.$http.get('/api/cities?state_id='+this.default_stateId)
					.then(
						function(res){
							this.cities = res.data.data
							console.log(this.cities)
							for(var k = 0 ; k < this.cities.length ; k ++){
								if(this.cities[k].city == city){
									this.default_cityId = this.cities[k].city_id
								}
							}
							this.$http.get('/api/regions?city_id='+this.default_cityId)
							.then(
								function(res){
									this.areas = res.data.data
									console.log(this.areas)
									for(var m = 0 ; m < this.areas.length ; m ++){
										console.log(this.areas[m].region)
										if(this.areas[m].region == area){
											this.default_areaId = this.areas[m].region_id
										}
									}
								},function(err){
									console.log(err)
								}
							)
						},function(err){
							console.log(err)
						}
					)
				},function(err){
					console.log(err)
				}
			)
		},
		del () {
			console.log(this.addr_id)
			this.$http.delete('/api/addresses/'+ this.addr_id)
			.then(
				function(res){
					console.log('删除成功')
				},function(err){
					console.log('删除失败')
				}
			)

			this.showDelModal = false
			window.location.reload()
		},
		DefaultAddr (e){
			var parentNode = ''
			if(e.target.nodeName == "LABEL" || e.target.nodeName == "INPUT"){
				parentNode = e.target.parentNode
			}else if(e.target.nodeName == "SPAN"){
				parentNode = e.target.parentNode.parentNode
			}else if(e.target.nodeName == "A"){
				parentNode = e.target.parentNode.parentNode.parentNode
			}else{
				parentNode = e.target
			}
        	this.default_addr = true;
			var _id = parentNode.getAttribute("data-id")
			this.default_addr = _id
			this.newaddr = false
		},
		add_addr (){
			this.newaddr = true

			this.$http.get('/api/states')
			.then(
				function(res){
					console.log(res)
					this.states = res.data.data
					this.default_stateId = this.states[0].state_id
					this.$http.get('/api/cities?state_id='+this.default_stateId)
					.then(
						function(res){
							console.log(res)
							this.cities = res.data.data
							this.default_cityId = this.cities[0].city_id
							this.$http.get('/api/regions?city_id='+this.default_cityId)
							.then(
								function(res){
									console.log(res)
									this.areas = res.data.data
									this.default_areaId = this.areas[0].region_id
								},function(err){
									console.log(err)
								}
							)
						},function(err){
							console.log(err)
						}
					)
				},function(err){
					console.log(err)
				}
			)
		},
		_selState(){
			this.$http.get('/api/cities?state_id='+this.default_stateId)
			.then(
				function(res){
					this.cities = res.data.data
					this.default_cityId = this.cities[0].city_id
					this.$http.get('/api/regions?city_id='+this.default_cityId)
					.then(
						function(res){
							this.areas = res.data.data
							this.default_areaId = this.areas[0].region_id
						},function(){
						
						}
					)
				},function(err){
					console.log(err)
				}
			)
		},
		_selCity(){
			this.$http.get('/api/regions?city_id='+this.default_cityId)
			.then(
				function(res){
					console.log(res)
					this.areas = res.data.data
					this.default_areaId = this.areas[0].region_id
				},function(err){
					console.log(err)
				}
			)
		},
		setaddr_default(t){
			this.$http.patch('/api/addresses/'+this.data[t].id,{'address':{'default':true}})
			.then(
				function(res){
					console.log(res)
				},function(err){
					console.log(err)
				}
			)
		}
	},
	mounted(){
		this.$http.get('/api/addresses/')
		.then(
			function(res){
				this.data = res.data.data
				this.default_addr = this.data.default
			},function(err){
				console.log(err)
			}
		)
	}
}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/orderconfirm.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>
