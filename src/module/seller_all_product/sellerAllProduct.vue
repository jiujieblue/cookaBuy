<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/sellerAllProduct.less';
</style>
<template>
<div id='sellerAllProduct'>
	<div class="sellerAllProduct-header">
		<div class="sellerAllProduct-header-nav">
			<div class="container">
				<ul>
					<li>您好，欢迎光临柯咔商城！</li>
					<li><a href="">请登录</a> | <a href="">免费注册</a></li>
					<li><a href="">收藏本站</a></li>
					<li><a href="">商家入驻</a></li>
				</ul>
			</div>
		</div>
		<div class="row sellerAllProduct-header-info">
			<div class="container">
				<link rel="stylesheet" class="icon-guanzhudianjia">
				<ul>
					<li>
						<b>七匹狼专卖店</b>
						<button @click="subStor" v-if="true">+关注本店</button>
						<span v-if="false">已<span class="em_5"></span>关<span class="em_5"></span>注</span>
					</li>
					<li>
						<link rel="stylesheet" class="icon-shimingyanzheng">实名验证
						<link rel="stylesheet" class="icon-strenzheng">实体认证
					</li>
					<li>
						<link rel="stylesheet" class="icon-dizhi">广东省广州市 沙河区 灏丰批发市场 1202档
					</li>
				</ul>
				<p>
					<select name="">
						<option value="">商品</option>
					</select>
					<input type="text" placeholder="全场优惠活动火热进行中">
					<button>搜本店</button>
				</p>
			</div>
		</div>
	</div>
	<div class="container sellerAllProduct">
  	<div class="row sellerAllProduct-list">
  		<ul>
	    	<li class="active">全部商品</li>
	    	<li style="display:none">会员专区</li>
	    </ul>
	    <div>
	    	<p>
	    		<span>商品分类</span>
	    		<span>共520件相关商品</span>
	    	</p>
	    	<div>
	    		<span>女士/女士精品：</span>
		    	<ul ref="catsUl">
		    		<li v-for="(cat,index) in cats">
		    			<span>{{ cat.name }}</span>
		    		</li>
		    	</ul>
		    	<span v-on:mouseover="moreOver" v-on:mouseout="moreOut" id="more" v-if="isHeiBig" :class="{HeiBig : isHeiBig}">更多</span>
	    	</div>
	    </div>
  	</div>
    <nav class="row sellerAllProduct-nav">
    	<ul>
    		<li v-if="false">销量<i></i></li>
    		<li :class="{active : paixuRules.slice(parseInt(paixuRules.indexOf('_'))+1) == 'list'}" @click="sorting($event,'list','price',0)">上新时间<i :class="{sorting : list}"></i></li>
    		<li :class="{active : paixuRules.slice(parseInt(paixuRules.indexOf('_'))+1) == 'price'}" @click="sorting($event,'price','list',1)">价格<i :class="{sorting : price}"></i></li>
    	</ul>
    	<p>
    		<span>￥</span>
    		<input ref="reflowPrice" type="text" placeholder="最低价" @blur="_priceVal($event,'isLow','refhighPrice', 'low_price')" @keyup="_subLowHigh($event, 'isLow','refhighPrice', 'low_price', 1)"/>
    		<b>~</b>
    		<span>￥</span>
    		<input ref="refhighPrice" type="text" placeholder="最高价" @blur="_priceVal($event,'isHigh','reflowPrice', 'high_price')" @keyup="_subLowHigh($event, 'isHigh','reflowPrice', 'high_price', 1)"/>
    		<button @click="_subLowHigh">确<span class="em_5"></span>定</button>
    	</p>
    </nav>
    <div class="row sellerAllProduct-product">
    	<div class="sellerAllProduct-product-left">
    		<ul>
    			<li v-for="(product,index) in products">
    				<a :href="'./detail.html?'+product.num_iid" target="_blank">
    					<img :src="product.pic_url" alt="产品图片">
    				</a>
    				<ul>
    					<li><b>￥&nbsp;{{ product.price }}</b><span rel="stylesheet" class="icon-shoucang"></span></li>
    					<li><a target="_blank" :href="'./detail.html?'+product.num_iid" v-html="_titleHtml(product.title)"></a></li>
    					<li><span v-if="product.item_no">#{{ product.item_no }}</span><button>一键上传</button></li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="sellerAllProduct-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li v-for="(showcase,index) in showcases">
    				<a :href="'./detail.html?'+showcase.num_iid" target="_blank">
    					<img :src="showcase.pic_url" />
    				</a>
    				<b>￥&nbsp;{{ showcase.price }}</b>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
  <CkPagination :pages="total_pages" :pageNum="page_number" @submitPage="subPage"></CkPagination>
 	<footerComponent></footerComponent>
 </div>
