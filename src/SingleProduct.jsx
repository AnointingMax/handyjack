function SingleProduct() {
	return (
		<div className="single-product-container">
			<section class="single-product">
				<div class="container">
					<div class="row">
						<div class="col-md-5">
							<div class="single-product-slider">
								<div
									class="carousel slide"
									data-ride="carousel"
									id="single-product-slider"
								>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img
												src="../assets/images/product-3.jpg"
												alt=""
												class="img-fluid"
											/>
										</div>
										<div class="carousel-item">
											<img
												src="../assets/images/product-2.jpg"
												alt=""
												class="img-fluid"
											/>
										</div>
										<div class="carousel-item ">
											<img
												src="../assets/images/product-1.jpg"
												alt=""
												class="img-fluid"
											/>
										</div>
									</div>

									<ol class="carousel-indicators">
										<li
											data-target="#single-product-slider"
											data-slide-to="0"
											class="active"
										>
											<img
												src="../assets/images/product-3.jpg"
												alt=""
												class="img-fluid"
											/>
										</li>
										<li data-target="#single-product-slider" data-slide-to="1">
											<img
												src="../assets/images/product-2.jpg"
												alt=""
												class="img-fluid"
											/>
										</li>
										<li data-target="#single-product-slider" data-slide-to="2">
											<img
												src="../assets/images/product-1.jpg"
												alt=""
												class="img-fluid"
											/>
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div class="col-md-7">
							<div class="single-product-details mt-5 mt-lg-0">
								<h2>Eclipse Crossbody</h2>
								<div class="sku_wrapper mb-4">
									SKU: <span class="text-muted">AB1563456789 </span>
								</div>

								<hr />

								<h3 class="product-price">
									$300 <del>$119.90</del>
								</h3>

								<p class="product-description my-4 ">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Laborum ipsum dicta quod, quia doloremque aut deserunt commodi
									quis. Totam a consequatur beatae nostrum, earum consequuntur?
									Eveniet consequatur ipsum dicta recusandae.
								</p>

								<form class="cart" action="#" method="post">
									<div class="quantity d-flex align-items-center">
										<input
											type="number"
											id="#"
											class="input-text qty text form-control w-25 mr-3"
											step="1"
											min="1"
											max="9"
											name="quantity"
											value="1"
											title="Qty"
											size="4"
										/>
										<a href="#" class="btn btn-main btn-small">
											Add to cart
										</a>
									</div>
								</form>

								<div class="products-meta mt-4">
									<div class="product-category d-flex align-items-center">
										<span class="font-weight-bold text-capitalize product-meta-title">
											Categories :
										</span>
										<a href="#">Products , </a>
										<a href="#">Soap</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-12">
							<nav class="product-info-tabs wc-tabs mt-5 mb-5">
								<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
									<a
										class="nav-item nav-link active"
										id="nav-home-tab"
										data-toggle="tab"
										href="#nav-home"
										role="tab"
										aria-controls="nav-home"
										aria-selected="true"
									>
										Description
									</a>
								</div>
							</nav>

							<div class="tab-content" id="nav-tabContent">
								<div
									class="tab-pane fade show active"
									id="nav-home"
									role="tabpanel"
									aria-labelledby="nav-home-tab"
								>
									<p>
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas. Vestibulum tortor quam,
										feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
										eu libero sit amet quam egestas semper. Aenean ultricies mi
										vitae est. Mauris placerat eleifend leo.
									</p>

									<h4>Product Features</h4>

									<ul class="">
										<li>
											Mapped with 3M™ Thinsulate™ Insulation [40G Body / Sleeves
											/ Hood]
										</li>
										<li>Embossed Taffeta Lining</li>
										<li>
											DRYRIDE Durashell™ 2-Layer Oxford Fabric [10,000MM,
											5,000G]
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default SingleProduct;
