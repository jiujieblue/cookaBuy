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
				<p>
					<img :src="storesInfo && storesInfo.store_logo" alt="店铺头像">
				</p>
				<ul>
					<li>
						<b>{{ storesInfo && storesInfo.store_name }}</b>
						<button @click="subStor" v-if="false">+关注本店</button>
						<span v-if="false">已<span class="em_5"></span>关<span class="em_5"></span>注</span>
					</li>
					<li v-if="false">
						<link rel="stylesheet" class="icon-shimingyanzheng">实名验证
						<link rel="stylesheet" class="icon-strenzheng">实体认证
					</li>
					<li>
						<link rel="stylesheet" class="icon-dizhi">{{ storesInfo && storesInfo.location }}
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
    		<li v-for="(sor,index) in sorting" @click="_sorting($event, index)" :class="{active: sortingStan == index}">
    			{{ sor.total }}
    			<i :class="{ rising: !sor.statu }"></i>
    		</li>
    	</ul>
    	<p>
    		<span>￥</span>
    		<input ref="low_price" type="text" placeholder="最低价" @blur="_priceVal($event,'low_price','high_price')" @keyup="_subLowHigh($event, 1,'low_price','high_price')"/>
    		<b>~&nbsp;</b>
    		<span>￥</span>
    		<input ref="high_price" type="text" placeholder="最高价" @blur="_priceVal($event,'high_price','low_price')" @keyup="_subLowHigh($event, 1,'high_price','low_price')"/>
    		<button @click="_subLowHigh">确<span class="em_5"></span>定</button>
    	</p>
    </nav>
    <div class="row sellerAllProduct-product">
    	<div class="sellerAllProduct-product-left">
    		<ul>
    			<li v-for="(product,index) in products" v-if="product.price || product.pic_url">
    				<a :href="'./detail.html?'+product.num_iid" target="_blank">
    					<img :src="product.pic_url+'_200x200.jpg'" alt="产品图片">
    				</a>
    				<ul>
    					<li>
    						<b>￥&nbsp;{{ product.price }}</b>
    						<span rel="stylesheet" class="icon-shoucang"></span>
    					</li>
    					<li>
    						<a target="_blank" :href="'./detail.html?'+product.num_iid">{{ product.title }}</a>
    					</li>
    					<li>
    						<span v-if="product.item_no">#{{ product.item_no }}</span>
    						<button>一键上传</button>
    					</li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="sellerAllProduct-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li v-for="(showcase,index) in showcases">
    				<a :href="'./detail.html?'+showcase.num_iid" target="_blank">
    					<img :src="showcase.pic_url+'_180x180.jpg'" />
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
	      storesInfo: null,
	      // 排序
	      sorting:{
	      	//comprehensive: {statu: false, total: '综合排序'},
		      list: {statu: false, total: '上架时间'},
		      //sales: {statu: false, total: '销量'},
		      price: {statu: false, total: '价格'}
	      },
	      sortingUrl: '',
	      sortingStan: '',

	      // 店铺 id
	      store_id: 7,
	      // 页数
	      page: 1,
	      hotPage: 1,

	      // 价格筛选
	      lHPrice_isNot: {
		      low_price: false,
		      high_price: false,
		      ifSub: false
	      },
				lHPrice_str: {
					low_price: '',
					high_price: ''
				},
	    }
	  },
	  mounted () {
	  	var me = this
	  	var hrefstr = window.location.href

	  	// 从链接中拿取 store_id
	  	this._calcuInfo('store_id', hrefstr, 9)
	  	
	  	// 从链接中拿取 page
	  	this._calcuInfo('page', hrefstr , 5) 
	  	
	  	// 从链接中拿取 low_price  high_price
	  	this._obtainLHPriceUrl('low_price',hrefstr)
	  	this._obtainLHPriceUrl('high_price',hrefstr)

	  	this._obtainSorUrl('order',hrefstr)

	    this.$http.get('/api/items?store_id='+ this.store_id +'&type=all&page='+ this.page +'&page_size=12' + this.sortingUrl +this.lHPrice_str.low_price+this.lHPrice_str.high_price)
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
	    this.$http.get('/api/items?store_id='+ this.store_id +'&type=showcase&page_size=4&page=1')
	    .then(function (res) {
	    	me.showcases = res.data.data
	    },
	    function (res) {
	    	console.log(res)
	    })

	    this.$http.get('/api/stores/'+this.store_id)
	    .then(function (res) {
	    	me.storesInfo = res.data.data
	    	$('title').html(res.data.data.store_name + ' 全部商品')
	    },
	    function (res) {
	    	console.log(res)
	    })
	  },
	  methods : {
			// 从链接中拿取 page stroe_id
	  	_calcuInfo (str, hrefstr, n) {
	  		var i = parseInt(hrefstr.indexOf(str))
	  		if(i != -1){
		  		this[str] = hrefstr.slice(parseInt(i)+n)
		  		if(parseInt(this[str].indexOf('&')) != -1){
		  			this[str] = this[str].slice(0,parseInt(this[str].indexOf('&')))
		  		}
		  	}
	  	},
	  	// 获取排序的 href
	  	_obtainSorUrl (str, hrefStr) {
	  		var i = hrefStr.indexOf(str)
		  	if(i != -1){
		  		this.sortingUrl = hrefStr.slice(i)
		  		var str1,str2
		  		if((i = this.sortingUrl.indexOf('&')) != -1){
		  			this.sortingUrl = this.sortingUrl.slice(0,i)
		  		}
		  		str1 = this.sortingUrl.slice(this.sortingUrl.indexOf('=')+1)
		  		str2 = str1.slice(0,str1.indexOf('_'))
		  		this.sortingStan = str1 = str1.slice(str1.indexOf('_')+1)
		  		if(str2 == 'asc'){
		  			this.sorting[str1].statu = true
		  		}
		  		this.sortingUrl = '&' + this.sortingUrl
	  		}
	  	},
	  	// 获取价格筛选 href
	  	_obtainLHPriceUrl (str,hrefStr) {
	  		var i = hrefStr.indexOf(str)
	  		if(i != -1){
	  			this.lHPrice_isNot[str] = true
		  		this.lHPrice_str[str] = hrefStr.slice(i)
		  		if((i = this.lHPrice_str[str].indexOf('&')) != -1){
		  			this.lHPrice_str[str] = this.lHPrice_str[str].slice(0,i)
		  		}
		  		this.lHPrice_str[str] = '&' + this.lHPrice_str[str]
		  		if(this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1) != 0){
		  			this.$refs[str].value =  this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1)
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
	  		window.location.href = "./sellerAllProduct.html?store_id="+ this.store_id +"&page="+ n + this.sortingUrl +this.lHPrice_str.low_price+this.lHPrice_str.high_price
	  	},
	  	_sorting (e, str) {
		  	$(e.target).addClass('active').siblings('.active').removeClass('active')
		  	if(this.sorting[str].statu){
		  		this.sortingUrl = '&order=' + 'desc_' +str
		  	}else{
		  		this.sortingUrl = '&order=' + 'asc_' + str
		  	}
		  	for(var key in this.sorting){
		  		if(key == str){
		  			this.sorting[key].statu = !this.sorting[key].statu
		  		}else if(this.sorting[key].statu){
		  			this.sorting[key].statu = false
		  		}
		  	}
		  	window.location.href = "./sellerAllProduct.html?store_id="+ this.store_id +"&page=1" + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price
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

	  	// 提交筛选价格区间
	  	_subLowHigh (e, n,str1,str2) {
	  		if(n){
	  			if(e.which == 13){
	  				this._priceVal (e,str1,str2)
	  			}else{
	  				return
	  			}
	  		}
	  		if(this.lHPrice_isNot.ifSub){
		  		if(this.lHPrice_isNot.low_price || this.lHPrice_isNot.high_price){
		  			if(this.lHPrice_isNot.low_price){
		  				if(this.$refs.low_price.value == 0){
		  					this.lHPrice_str.low_price = ''
		  				}else{
		  					this.lHPrice_str.low_price = '&low_price='+this.$refs.low_price.value
		  				}
		  			}else{
		  				this.lHPrice_str.low_price = ''
		  			}
		  			if(this.lHPrice_isNot.high_price){
		  				if(this.$refs.high_price.value == 0){
		  					this.lHPrice_str.high_price = ''
		  				}else{
		  					this.lHPrice_str.high_price = '&high_price='+this.$refs.high_price.value
		  				}
		  			}else{
		  				this.lHPrice_str.high_price = ''
		  			}
		  			window.location.href = "./sellerAllProduct.html?store_id="+ this.store_id +"&page=1" + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price
		  		}
	  		}
	  	},
	  	// 价格筛选区间的验证
	  	_priceVal (e,str1,str2) {
	  		var reg = /^\d(\d|.)*$/
	  		var val1 = +e.target.value.replace(/\s/g,'')
	  		var val2 = +this.$refs[str2].value
	  		if(reg.test(val1)){
	  			if(this.lHPrice_str[str1]){
		  			if(val1 == +this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1)){
		  				this.lHPrice_isNot[str1] = false
		  				return
		  			}else{
		  				this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
	  					if(val1 == 0){
	  						return
	  					}
		  			}
	  			}else if(val1 == 0){
	  				e.target.value = ''
	  				this.lHPrice_isNot[str1] = false
	  				return
	  			}
	  			if(val2){
	  				if(str1 == 'low_price'){
	  					if(val1 < val2){
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}else{
	  					if(val1 > val2){
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}
	  			}else{
	  				this.lHPrice_isNot[str1] = true
	  				this.lHPrice_isNot.ifSub = true
	  			}
	  		}else{
	  			e.target.value = ''
	  			this.lHPrice_isNot[str1] = false
	  			return
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