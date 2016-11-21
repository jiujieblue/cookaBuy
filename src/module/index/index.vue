<template>
	<div>
		<headerComponent></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="index">
						<div class="index-top">
							<div class="index-category">
								<div class="index-category-block">
									<a href="#" class="index-category-lv-1">女装</a>
									<a href="#" class="index-category-lv-2">连衣裙</a>
									<a href="#" class="index-category-lv-2">牛仔装</a>
									<a href="#" class="index-category-lv-2">毛呢外套</a>
									<a href="#" class="index-category-lv-2">短外套</a>
									<a href="#" class="index-category-lv-2">卫衣</a>
									<a href="#" class="index-category-lv-2">马甲</a>
									<a href="#" class="index-category-lv-2">T恤</a>
									<a href="#" class="index-category-lv-2">衬衫</a>
								</div>
								<div class="index-category-block">
									<a href="#" class="index-category-lv-1">男装</a>
									<a href="#" class="index-category-lv-2">羽绒服</a>
									<a href="#" class="index-category-lv-2">毛呢大衣</a>
									<a href="#" class="index-category-lv-2">棉衣</a>
									<a href="#" class="index-category-lv-2">毛衣</a>
									<a href="#" class="index-category-lv-2">牛仔裤</a>
									<a href="#" class="index-category-lv-2">马甲</a>
									<a href="#" class="index-category-lv-2">T恤</a>
									<a href="#" class="index-category-lv-2">衬衫</a>
								</div>
								<div class="index-category-block">
									<a href="#" class="index-category-lv-1">家具</a>
									<a href="#" class="index-category-lv-2">文胸</a>
									<a href="#" class="index-category-lv-2">睡裙</a>
									<a href="#" class="index-category-lv-2">睡袍</a>
									<a href="#" class="index-category-lv-2">吊带</a>
									<a href="#" class="index-category-lv-2">保暖</a>
									<a href="#" class="index-category-lv-2">抹胸</a>
									<a href="#" class="index-category-lv-2">内裤</a>
								</div>
								<div class="index-category-block">
									<a href="#" class="index-category-lv-1">女鞋</a>
									<a href="#" class="index-category-lv-2">低帮鞋</a>
									<a href="#" class="index-category-lv-2">高帮鞋</a>
									<a href="#" class="index-category-lv-2">靴子</a>
									<a href="#" class="index-category-lv-2">帆布鞋</a>
									<a href="#" class="index-category-lv-2">拖鞋</a>
									<a href="#" class="index-category-lv-2">凉鞋</a>
								</div>
							</div>
							<div class="index-carousel" >
								<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
										<!-- Indicators -->
									<ol class="carousel-indicators">
										<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
										<li data-target="#carousel-example-generic" data-slide-to="1"></li>
										<li data-target="#carousel-example-generic" data-slide-to="2"></li>
									</ol>
									<!-- Wrapper for slides -->
									<div class="carousel-inner" role="listbox">
										<div class="item active">
											<img src="../../assets/images/indexCarousel01.jpg" alt="...">
										</div>
										<div class="item">
											<img src="../../assets/images/indexCarousel02.jpg" alt="...">
										</div>
										<div class="item">
											<img src="../../assets/images/indexCarousel01.jpg" alt="...">
										</div>
									</div>
									<!-- Controls -->
									<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
										<span class="glyphicon glyphicon-chevron-left"></span>
									</a>
									<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
										<span class="glyphicon glyphicon-chevron-right"></span>
									</a>
								</div>
							</div>
							<div class="index-note">
								<h4 class="index-note-title">
									<span class="icon-gonggao">商城公告</span>
									<a href="#" class="index-note-more">
										<span class="icon-gengduo"></span>
									</a>
								</h4>
								<div class="index-note-items">
									<a href="#" class="index-note-item" v-for="(announcementsItem, announcementsIndex) in announcements">
										[公告] {{announcementsItem.title}}
									</a>
									<!--<a href="#" class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>
									<a href="#" class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>-->
								</div>
							</div>
						</div>
						<hr />
						<!-- new -->
						<div class="index-block index-block-new">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								NEW
								</span>
								新品上架

								<a href="#" class="index-block-title-aside">
									换一批
									<span class="icon-huanyipi" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(productItem, productIndex) in products">
										<a href="#" class="index-product-link">
											<img :src="productItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{productItem.price}}
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												{{productItem.nick}}
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<!--<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>-->
								</div>
								<div class="right">
									<div class="carousel">
										<ul class="carousel-list">
											<li class="carousel-list-items" v-for="(sideproductItem, sideproductIndex) in sideproducts">
												<a href="#">
													<div class="product">
														<div class="img">
															<img :src="sideproductItem.pic_url">
														</div>
														<a href="#" ><span class="store">{{sideproductItem.nick}}</span></a>
														<span class="extra">市场  档口号</span>
													</div>
												</a>
											</li>
											<!--<li class="carousel-list-items">
												<a href="#">
													<div class="product">
														<div class="img">
															<img src="../../assets/images/test_avatar.png">
														</div>
														<a href="#"><span class="store">店铺名称</span></a>
														<span class="extra">市场  档口号</span>
													</div>
												</a>
											</li>
											<li class="carousel-list-items">
												<a href="#">
													<div class="product">
														<div class="img">
															<img src="../../assets/images/test_avatar.png">
														</div>
														<a href="#"><span class="store">店铺名称</span></a>
														<span class="extra">市场  档口号</span>
													</div>
												</a>
											</li>
											<li class="carousel-list-items">
												<a href="#">
													<div class="product">
														<div class="img">
															<img src="../../assets/images/test_avatar.png">
														</div>
														<a href="#"><span class="store">店铺名称</span></a>
														<span class="extra">市场  档口号</span>
													</div>
												</a>
											</li>
											<li class="carousel-list-items">
												<a href="#">
													<div class="product">
														<div class="img">
															<img src="../../assets/images/test_avatar.png">
														</div>
														<a href="#"><span class="store">店铺名称</span></a>
														<span class="extra">市场  档口号</span>
													</div>
												</a>
											</li>-->
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- hot -->
						<div class="index-block index-block-store">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								HOT
								</span>
								推荐店铺

								<a href="#" title="更多" class="index-block-title-aside index-block-title-aside-lg">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
                <!--<div class="index-store">
                  <div class="index-store-info">
                    <div class="index-store-name">
                      店铺名称
                    </div>
                    <div class="index-store-market">
                      市场 档口号
                    </div>

                    <a href="#" class="index-store-link">
                      进店逛逛
                    </a>
                  </div>
                  <a href="#" class="index-store-product">
                    <img src="../../assets/images/250x250.png" />
                  </a>
                </div>-->
                <div class="index-store" v-for="(storeItem, storeIndex) in stores">
                  <div class="index-store-info">
                    <div class="index-store-name">
                      {{storeItem.store_name}}
                    </div>
                    <div class="index-store-market">
                      {{storeItem.market}} {{storeItem.store_number}}
                    </div>

                    <a :href="storeItem.taobao_url" class="index-store-link">
                      进店逛逛
                    </a>
                  </div>
                  <a href="#" class="index-store-product">
                    <img :src="storeItem.store_logo" />
                  </a>
                </div>
							</div>
						</div>
						<!-- girl -->
						<div class="index-block index-block-girl">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								GIRL
								</span>
								女装

								<a href="#" title="更多" class="index-block-title-aside index-block-title-aside-lg">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- boy -->
						<div class="index-block index-block-boy">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								BOY
								</span>
								男装

								<a href="#" title="更多" class="index-block-title-aside index-block-title-aside-lg">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- maternit -->
						<div class="index-block index-block-maternit">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								MATERNIT
								</span>
								孕妇装

								<a href="#" title="更多" class="index-block-title-aside index-block-title-aside-lg">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- children -->
						<div class="index-block index-block-children">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								CHILDREN
								</span>
								童装

								<a href="#" title="更多" class="index-block-title-aside index-block-title-aside-lg">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product">
										<a href="#" class="index-product-link">
											<img src="../../assets/images/250x250.png" />
										</a>
										<div class="index-product-price">
											¥ 123
											<a href="#" class="index-product-fav" title="收藏商品" style="display:block">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a href="#" class="index-product-store">
												店铺名称
											</a>
											<span class="index-product-market">
												市场 档口号
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="#" title="返回页面顶部" class="index-go-to-top">
							<span class="icon-zhiding" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<footerComponent></footerComponent>
	</div>
