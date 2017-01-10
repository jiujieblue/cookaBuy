<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/buyerFootprint.less';
</style>

<template>
<div>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container buyerFootprint'>
		<div class="row">
			<div class="col-md-2">
				<BuyerCenterSideBar></BuyerCenterSideBar>
			</div>
			<div class="col-md-10">
				<div class="buyerFootprint-right">
					<div class="buyerFootprint-right-title">
						<span>当前位置：其他></span>我的足迹
					</div>
					<div class="buyerFootprint-right-container">
						<div class="buyerFootprint-right-container-nav">
							<ul>
								<li class="active" @click="_footNav($event,0)">全部 ({{ total_entries }})</li>
								<li @click="_footNav($event,1)" v-show="false">免邮 (22)</li>
								<li @click="_footNav($event,2)" v-show="false">优惠 (0)</li>
							</ul>
						</div>
						<div class="buyerFootprint-right-container-list">
							<ul class="buyerFootprint-right-container-list-nav">
								<li>
									<span @click="_batch">{{batch ? '取消管理' : '批量管理'}}</span>

									<div v-show="batch">
										<span href="" @click="_isAllChoose">
											<span :class='[ isAllChoose? "icon-buzou1" : "icon-buzou2"]'>
												<span class="path1"></span>
												<span class="path2"></span>
											</span>
											全选
										</span>
										<span href="" @click="delMu(1)" :class="{noSelected : !isSel}">
											<link rel="stylesheet" class="icon-shanchu">删除
										</span>
									</div>
								</li>
								<li>
									您有<span>{{ invalid_counts }}</span>个失效商品
									<span :class="{delFailure : invalid_counts == 0}" @click="delMu(0)">全部删除</span>
								</li>
							</ul>
							<ul class="buyerFootprint-right-container-list-main" v-for="(footprints,index1,i) in footprintsObj" v-if="footprints">
								<li>
									<span>{{ index1 }}</span>浏览了<b>{{ date_counts[index1] }}</b>件宝贝
								</li>
								<li>
									<ul>
										<li :class="[batch ? 'batch' : 'noBatch']" v-for="(list,index2) in footprints">
											<!-- 让i有一个遮罩层  以免点击事件需要加许多判断的条件 -->
											<i @click="_select(index1,index2)"></i>
											<div :class="{active : isSelectObj[index1][index2]}">
												<a :href="list.item && './detail.html?'+list.item.num_iid" target="_blank">
													<img :src="list.item && list.item.pic_url" alt="足迹图片">
												</a>
												<!-- 不是批量管理 -->
												<div class="noBatch-icon" v-if="!batch">
													<link rel="stylesheet" class="icon-shanchu" @click="del($event,list.id,index1,index2)">
													<link rel="stylesheet" class="icon-dianpu">
												</div>
												<!-- 批量管理 -->
												<div class="batch-icon" v-if="batch">
													<!-- <span rel="stylesheet" class="icon-shubiaoyiru" v-if="!isSelectObj[index1][index2]"></span> -->
													<span rel="stylesheet" :class="[isSelectObj[index1][index2]? 'icon-xuanzhong' : 'icon-shubiaoyiru']">
														<span class="path1"></span>
														<span class="path2"></span>
													</span>
												</div>
											</div>
											<a :href="list.item && './detail.html?'+list.item.num_iid" target="_blank">{{ list.item && list.item.title }}</a>
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
		<div v-if="showModal" class="modal-mask">
	    <div class="modal-wrapper">
	      <div class="modal-container">
	        <div class="modal-header">
	        	<slot name="body">
	        		<span class="icon-wenhao"></span>
	          	{{ isFailure ? '删除我的足迹失效商品' : '删除我的足迹商品'}}
	        	</slot>
	        	<span class="icon-cha" @click="closeModal"></span>
	        </div>

	        <div class="modal-body">
	          <slot name="body">
	            {{ isFailure ? '确定删除全部的失效商品吗？' : '确定要删除选中的商品吗？'}}
	          </slot>
	        </div>

	        <div class="modal-footer">
	          <slot name="footer">
	          	<button @click="showModal = false" class="cancel">取<span class="em"></span>消</button>
	          	<button @click="delMultiple(0)" v-if="isFailure" class="determine">确<span class="em"></span>定</button>
	          	<button @click="delMultiple(1)" v-if="!isFailure" class="determine">确<span class="em"></span>定</button>
	          </slot>
	        </div>
	      </div>
	    </div>
	  </div>
 	</div>
	<footerComponent></footerComponent>
	<goTop></goTop>
