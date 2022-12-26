function SingleProduct() {
	return (
		<div className="single-product-container">
			<section className="single-product">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="single-product-slider">
								<div
									className="carousel slide"
									data-ride="carousel"
									id="single-product-slider"
								>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src="../assets/images/product-3.jpg"
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="carousel-item">
											<img
												src="../assets/images/product-2.jpg"
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="carousel-item ">
											<img
												src="../assets/images/product-1.jpg"
												alt=""
												className="img-fluid"
											/>
										</div>
									</div>

									<ol className="carousel-indicators">
										<li
											data-target="#single-product-slider"
											data-slide-to="0"
											className="active"
										>
											<img
												src="../assets/images/product-3.jpg"
												alt=""
												className="img-fluid"
											/>
										</li>
										<li data-target="#single-product-slider" data-slide-to="1">
											<img
												src="../assets/images/product-2.jpg"
												alt=""
												className="img-fluid"
											/>
										</li>
										<li data-target="#single-product-slider" data-slide-to="2">
											<img
												src="../assets/images/product-1.jpg"
												alt=""
												className="img-fluid"
											/>
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div className="col-md-7">
							<div className="single-product-details mt-5 mt-lg-0">
								<h2>Eclipse Crossbody</h2>
								<div className="sku_wrapper mb-4">
									SKU: <span className="text-muted">AB1563456789 </span>
								</div>

								<hr />

								<h3 className="product-price">
									$300 <del>$119.90</del>
								</h3>

								<p className="product-description my-4 ">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Laborum ipsum dicta quod, quia doloremque aut deserunt commodi
									quis. Totam a consequatur beatae nostrum, earum consequuntur?
									Eveniet consequatur ipsum dicta recusandae.
								</p>

								<form className="cart" action="#" method="post">
									<div className="quantity d-flex align-items-center">
										<input
											type="number"
											id="#"
											className="input-text qty text form-control w-25 mr-3"
											step="1"
											min="1"
											max="9"
											name="quantity"
											value="1"
											title="Qty"
											size="4"
										/>
										<a href="#" className="btn btn-main btn-small">
											Add to cart
										</a>
									</div>
								</form>

								<div className="products-meta mt-4">
									<div className="product-category d-flex align-items-center">
										<span className="font-weight-bold text-capitalize product-meta-title">
											Categories :
										</span>
										<a href="#">Products , </a>
										<a href="#">Soap</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<nav className="product-info-tabs wc-tabs mt-5 mb-5">
								<div
									className="nav nav-tabs nav-fill"
									id="nav-tab"
									role="tablist"
								>
									<a
										className="nav-item nav-link active"
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

							<div className="tab-content" id="nav-tabContent">
								<div
									className="tab-pane fade show active"
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

									<ul className="">
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
