<style lang="less">
	@import '../../assets/less/search.less';
</style>
<template>
<div id='app'>
	<div class="container">
	  <div class="row">
	    <div class="col-md-12 header">
	      <h2>我是头部</h2>
	    </div>
	  </div>
  	<div class="row container-list">
  		<ul class="clear">
  			<li>所有分类</li>
  			<li> > <span>所有分类</span></li>
  			<li> > <span>所有分类</span></li>
  		</ul>
  		<div>
  			<ul>  				
  				<li>分<link class="em">类</li>
  				<li>
  					<ul>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  					</ul>
  					<span>更多</span>
  				</li>
  			</ul>
  			<ul>  				
  				<li>分<link class="em">类</li>
  				<li>
  					<ul>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  						<li>皮衣</li>
  					</ul>
  				</li>
  			</ul>
  			<ul>  				
  				<li>分<link class="em">类</li>
  				<li>
  					<ul>
  						<li>皮衣</li>
  					</ul>
  				</li>
  			</ul>
  		</div>
  	</div>
    <nav class="row container-nav">
    	<ul class="clear">
    		<li>综合排序<i></i></li>
    		<li>上架时间<i></i></li>
    		<li>销量<i></i></li>
    		<li>价格<i></i></li>
    	</ul>
    	<p class="clear">
    		<span>￥</span>
    		<input type="text" placeholder="最低价" />
    		<b>~&nbsp;</b>
    		<span>￥</span>
    		<input type="text" placeholder="最高价" />
    		<button>确定</button>
    	</p>
    	<span rel="stylesheet" class="icon-liebiao select" @click='gridOrBar(1)'></span>
    	<span rel="stylesheet" class="icon-pingpumoshi" @click='gridOrBar(0)'></span>
    </nav>
    <div class="row container-product clear">
    	<div class="container-product-left-grid" v-if='isGridOrBar == 0'>
    		<ul class="clear">
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#"></a></span></li>
    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#">大西豪 823档</a></span></li>
    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#">大西豪 823档</a></span></li>
    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#">大西豪 823档</a></span></li>
    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#">大西豪 823档</a></span></li>
    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    			<li>
    				<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
    				<ul>
    					<li><b>￥&nbsp;5644</b><p><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
    					<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
    					<li><a href="#">宝丽美服饰</a><span><a href="#">大西豪 823档</a></span></li>    					<li>图片</li>
    				</ul>
    				<div>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片1"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片2"></a>
    					<a href="#"><img src="../../assets/images/detail-list.jpg" alt="图片3"></a>
    				</div>
    			</li>
    		</ul>
    	</div>
    	<div class="container-product-left-bar" v-if='isGridOrBar == 1'>
    		<ul>
    			<li class="clear">
    				<a href="#"><img src="../../assets/images/detail-new.jpg" ></a>
    				<ul>
    					<li>战地吉普男装牛仔卫裤2016春装新款</li>
    					<li><a href="#">宝立美服饰</a>大西豪 823档</li>
    				</ul>
    				<ul>
    					<li><b>￥ 520.00</b>人气：2025</li>
    					<li>预留图片</li>
    				</ul>
    			</li>
    			<li class="clear">
    				<a href="#"><img src="../../assets/images/detail-new.jpg" ></a>
    				<ul>
    					<li>战地吉普男装牛仔卫裤2016春装新款</li>
    					<li><a href="#">宝立美服饰</a>大西豪 823档</li>
    				</ul>
    				<ul>
    					<li><b>￥ 520.00</b>人气：2025</li>
    					<li>预留图片</li>
    				</ul>
    			</li>
    			<li class="clear">
    				<a href="#"><img src="../../assets/images/detail-new.jpg" ></a>
    				<ul>
    					<li>战地吉普男装牛仔卫裤2016春装新款</li>
    					<li><a href="#">宝立美服饰</a>大西豪 823档</li>
    				</ul>
    				<ul>
    					<li><b>￥ 520.00</b>人气：2025</li>
    					<li>预留图片</li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="container-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
    				<a href="#">宝立美服饰</a>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
    				<a href="#">宝立美服饰</a>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
    				<a href="#">宝立美服饰</a>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
    				<a href="#">宝立美服饰</a>
    			</li>
    		</ul>
    	</div>
    </div>
 	</div>
</div>
</template>

<script>
	import Vue from 'vue'
	export default {
	  data () {
	    return {
	      isGridOrBar: 0
	    }
	  },
	  methods: {
	  	gridOrBar (n){
	  		this.isGridOrBar = n 
	  	}
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->