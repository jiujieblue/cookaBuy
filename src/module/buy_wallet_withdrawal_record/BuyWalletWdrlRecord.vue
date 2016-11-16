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
	  			<div class="buyWalletWdrlRecord-container">
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
			  							<input class="calendar-input" size="50" type="text" @click.stop="open($event,'picker1')" :value="calendar.items.picker1.value" placeholder="请选择日期"> --
			  							<input class="calendar-input" size="50" type="text" @click.stop="open($event,'picker2')" :value="calendar.items.picker2.value" placeholder="请选择日期">
			  							<!-- 日历插件 -->
									    <calendar
									      :show.sync="calendar.show"
									      :type="calendar.type"
									      :value.sync="calendar.value"
									      :x="calendar.x"
									      :y="calendar.y"
									      :begin.sync="calendar.begin"
									      :end.sync="calendar.end"
									      :range.sync="calendar.range"
									      :weeks="calendar.weeks"
									      :months="calendar.months"
									      :sep="calendar.sep"
									      @setShow="set_show"
									      @setValue="set_value">

									    </calendar>
		  							</td>
		  							<td>
			  							订单号：
			  							<input type="text">
		  							</td>
		  							<td>
		  								<button @click="aa">搜<span class="em"></span>索</button>
		  								<button>导<span class="em"></span>出</button>
		  							</td>
		  							<td>
			  							<select name="" @change="setDate">
			  								<option value="0">选择时间</option>
			  								<option value="1">最近一个月</option>
			  								<option value="3">最近三个月</option>
			  								<option value="6">最近半年</option>
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
	import BuyerCenterHeader from 'components/BuyerCenterHeader'
	import footerComponent from 'components/footer'
	import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
	import CkPagination from 'components/CkPagination'
	import Calendar from 'components/Calendar'

	export default {
	  data () {
	    return {
	    	shimingyanzheng: false,
	    	zhifumima: false,
	    	bangdingshouji: true,

	      calendar:{
	        show: false,
	        x: 0,
	        y: 0,
	        picker: "",
	        type: "date",
	        value: "",
	        begin: "",
	        end: "",
	        range: false,
	        items: {
	          // 单选模式
	          picker1:{
	            type: "date",
	            begin: "",
	            end: "",
	            value: (new Date()).toLocaleDateString()
	          },
	          picker2:{
	            type: "date",
	            begin: "",
	            end: "",
	            value: (new Date()).toLocaleDateString()
	          }
	        }
	      }
	    }
	  },
	  methods: {
	  	aa () {
	  		console.log($('.calendar-input')[0].value)
	  	},
	  	setDate (e) {
	  		var val = e.target.value
	  		if(val !=0 ){
	  			this.calendar.items.picker1.value = this._setData(new Date(),-val)
	  			this.calendar.items.picker2.value = (new Date()).toLocaleDateString()
	  		}
	  	},
			_setData (time,n) {
				var y=time.getFullYear();
				var m=(time.getMonth()+1)<10?('0'+(time.getMonth()+1)):(time.getMonth()+1);
				var d=time.getDate()<10?('0'+time.getDate()):time.getDate();
				time = new Date(y,m-1+parseInt(n),d);
				y=time.getFullYear();
				m=(time.getMonth()+1)<10?('0'+(time.getMonth()+1)):(time.getMonth()+1);
				d=time.getDate()<10?('0'+time.getDate()):time.getDate();
				return y+'/'+m+'/'+d;
			},

			// 日历函数
	  	open(e,type) {
      	// 设置类型
	      this.calendar.picker = type
	      this.calendar.type = this.calendar.items[type].type
	      this.calendar.range = this.calendar.items[type].range
	      this.calendar.value = this.calendar.items[type].value
	      this.calendar.show = true
	      // 日历动画
	      this.calendar.x = e.target.offsetLeft
	      this.calendar.y = e.target.offsetTop+e.target.offsetHeight+8
	    },
	    set_show () {
	      this.calendar.show = false
	    },
	    set_value (val) {
	    	if(this.calendar.picker == 'picker1' && new Date(val) <= new Date(this.calendar.items.picker2.value) || 
	    		this.calendar.picker == 'picker2' && new Date(val) >= new Date(this.calendar.items.picker1.value) ||
	    		this.calendar.picker == 'picker1' && !this.calendar.items.picker2.value ||
	    		this.calendar.picker == 'picker2' && !this.calendar.items.picker1.value){
	      	this.calendar.items[this.calendar.picker].value = val
	    	}
	    }

	  },
	  computed : {
	  	pickerOptions () {
        return {
		　　　disabledDate(time){
	  				var val = document.getElementsByClassName('el-date-editor__editor')[0].value
	  				console.log(new Date(val))
          	return time.getTime() < new Date(val).getTime() - 8.64e7
          }
        }
    	}
	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar,
	  	CkPagination,
	  	Calendar
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->