</template>

<script>
import Vue from 'vue'
import headerComponent from 'components/header'
import footerComponent from 'components/footer'
import 'bootstrap/dist/js/bootstrap.js'
const VueResource = require('vue-resource')
Vue.use(VueResource)

export default {
	data () {
    	return {
        recommend_data:[],
        stores:[],
        products:[],
        sideproducts:[],
        announcements:[]
    	}
	},
	components:{
		headerComponent,
		footerComponent
	},
	mounted(){
		this.$http.get('/api/recommend_stores')
		.then(
			function(res){
				//console.log(res.data.data)
				this.recommend_data = res.data.data
        for (var i = 0 ; i < this.recommend_data.length ; i ++){
          this.stores.push(this.recommend_data[i].store)
        }
        //console.log(this.stores)
			},
			function(err){
				console.log(err)
			}
		)
     this.$http.get('/api/recommends'+'?page=1&location=100&size=5')
       .then(
           function(res){
             //console.log(res)
             this.products = res.data.data
             //console.log(this.products)
           },function(err){
               console.log(err)
         }
       )
    this.$http.get('/api/recommends'+'?page=1&location=200&size=5')
      .then(
        function(res){
          //console.log(res)
          this.sideproducts = res.data.data
          //console.log(this.sideproducts)
        },function(err){
          console.log(err)
        }
      )
    this.$http.get('/api/bulletins'+'?type=0')
      .then(
        function(res){
          //console.log(res)
          this.announcements = res.data.data
          console.log(this.announcements)
        },function(err){
          console.log(err)
        }
      )
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/css/icons.css';
@import "../../assets/less/index.less";
@import "../../assets/less/public.less";
@import "../../assets/less/C.less";
</style>
