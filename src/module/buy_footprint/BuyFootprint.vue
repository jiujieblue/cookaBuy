<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyFootprint.less';
</style>

<template>
<div id='buyFootprint'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container buyFootprint'>
			<div class="row">
				<div class="col-md-2">
					<BuyerCenterSideBar></BuyerCenterSideBar>
				</div>
				<div class="col-md-10">
					<div class="buyFootprint-right">
						<div class="buyFootprint-right-title">
							<span>当前位置：其他></span>我的足迹
						</div>
						<div class="buyFootprint-right-container">
							<div class="buyFootprint-right-container-nav">
								<ul>
									<li class="active" @click="_footNav($event,0)">全部 (12)</li>
									<li @click="_footNav($event,1)" v-show="false">免邮 (22)</li>
									<li @click="_footNav($event,2)" v-show="false">优惠 (0)</li>
								</ul>
							</div>
							<div class="buyFootprint-right-container-list">
								<ul>
									<li>
										<span href="" @click="allChoose">
											<span :class='[ isAllChoose? "icon-buzou1" : "icon-buzou2"]'>
												<span class="path1"></span>
												<span class="path2"></span>
											</span>
											全选
										</span>
										<a href=""><link rel="stylesheet" class="icon-shanchu">删除</a>
									</li>
									<li>您有<span>{{ invalid_count }}</span>个失效商品<span>全部删除</span><i v-show="false">{{ showFoot }}</i></li>
								</ul>
								<div class="buyFootprint-right-container-list-main" v-for="(footprints,index1) in footprintsObj">
									<ul>
										<li>
											<span>{{ index1 }}</span>浏览了<b>{{ date_counts[index1] }}</b>件宝贝
										</li>
										<li>
											<ul>
												<li v-for="(list,index2) in footprints">
													<div>
														<a href="">
															<img :src="list.item && list.item.pic_url" alt="足迹图片">
														</a>
														<div>
															<link rel="stylesheet" class="icon-shanchu">
															<link rel="stylesheet" class="icon-dianpu">
														</div>
													</div>
													<a>{{ list.item && list.item.title }}</a>
													<b>￥{{ list.item && list.item.price }}</b>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
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
	import BuyerCenterHeader from 'components/BuyerCenterHeader'
	import footerComponent from 'components/footer'
	import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
	import CkPagination from 'components/CkPagination'

	
	export default {
	  data () {
	    return {
	    	invalid_count: '',
	    	footprintsObj: {},
	    	nums: 1,
	    	showFoot: '',
	    	isAjax: true,
	    	date_counts: null,
	    	isAllChoose: false
	    }
	  },
	  mounted () {
	  	
	  	this.$http.get('/api/footprints?page_size=20&page='+this.nums)
	  	.then(function (res) {
	  		this.showFoot = res.data.page_size
	  		for(var i=0; i<res.data.data.length ; i++){
	  			if(!this.footprintsObj[res.data.data[i].date]){
	  				this.footprintsObj[res.data.data[i].date] = []
	  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])
	  			}else{
	  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])
	  			}
	  		}
	  		console.log(this.footprintsObj)
	  		this.date_counts = res.data.date_counts
	  		console.log(this.date_counts)
	  	},
	  	function (res) {
	  		console.log(res)
	  	})


    	var me = this
    	$(window).bind("scroll", function(){ 
			  var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop())

		  	if ($(document).height() <= totalheight + 300){
		  		//alert(1)
		  		if(me.isAjax){
		  			me.isAjax = false
		  			me.nums++
			  		$.ajax({
			        url : '/api/footprints?page_size=20&page='+me.nums,
			        type: "get",
			        data: null,
			        dataType: "json",
			        error: function(){alert('请求列表失败')},
			        success: function(res){
		  					me.showFoot = res.data.page_size
					  		for(var i=0; i<res.data.length ; i++){
					  			if(me.footprintsObj[res.data[i].date] === undefined ){
					  				me.footprintsObj[res.data[i].date] = []
					  				me.footprintsObj[res.data[i].date].push(res.data[i])
					  			}else{
					  				me.footprintsObj[res.data[i].date].push(res.data[i])
					  			}
					  		}
					  		console.log(me.footprintsObj)
					  		console.log(me.date_counts)
					  		me.isAjax = true
			        }
			    	});
		  		}
		  		
		  	}
			});
	  },
	  methods: {
	  	_footNav (e,n) {
	  		var el = e.target
	  		$(el).addClass('active').siblings('.active').removeClass('active')
	  	},
	  	allChoose () {
	  		this.isAllChoose = !this.isAllChoose
	  	}
	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar,
	  	CkPagination
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->