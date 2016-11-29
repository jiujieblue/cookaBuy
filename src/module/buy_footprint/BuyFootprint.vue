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
									<li class="active" @click="_footNav($event,0)">全部 ({{ total_entries }})</li>
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
									<li>
										<div>
											您有<span>{{ invalid_counts }}</span>个失效商品
											<span class="allDel" @click="allDel">全部删除</span>
											<i v-show="false">{{ showFoot }}</i>
										</div>

									</li>
								</ul>
								<div class="buyFootprint-right-container-list-main" v-for="(footprints,index1) in footprintsObj"  v-if="false">
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
															<link rel="stylesheet" class="icon-shanchu" @click="del($event,list.id,index1,index2)">
															<link rel="stylesheet" class="icon-dianpu">
														</div>
													</div>
													<a>{{ list.item && list.item.title }}</a>
													<b>￥{{ list.item && list.item.price }}</b>
												</li>
											</ul>
										</li>
									</ul>

								</div><div class="buyFootprint-right-container-list-main">
									<ul>
										<li>
											<span>4444</span>浏览了<b>44</b>件宝贝
										</li>
										<li>
											<ul>
												<li>
													<div>
														<a href="">
															<img src="../../assets/images/hotsale1.jpg" alt="足迹图片">
														</a>
														<div>
															<link rel="stylesheet" class="icon-shanchu">
															<link rel="stylesheet" class="icon-dianpu">
														</div>
													</div>
													<a>asdfasdfasdfsadfasfsaf</a>
													<b>￥555</b>
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
	    	footprintsObj: {},
	    	nums: 1,
	    	showFoot: '',
	    	isAjax: true,
	    	date_counts: null,
	    	isAllChoose: false,
	    	isRequest: false,
	    	invalid_counts: null,
	    	total_entries: null
	    }
	  },
	  mounted () {
	  	
	  	this.$http.get('/api/footprints?page_size=20&page='+this.nums)
	  	.then(function (res) {
	  		this.showFoot = res.data.page_size
	  		this.date_counts = res.data.date_counts
	  		this.invalid_counts = res.data.invalid_counts
	  		this.total_entries = res.data.total_entries

	  		for(var i=0; i<res.data.data.length ; i++){
	  			if(!this.footprintsObj[res.data.data[i].date]){
	  				this.footprintsObj[res.data.data[i].date] = []
	  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])
	  			}else{
	  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])
	  			}
	  		}
	  		this.nums++
	  		this.isRequest = true

	  		console.log(this.footprintsObj)
	  	},
	  	function (res) {
	  		console.log(res)
	  	})

	  	// 页面到达底部加载更多
    	var me = this
    	$(window).bind("scroll", function(){
			  var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop())
			  //判断滚动条是否到达指点位置
		  	if ($(document).height() <= totalheight + 400 && me.isRequest){
		  		//防止连续请求，加载一次后先停止
		  		if(me.isAjax){
		  			me.isAjax = false
			    	me.$http.get('/api/footprints?page_size=20&page='+me.nums)
				  	.then(function (res) {
				  		me.showFoot = res.data.page_size
				  		me.date_counts = res.data.date_counts
	  					me.invalid_counts = res.data.invalid_counts
	  					me.total_entries = res.data.total_entries

				  		if(res.data.data.length == 0){
				  			me.isRequest = false
				  		}
				  		for(var i=0; i<res.data.data.length ; i++){
				  			if(!me.footprintsObj[res.data.data[i].date]){
				  				me.footprintsObj[res.data.data[i].date] = []
				  				me.footprintsObj[res.data.data[i].date].push(res.data.data[i])
				  			}else{
				  				me.footprintsObj[res.data.data[i].date].push(res.data.data[i])
				  			}
				  		}
				  		// 页面加载一次后先停止1.5s
				  		setTimeout(function(){
					  		me.isAjax = true
		  					me.nums++
					  	},1500)
				  	},
				  	function (res) {
				  		console.log(res)
				  	})
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
	  	},
	  	del (e,id,index1,index2) {
	  		var me = this
	  		this.$http.delete('/api/footprints/'+ id)
          .then(
          function(res){
            //$(e.target).parent().parent().parent().fadeOut()
            me.footprintsObj[index1].splice(index2,1)
            me.date_counts[index1]--
            console.log(me.footprintsObj[index1])
            if(me.footprintsObj[index1].length == 0){
            	console.log(11)
            	me.footprintsObj[index1] = undefined
            	console.log(me.footprintsObj)
            }
            
          },function(err){
            console.log('删除失败')
          }
        )
	  	},
	  	allDel () {
	  		this.$http.get('/api/footprints/deleteInvalid')
          .then(
          function(res){
            //location.reload()
          },function(err){
            console.log('删除失败')
          }
        )
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