</div>
</template>

<script>
	import Vue from 'vue'
	import BuyerCenterHeader from 'components/BuyerCenterHeader.vue'
	import footerComponent from 'components/footer.vue'
	import BuyerCenterSideBar from 'components/BuyerCenterSideBar.vue'
	import goTop from 'components/goTop'
	import CkPagination from 'components/CkPagination'

	
	export default {
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar,
	  	goTop,
	  	CkPagination
	  },
	  data () {
	    return {
	    	footprintsObj: {},
	    	isSelectObj: {},
	    	nums: 1,
	    	isAjax: true,
	    	date_counts: null,
	    	isAllChoose: false,
	    	isRequest: false,
	    	invalid_counts: null,
	    	total_entries: null,
	    	batch: false,
	    	showModal: false,
	    	isFailure: false,
	    	isSel: false,
	    	pageNum: 6,
	    	pages: 8
	    	
	    }
	  },
	  mounted () {
	  	this.$http.get('/api/footprints?page_size=20&page='+this.nums)
	  	.then(function (res) {
	  		this.date_counts = res.data.date_counts
	  		this.invalid_counts = res.data.invalid_counts
	  		this.total_entries = res.data.total_entries

	  		for(var i=0; i<res.data.data.length ; i++){
	  			if( res.data.data[i].item){
		  			if(!this.footprintsObj[res.data.data[i].date]){
		  				this.footprintsObj[res.data.data[i].date] = []
		  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])

		  				this.isSelectObj[res.data.data[i].date] = []
		  				this.isSelectObj[res.data.data[i].date].push(false)
		  			}else{
		  				this.footprintsObj[res.data.data[i].date].push(res.data.data[i])

		  				this.isSelectObj[res.data.data[i].date].push(false)
		  			}
	  			}else{
	  				this.date_counts[res.data.data[i]]--
	  			}
	  		}
	  		this.nums++
	  		// 防止第一次请求的时候  滚轮到达底部直接进行第二次刷新
	  		this.isRequest = true
	  	},
	  	function (res) {
	  		console.log(res)
	  	})

	  	// 页面到达底部加载更多
    	var me = this
    	$(window).bind("scroll", function(){
			  var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop())
			  // 判断滚动条是否到达指点位置
		  	if ($(document).height() <= totalheight + 400 && me.isRequest){
		  		// 防止连续请求，加载一次后先停止
		  		if(me.isAjax){
		  			me.isAjax = false
			    	me.$http.get('/api/footprints?page_size=20&page='+me.nums)
				  	.then(function (res) {
				  		me.date_counts = res.data.date_counts
	  					me.invalid_counts = res.data.invalid_counts
	  					me.total_entries = res.data.total_entries

				  		if(res.data.data.length == 0){
				  			me.isRequest = false
				  		}
				  		for(var i=0; i<res.data.data.length ; i++){
				  			if( res.data.data[i].item){
					  			if(!me.footprintsObj[res.data.data[i].date]){
					  				me.footprintsObj[res.data.data[i].date] = []
					  				me.footprintsObj[res.data.data[i].date].push(res.data.data[i])
					  				me.isSelectObj[res.data.data[i].date] = []
					  				me.isSelectObj[res.data.data[i].date].push(false)
					  			}else{
					  				me.footprintsObj[res.data.data[i].date].push(res.data.data[i])
					  				me.isSelectObj[res.data.data[i].date].push(false)
					  			}
				  			}else{
	  							this.date_counts[res.data.data[i]]--
				  			}
				  		}
				  		// 页面加载一次后先停止0.5s
				  		setTimeout(function(){
					  		me.isAjax = true
		  					me.nums++
					  	},500)
				  	},
				  	function (res) {
				  		console.log(res)
				  	})
		  		}
		  		
		  	}
			});
	  },
	  methods: {
	  	// 关闭模态框
	  	closeModal () {
	  		this.showModal = false
	  	},
	  	// 全选
	  	_isAllChoose () {
	  		this.isAllChoose = !this.isAllChoose
	  		if(this.isAllChoose){
		  		for(var key in this.isSelectObj){
		  			for(var i=0;i<this.isSelectObj[key].length;i++){
		  				if(!this.isSelectObj[key][i]){
		  					this.$set(this.isSelectObj[key],i,true)
		  				}
		  			}
		  		}
	  		}else{
		  		for(var key in this.isSelectObj){
		  			for(var i=0;i<this.isSelectObj[key].length;i++){
		  				if(this.isSelectObj[key][i]){
		  					this.$set(this.isSelectObj[key],i,false)
		  				}
		  			}
		  		}
	  		}
	  		this._isSel()
	  	},
	  	// 批量管理
	  	_batch () {
	  		this.batch = !this.batch
	  		this.isAllChoose = false
	  		this.isSel = false
	  		if(!this.batch){
		  		for(var key in this.isSelectObj){
		  			for(var i=0;i<this.isSelectObj[key].length;i++){
		  				if(this.isSelectObj[key][i]){
		  					this.$set(this.isSelectObj[key],i,false)
		  				}
		  			}
		  		}
	  		}
	  	},
	  	// 单选
	  	_select (index1,index2) {
	  		this.$set(this.isSelectObj[index1],index2,!this.isSelectObj[index1][index2])
	  		this.batch = !this.batch
	  		this.batch = !this.batch
	  		this._isSel()
	  		for(var key in this.isSelectObj){
	  			for(var i=0;i<this.isSelectObj[key].length;i++){
	  				if(!this.isSelectObj[key][i]){
	  					this.isAllChoose = false
	  					return
	  				}
	  			}
	  		}
	  		this.isAllChoose = true
	  	},
	  	// 是否有选中
	  	_isSel () {
	  		for(var key in this.isSelectObj){
	  			for(var i=0;i<this.isSelectObj[key].length;i++){
	  				if(this.isSelectObj[key][i]){
	  					this.isSel = true
	  					return
	  				}
	  			}
	  		}
	  		this.isSel = false
	  	},
	  	// 导航栏的切换
	  	_footNav (e,n) {
	  		var el = e.target
	  		$(el).addClass('active').siblings('.active').removeClass('active')
	  	},
	  	// 删除单个
	  	del (e,id,index1,index2) {
	  		var me = this
	  		this.$http.delete('/api/footprints/'+ id)
          .then(
          function(res){
            me.footprintsObj[index1].splice(index2,1)
            me.isSelectObj[index1].splice(index2,1)
            me.date_counts[index1]--
            me.total_entries--
            if(me.footprintsObj[index1].length == 0){
            	me.footprintsObj[index1] = undefined
            	me.isSelectObj[index1] = undefined
            }
          },function(err){
            console.log('删除失败')
          }
        )
	  	},
	  	// 是否执行删除多个函数
	  	delMu (n) {
	  		if(n == 0){
	  			if(this.invalid_counts != 0){
	  				this.showModal = true
	  				this.isFailure = true
	  			}
	  		}else{
	  			if(this.isSel){
	  				this.showModal = true
	  				this.isFailure = false
	  			}
	  		}
	  	},
	  	// 删除多个  失效或者选中的
	  	delMultiple (n) {
	  		var me = this
	  		if(n == 0){
		  		this.$http.get('/api/footprints/deleteInvalid')
	          .then(
	          function(res){
	          	me.total_entries -= me.invalid_counts
	            me.invalid_counts = 0
	          },function(err){
	            console.log('删除失败')
	          }
	        )
	  		}else{
	  			var urlId = [],me = this
		  		for(var key in this.isSelectObj){
		  			for(var i=0; i<this.isSelectObj[key].length; i++){
		  				if(this.isSelectObj[key][i]){
		  					urlId.push(this.footprintsObj[key][i].id)
		  				}
		  			}
		  		}
		  		urlId = urlId.join(',')
		  		this.$http.delete('/api/footprints/'+ urlId)
	          .then(
	          function(res){
	          	for(var key in me.isSelectObj){
				  			for(var i=me.isSelectObj[key].length-1; i>=0; i--){
				  				if(me.isSelectObj[key][i]){
				  					me.footprintsObj[key].splice(i,1)
				  					me.isSelectObj[key].splice(i,1)
				  					me.date_counts[key]--
				  					me.total_entries--
				            if(me.footprintsObj[key].length == 0){
				            	me.footprintsObj[key] = undefined
				            	me.isSelectObj[key] = undefined
				            }
				  				}
				  			}
				  		}

	          },function(err){
	            console.log('删除失败')
	          }
	        )
		  	}
		  	this.showModal = false
	  	}
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->