</template>

<script>
	import Vue from 'vue'
	import footerComponent from 'components/footer'
	import CkPagination from 'components/CkPagination'
	
	export default {
	  data () {
	    return {
	      isHeiBig: false,
	      products: [],
	      cats: [],
	      page_number: Number,
	      total_pages: Number,
	      isSorting: false,
	      showcases: [],
	      // 排序
	      list: true,
	      price: true,
	      paixu: '',
	      paixuRules: '',
	      // 店铺 id
	      store_id: 7,
	      // 页数
	      page: 1,

	      // 价格区间
	     	isLow: false,
	     	isHigh: false,
	      low_price: '',
	      high_price: '',

	      // 判断信息是否超过两行
	     	titleHtml: '',

	    }
	  },
	  mounted () {
	  	var me = this
	  	var hrefstr = window.location.href
	  	var store_index = parseInt(hrefstr.indexOf('store_id'))
	  	var page_index = parseInt(hrefstr.indexOf('page'))
	  	var paixu_index = parseInt(hrefstr.indexOf('order'))
	  	var low_price_index = parseInt(hrefstr.indexOf('low_price'))
	  	var high_price_index = parseInt(hrefstr.indexOf('high_price'))

	  	// 从链接中拿取 store_id
	  	this._calcuStroId(store_index, 'store_id', hrefstr, 9)
	  	
	  	// 从链接中拿取 page
	  	this._calcuStroId(page_index, 'page', hrefstr , 5) 
	  	
	  	if(paixu_index != -1){
	  		this.paixu = '&order='
	  		this.paixuRules = hrefstr.slice(parseInt(paixu_index)+6)
	  		if(parseInt(this.paixuRules.indexOf('&')) != -1){
	  			this.paixuRules = this.paixuRules.slice(0,parseInt(this.paixuRules.indexOf('&')))
	  		}
	  		if(this.paixuRules.slice(0,parseInt(this.paixuRules.indexOf('_'))) == 'asc'){
	  			this[this.paixuRules.slice(parseInt(this.paixuRules.indexOf('_'))+1)] = false
	  		}
	  	}
	  	// 从链接中拿取 low_price
	  	this._calcuLow(low_price_index, 'reflowPrice', 'low_price', hrefstr)

	  	// 从链接中拿取 high_price
	  	this._calcuLow(high_price_index, 'refhighPrice', 'high_price', hrefstr)

	    this.$http.get('/api/items?store_id='+ this.store_id +'&type=all&page='+ this.page +'&page_size=12' + this.paixu + this.paixuRules + this.low_price +this.high_price)
	    .then(function (res) {
		    me.cats = res.data.cats
	    	me.products = res.data.data
	    	me.page_number = res.data.page_number
	    	me.total_pages = res.data.total_pages
	    	if(parseInt($(me.$refs.catsUl).css('height')) > 50) {
	  			me.isHeiBig = true
			  }
	    },
	    function (res) {
	    	console.log(res)
	    })

	    this.$http.get('/api/items?store_id='+ this.store_id +'&type=showcase&page_size=4&page='+ this.page)
	    .then(function (res) {
	    	me.showcases = res.data.data
	    },
	    function (res) {
	    	console.log(res)
	    })
	  },
	  methods : {
		  // 从链接中拿取 low_price  high_price
	  	_calcuLow (index, refPrice, LowHiprice, hrefstr) {
		  	if(index != -1){
		  		this[LowHiprice] = hrefstr.slice(parseInt(index))
		  		if(parseInt(this[LowHiprice].indexOf('&')) != -1){
		  			this[LowHiprice] = '&' + this[LowHiprice].slice(0,parseInt(this[LowHiprice].indexOf('&')))
		  		}else{
		  			this[LowHiprice] = '&' + this[LowHiprice]
		  		}
		  		var val = this[LowHiprice].slice(this[LowHiprice].indexOf('=')+1)
		  		var valFl = val.slice(val.indexOf('.')+1)
		  		if(valFl.length > 2){
		  			this.$refs[refPrice].value = val.slice(0,val.indexOf('.')+3)
		  		}else if(valFl.length == 2){
		  			this.$refs[refPrice].value = val
		  		}else if(valFl.length == 1){
		  			this.$refs[refPrice].value = val + '0'
		  		}else if(!valFl){
		  			this.$refs[refPrice].value = val + '00'
		  		}
		  	}
	  	},
			// 从链接中拿取 page stroe_id
	  	_calcuStroId (index, str, hrefstr, n) {
	  		if(index != -1){
		  		this[str] = hrefstr.slice(parseInt(index)+n)
		  		if(parseInt(this[str].indexOf('&')) != -1){
		  			this[str] = this[str].slice(0,parseInt(this[str].indexOf('&')))
		  		}
		  	}
	  	},
	  	// 商品分类过多就隐藏   鼠标事件让其显示
	  	moreOver : function (e) {
				if(parseInt($(this.$refs.catsUl).css('height')) > 50) {
	  		console.log(55)
	  			$(e.target.parentNode).css({maxHeight: '500px'})
			  }
	  	},
	  	moreOut : function (e) {
	  		if(parseInt($(this.$refs.catsUl).css('height')) > 70) {
	  		console.log(55)
	  			$(e.target.parentNode).css({maxHeight: '60px'})
	  		}
	  	},
	  	// 分页的跳转
	  	subPage (n) {
	  		window.location.href = "http://localhost:9090/module/sellerAllProduct.html?store_id="+ this.store_id +"&page="+ n + this.paixu + this.paixuRules + this.low_price +this.high_price
	  	},
	  	// 排序的规则
	  	sorting (e,str1,str2,n) {
	  		$(e.target).addClass('active').siblings('.active').removeClass('active')
	  		var me = this
	  		this[str2] = true
	  		this.paixuRules = str1
	  		if(this[str1]){
	  			this.paixu = '&order=asc_'
	  		}else{
	  			this.paixu = '&order=desc_'
	  		}
	  		this[str1] = !this[str1]

	  		window.location.href = "http://localhost:9090/module/sellerAllProduct.html?store_id="+ this.store_id +"&page=1" + this.paixu + this.paixuRules + this.low_price +this.high_price
	  	},
	  	// 关注本店
	  	subStor () {
	  		var favorite={
	  			'user_id': 1,
	  			'store_id': this.store_id,
	  			'type': 'store'
	  		}
	  		this.$http.post('/api/favorites',{"favorite":favorite})
	      .then(function(res){
	        console.log(res.data)
	      },function(err){
	        console.log(err)
	      })
	  	},
	  	// 筛选价格区间input 的验证
	  	_priceVal (e,str1,str2 ,lowHi_price) {
	  		var reg = /^\d(\d|.)*$/
	  		var val1 = +e.target.value.replace(/\s/g,'')
	  		var val2 = +this.$refs[str2].value
	  		if(reg.test(val1) && val1 != 0){
	  			if(val1 == +this[lowHi_price].slice(this[lowHi_price].indexOf('=')+1)){
	  				this[str1] = false
	  				return
	  			}
	  			if(val2){
	  				if(str1 == 'isLow'){
	  					if(val1 < val2){
	  						this[str1] = true
	  					}else{
	  						e.target.value = ''
	  						this[str1] = false
	  					}
	  				}else{
	  					if(val1 > val2){
	  						this[str1] = true
	  					}else{
	  						e.target.value = ''
	  						this[str1] = false
	  					}
	  				}
	  			}else{
	  				this[str1] = true
	  			}
	  		}else{
	  			e.target.value = ''
	  			this[str1] = false
	  		}
	  	},
	  	// 提交价格筛选的规则
	  	_subLowHigh (e,str1,str2 ,lowHi_price, n) {
	  		if(n){
	  			if(e.which != 13){
	  				return
	  			}else{
		  			this._priceVal (e,str1,str2 ,lowHi_price)
		  		}
	  		}
	  		if(this.isLow || this.isHigh){
		  		var lowPrice = this.$refs.reflowPrice.value
		  		var highPrice = this.$refs.refhighPrice.value
		  		if(lowPrice){
		  			this.low_price = '&low_price='+lowPrice
		  		}
		  		if(highPrice){
		  			this.high_price = '&high_price='+highPrice
		  		}
		  		window.location.href = "http://localhost:9090/module/sellerAllProduct.html?store_id="+ this.store_id +"&page=1" + this.paixu + this.paixuRules + this.low_price + this.high_price
	  		}
	  	},
	    // 过滤文字的行数不能超过两行
	  	_titleHtml (str) {
	  		if(str){
		  		if(str.length < 14){
		  			return str
		  		}else{
		  			return '<span>'+ str.slice(0,14) +'</span>\
		  							<span class="text_overflow">'+ str.slice(14) +'</span>'
		  		}
	  		}
	  	}
	  },
	  components: {
	  	CkPagination,
	  	footerComponent
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->