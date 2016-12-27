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
					<li v-if="false"><a href="">请登录</a> | <a href="">免费注册</a></li>
					<li v-if="false"><a href="">收藏本站</a></li>
					<li v-if="false"><a href="">商家入驻</a></li>
				</ul>
			</div>
		</div>
		<div class="sellerAllProduct-header-info">
			<div class="container">
				<p>
					<img :src="storesInfo && storesInfo.store_logo" alt="店铺头像" v-if="storesInfo">
					<img src="../../assets/images/userImg.jpg" alt="店铺头像" v-else>
				</p>
				<ul>
					<li>
						<a :href="'./sellerAllProduct.html?store_id='+store_id">{{ storesInfo && storesInfo.store_name }}</a>
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
					<span>商&nbsp;&nbsp;品</span>
					<input :value="keyword" type="text" placeholder="搜索关键字..." ref="keyword" @keyup="_subkeyword($event, 1)">
					<button @click="_subkeyword" >搜本店</button>
				</p>
			</div>
		</div>
	</div>
	<div class="container sellerAllProduct">
  	<div class="row sellerAllProduct-list">
  		<ul style="display:none">
	    	<li class="active">全部商品</li>
	    	<li>会员专区</li>
	    </ul>
	    <div>
	    	<p>
	    		<span>商品分类</span>
	    		<span>共 {{ total_entries }} 件相关商品</span>
	    	</p>
	    	<div>
	    		<span v-if="root_cat !== undefined">{{ root_cat }}：</span>
		    	<ul ref="catsUl">
		    		<li v-for="(cat,index) in catsReal" :class="{active : cat.cid == cid}">
		    			<a :href="'./sellerAllProduct.html?store_id='+store_id+'&page=1&cid='+cat.cid">{{ cat.name }}</a>
		    		</li>
		    	</ul>
		    	<span @click="moreClick" v-if="isHeiBig" :class="{isMore : isShowMore}">更多</span>
	    	</div>
	    </div>
  	</div>
    <nav class="row sellerAllProduct-nav">
    	<ul>
    		<li v-for="(sor,index) in sorting" @click="_sorting($event, index)" :class="{active: sortingStan == index}">
    			{{ sor.total }}
    			<i :class="{ rising: sor.statu }"></i>
    		</li>
    	</ul>
    	<p>
    		<span>￥</span>
    		<input ref="low_price" type="text" placeholder="最低价" @blur="_priceVal($event,'low_price','high_price')" @keyup="_subLowHigh($event, 1,'low_price','high_price')"/>
    		<b>~&nbsp;</b>
    		<span>￥</span>
    		<input ref="high_price" type="text" placeholder="最高价" @blur="_priceVal($event,'high_price','low_price')" @keyup="_subLowHigh($event, 1,'high_price','low_price')"/>
    		<button @click="_subLowHigh($event, 0,'high_price','low_price')">确<span class="em_5"></span>定</button>
    	</p>
    </nav>
    <div class="row sellerAllProduct-product">
    	<div class="sellerAllProduct-product-left">
    		<div class="sellerAllProduct-product-left-failure" v-if="!isRequestYes && !isRequestReady">
    			<img src="../../assets/images/nosearchR.png" alt="请求不到数据显示该图片">
    			<ul>
    				<li><p>没有相关商品哦~~</p></li>
    				<li>
    					<a href="./index.html" target="_blank">去商城逛逛</a>
    				</li>
    			</ul>
    		</div>
    		<div class="sellerAllProduct-product-left-loading" v-if="isRequestReady">
    			<img src="../../assets/images/loading.gif" alt="加载中">
    		</div>
    		<ul class="sellerAllProduct-product-left-success" v-if="isRequestYes">
    			<li v-for="(product,index) in productsAll" >
    				<a :href="'./detail.html?'+product.num_iid" target="_blank">
    					<img :src="product.pic_url+'_200x200.jpg'" alt="产品图片">
    				</a>
    				<ul>
    					<li>
    						<b>￥{{ product.price }}</b>
    						<span rel="stylesheet" class="icon-shoucang" v-if="false"></span>
    					</li>
    					<li>
    						<a class="ie-11-a" target="_blank" :href="'./detail.html?'+product.num_iid" v-html="_titleColor(product.title)"></a>
    					</li>
    					<li>
    						<span v-if="product.item_no">#{{ product.item_no }}</span>
    						<button v-if="false">一键上传</button>
    					</li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="sellerAllProduct-product-right" v-if="isRequestYes">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li v-for="(showcase,index) in _noHot()">
    				<a :href="'./detail.html?'+showcase.num_iid" target="_blank">
    					<img :src="showcase.pic_url+'_180x180.jpg'" />
    				</a>
    				<span>￥&nbsp;{{ showcase.price }}</span>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
  <CkPagination :pages="total_pages" :pageNum="page" @submitPage="subPage" v-if="isRequestYes"></CkPagination>
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
	      isHeiBig: false, // 是否显示更多
	      productsAll: [],
	      cats: [],
	      catsReal: {},
	      page_number: Number,
	      total_pages: Number,
	      showcases: [],
	      storesInfo: null,
	      total_entries: '',
	      root_cat: '',
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
	      store_id: null,
	      // 页数
	      page: 1,

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
				keyword: '',
				isCla: false,
				isDisabled: false,
				// 请求的数据是否有商品
				isRequestReady: true,
				isRequestYes: false,
				isShowMore: false,
				cid: ''
	    }
	  },
	  updated () {
	  	if(parseInt($(this.$refs.catsUl).css('height')) > 65) {
  			this.isHeiBig = true
		  }
	  	if(document.documentMode === 11){
	  		$('.ie-11-a').css({display: 'block',height: '40px'})
	  	}
	  },
	  mounted () {
	  	var me = this , keywordUrl = '', cidUrl = ''
	  	var hrefStr = window.location.href
	  	

	  	// 从链接中拿取 cid
	  	this._calcuInfo('&cid', hrefStr, 5)
	  	// 从链接中拿取 store_id
	  	this._calcuInfo('?store_id', hrefStr, 10)
	  	// 从链接中拿取 page
	  	this._calcuInfo('&page', hrefStr , 6)
	  	// 从链接中拿取 keyword
	  	this._calcuInfo('&q', hrefStr , 3, 'keyword')
	  	// 从链接中拿取 low_price  high_price
	  	this._obtainLHPriceUrl('&low_price',hrefStr)
	  	this._obtainLHPriceUrl('&high_price',hrefStr)

	  	// 从链接中拿取 排序规则
	  	this._obtainSorUrl('order',hrefStr)

	  	this.cid && (cidUrl = '&cid=' + this.cid)
  		this.keyword && (keywordUrl = '&q=' + encodeURIComponent(this.keyword))
	  	// 全部商品
	    this.$http.get('/api/items?store_id=' + this.store_id + cidUrl + keywordUrl +'&type=all&page='+ this.page +'&page_size=12' + this.sortingUrl +this.lHPrice_str.low_price+this.lHPrice_str.high_price)
	    .then(function (res) {
		    me.cats = res.data.cats
	    	me.productsAll = res.data.data
	    	me.total_pages = res.data.total_pages
	    	me.total_entries = res.data.total_entries
	    	me.root_cat = res.data.root_cat

	    	this.isRequestReady = false
	    	for(var i = 0;i < me.cats.length; i ++){
	    		if(!me.catsReal[me.cats[i].name]){
	    			me.catsReal[me.cats[i].name] = {}
	    			me.catsReal[me.cats[i].name].name = me.cats[i].name
	    			me.catsReal[me.cats[i].name].parent = me.cats[i].parent
	    			me.catsReal[me.cats[i].name].cid = me.cats[i].cid
	    		}else{
	    			me.catsReal[me.cats[i].parent] = {}
	    			me.catsReal[me.cats[i].parent].name = me.cats[i].parent
	    			me.catsReal[me.cats[i].parent].parent = me.cats[i].parent
	    			me.catsReal[me.cats[i].parent].cid = me.cats[i].cid
	    			me.catsReal[me.cats[i].name].name = me.catsReal[me.cats[i].name].parent
	    		}
	    	}
	    	if(parseInt($(me.$refs.catsUl).css('height')) > 65) {
	  			me.isHeiBig = true
			  }
			  if(res.data.data.length == 0){
			  	me.isRequestYes = false
			  }else{
			  	me.isRequestYes = true
			  }
	    },
	    function (res) {
	    	console.log(res)
	    })
	  	

	    // 推荐商品
	    this.$http.get('/api/items?store_id='+ this.store_id +'&type=showcase&page_size=4&page=1')
	    .then(function (res) {
	    	me.showcases = res.data.data
	    },
	    function (res) {
	    	console.log(res)
	    })
	    // 商家信息
	    this.$http.get('/api/stores/'+this.store_id)
	    .then(function (res) {
	    	me.storesInfo = res.data.data
	    	$('title').html(res.data.data.store_name + ' 柯咔服装网')
	    },
	    function (res) {
	    	console.log(res)
	    })
	  },
	  methods : {
	  	_claOver (e) {
	  		this.isCla = true
	  	},
	  	_claOut (e) {
				this.isCla = false
	  	},
	  	// 关键字高光
	  	_titleColor (val) {
	  		if(this.keyword && val){
	  			return val.replace(this.keyword,'<span>'+ this.keyword +'</span>')
	  		}else{
	  			return val
	  		}
	  	},
	  	// 请求没有店铺推荐商品
	  	_noHot () {
	  		return this.showcases.length == 0 ? this.productsAll.slice(0,4) : this.showcases
	  	},
			// 获取 page stroe_id keyword 的href
	  	_calcuInfo (str, hrefStr, n, keyword) {
	  		var i = parseInt(hrefStr.indexOf(str)),val
	  		if(keyword){
	  			str = keyword
	  		}else{
	  			str = str.slice(1)
	  		}
	  		if(i != -1){
		  		val = hrefStr.slice(i+n)
		  		if(parseInt(val.indexOf('&')) != -1){
		  			val = val.slice(0,parseInt(val.indexOf('&')))
		  		}
		  		if(val != '%'){
						this[str] = decodeURIComponent(val)
		  		}else{
		  			this[str] = val
		  		}
		  	}
	  	},
	  	// 获取排序的 href
	  	_obtainSorUrl (str, hrefStr) {
	  		var i = hrefStr.indexOf(str),str1
		  	if(i != -1){
		  		this.sortingUrl = hrefStr.slice(i)
		  		if((i = this.sortingUrl.indexOf('&')) != -1){
		  			this.sortingUrl = this.sortingUrl.slice(0,i)
		  		}
		  		str1 = this.sortingUrl.slice(this.sortingUrl.indexOf('=')+1)
		  		str1 = str1.slice(str1.indexOf('_')+1)
		  		if(this.sortingUrl.indexOf('asc') != -1){
		  			this.sorting[str1].statu = true
		  		}
		  		this.sortingStan = str1
		  		this.sortingUrl = '&' + this.sortingUrl
	  		}
	  	},
	  	// 获取价格筛选 href
	  	_obtainLHPriceUrl (str,hrefStr) {
	  		var i = hrefStr.indexOf(str),floatStr
	  		str = str.slice(1)
	  		if(i != -1){
	  			this.lHPrice_isNot[str] = true
		  		this.lHPrice_str[str] = hrefStr.slice(i+1)
		  		if((i = this.lHPrice_str[str].indexOf('&')) != -1){
		  			this.lHPrice_str[str] = this.lHPrice_str[str].slice(0,i)
		  		}
		  		this.lHPrice_str[str] = '&' + this.lHPrice_str[str]
		  		var val = this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1)
		  		if((i = val.indexOf('.')) != -1){
		  			floatStr = val.slice(i+1)
		  			if(floatStr.length == 1){
		  				val +='0'
		  			}else if(floatStr.length >= 2){
		  				val = val.slice(0,i+3)
		  			}
		  		}else{
		  			val += '.00'
		  		}
		  		this.$refs[str].value = val
		  	}
	  	},
	  	// 分页的跳转
	  	subPage (n) {
	  		var cidUrl = this.cid && ('&cid=' + this.cid)
	  		var val = this.keyword && ('&q=' + this.keyword)
	  		window.location.href = "./sellerAllProduct.html?store_id="+ this.store_id + cidUrl + "&page="+ n + this.sortingUrl +this.lHPrice_str.low_price+this.lHPrice_str.high_price + val
	  	},
	  	// 排序的跳转
	  	_sorting (e, str) {
	  		var val = ''
		  	$(e.target).addClass('active').siblings('.active').removeClass('active')
		  	if(this.sorting[str].statu){
		  		this.sortingUrl = '&order=desc_' +str
		  	}else{
		  		this.sortingUrl = '&order=asc_' +str
		  	}
		  	for(var key in this.sorting){
		  		if(key == str){
		  			this.sorting[key].statu = !this.sorting[key].statu
		  		}else if(this.sorting[key].statu){
		  			this.sorting[key].statu = false
		  		}
		  	}
		  	var cidUrl = this.cid && ('&cid=' + this.cid)
		  	this.keyword && (val = '&q=' + this.keyword)
		  	window.location.href = "./sellerAllProduct.html?store_id="+ this.store_id +"&page=1" + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price + val + cidUrl
		  },
	  	// 关注本店
	  	subStor () {
	  		var favorite = {
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
	  		if(n == 1){
	  			if(e.which == 13){
	  				this._priceVal (e,str1,str2)
	  			}else{
	  				return
	  			}
	  		}

	  		if(this.lHPrice_isNot.ifSub){
		  		if(this.lHPrice_isNot.low_price || this.lHPrice_isNot.high_price){
		  			if(this.lHPrice_isNot.low_price){
		  				if(!this.$refs.low_price.value){
		  					this.lHPrice_str.low_price = ''
		  				}else{
		  					parseInt(this.$refs.low_price.value)- Math.pow(10,10) > 0 && (this.$refs.low_price.value = 999999999.00)
		  					this.lHPrice_str.low_price = '&low_price='+this.$refs.low_price.value
		  				}
		  			}
		  			if(this.lHPrice_isNot.high_price){
		  				if(!this.$refs.high_price.value){
		  					this.lHPrice_str.high_price = ''
		  				}else{
		  					parseInt(this.$refs.high_price.value)- Math.pow(10,10) > 0 && (this.$refs.high_price.value = 999999999.00)
		  					this.lHPrice_str.high_price = '&high_price='+this.$refs.high_price.value
		  				}
		  			}
		  			var cidUrl = this.cid && ('&cid=' + this.cid)
		  			var val = this.keyword && ('&q=' + this.keyword)
		  			window.location.href = "./sellerAllProduct.html?store_id="+  this.store_id + val + cidUrl +"&page=1" + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price
		  		}
	  		}
	  	},
			// 搜索
	  	_subkeyword (e,n) {
	  		if(this.isDisabled){
	  			return
	  		}
	  		var regH = /<[^>]*>/g
	  		var regStr = /[`~!@$^&*()=|{}':;,\\[\].<>?~！@……&*（）——|{}【】‘；：”“'。，、？+_"]*/ig
	  		var val = this.$refs.keyword.value
	  		val = val.replace(/\s/g,'').replace(regH,'').replace(regStr,'')
	  		if(n && e.which != 13){
	  			return
	  		}
	  		if(val.length >= 100){
					return
				}
				val = encodeURIComponent(val)
	  		val && (val = '&q='+ val)
	  		window.location.href = "./sellerAllProduct.html?store_id="+this.store_id+"&page=1"+val
	  	},
	  	// 价格筛选区间的验证
	  	_priceVal (e,str1,str2) {
	  		var reg = /^\d(\d|.)*$/
	  		var val1 = +e.target.value.replace(/\s/g,'')
	  		var val2 = +this.$refs[str2].value
	  		if(reg.test(val1)){ // 是否是数字
	  			if(val1 == 0){
	  				if((this.lHPrice_str[str1] && this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1) != 0) || (!this.lHPrice_str[str2] && !this.lHPrice_str[str1])){
	  					this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
	  				}else{
	  					this.lHPrice_isNot[str1] = false
	  					this.lHPrice_isNot.ifSub = false
	  					return
	  				}
	  			}
	  			if(val2){ // 比较大小
	  				if(str1 == 'low_price'){
	  					if(val1 <= val2){
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}else{
	  					if(val1 >= val2){
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
	  			if(this.lHPrice_str[str1]){  // 是否存在已搜索
	  				// 已搜索和现搜索是否一样
		  			if(val1 == +this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1)){
		  				this.lHPrice_isNot[str1] = false
		  				if(this.lHPrice_isNot[str2]){
  							this.lHPrice_isNot.ifSub = true
  							return
  						}else{
  							this.lHPrice_isNot.ifSub = false
  							return
  						}
		  				return
		  			}else{
		  				this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
		  			}
	  			}else{
	  				this.lHPrice_isNot[str1] = true
	  				this.lHPrice_isNot.ifSub = true
	  				return
	  			}
	  		}else{
	  			e.target.value = ''
	  			this.lHPrice_isNot[str1] = false
	  			this.lHPrice_isNot.ifSub = false
	  			return
	  		}
	  	},
	  	// 商品分类过多就隐藏   鼠标事件让其显示
	  	moreClick : function (e) {
	  		this.isShowMore = !this.isShowMore
	  		if(this.isShowMore){
		  		$(e.target.parentNode).css({maxHeight: '500px'})
	  		}else{
	  			$(e.target.parentNode).css({maxHeight: '87px'})
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