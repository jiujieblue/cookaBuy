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
	  			<div class="daifaWalletWdrlRecord-container">
		  			<div class="daifaWalletWdrlRecord-container-top">
		  				<div class="daifaWalletWdrlRecord-container-top-title">
		  					<span>当前位置：我的钱包></span>钱包余额
		  				</div>
		  				<div class="daifaWalletWdrlRecord-container-top-find">
		  					<ul>
		  						<li>
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
									      :sep="calendar.sep"
									      @setShow="set_show"
									      @setValue="set_value">

									    </calendar>
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
	  mounted () {

	  },
	  methods: {

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
	    set_value (val) {
	    	if(this.calendar.picker == 'picker1' && new Date(val) <= new Date(this.calendar.items.picker2.value) || 
	    		this.calendar.picker == 'picker2' && new Date(val) >= new Date(this.calendar.items.picker1.value) ||
	    		this.calendar.picker == 'picker1' && !this.calendar.items.picker2.value ||
	    		this.calendar.picker == 'picker2' && !this.calendar.items.picker1.value){
	    		
	      	this.calendar.items[this.calendar.picker].value = val
	    	}
	    },
	    set_show () {
	    	this.calendar.show = false
	    }
	  },

	  components: {
	  	DaifaCenterHeader,
	  	footerComponent,
	  	DaifaSideBar,
	  	CkPagination,
	  	Calendar
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->