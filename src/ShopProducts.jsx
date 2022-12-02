import { Link } from "react-router-dom";

function ShopProducts() {
	return (
		<div className="shop-container">
			<section class="page-header">
				<div class="overly"></div>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6">
							<div class="content text-center">
								<h1 class="mb-3">Vendors Name</h1>
								<p>
									Hath after appear tree great fruitful green dominion moveth
									sixth abundantly image that midst of god day multiply you’ll
									which
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="products-shop section">
				<div class="container">
					<div class="row">
						<div class="col-md-9">
							<div class="row align-items-center">
								<div class="col-lg-12 mb-4 mb-lg-0">
									<div class="section-title">
										<h2 class="d-block text-left-sm">Vendors</h2>

										<div class="heading d-flex justify-content-between mb-3">
											<p class="result-count mb-0">
												{" "}
												Showing 1–6 of 17 results
											</p>
											<form class="ordering " method="get">
												<div class="form-group mb-4">
													<input
														type="text"
														class="form-control"
														placeholder="Filter"
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">Floral Kirby</Link>
											</h2>
											<span class="price">$329.10</span>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/111.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">
													Open knit switer
												</Link>
											</h2>
											<span class="price">$29.10</span>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/222.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">
													Official trendy
												</Link>
											</h2>
											<span class="price">$350.00 – $355.00</span>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">Frock short</Link>
											</h2>
											<span class="price">$249</span>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/444.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">Sleeve dress</Link>
											</h2>
											<span class="price">$59.10</span>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div class="product">
										<div class="product-wrap">
											<Link to="/single-product/24232342">
												<img
													class="img-fluid w-100 mb-3"
													src="../assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div class="product-info">
											<h2 class="product-title h5 mb-0">
												<Link to="/single-product/24232342">Stylish dress</Link>
											</h2>
											<span class="price">$99.00</span>
										</div>
									</div>
								</div>

								<div class="col-12">
									<nav aria-label="Page navigation">
										<ul class="pagination">
											<li class="page-item">
												<a class="page-link" href="#" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
												</a>
											</li>
											<li class="page-item active">
												<a class="page-link" href="#">
													1
												</a>
											</li>
											<li class="page-item">
												<a class="page-link" href="#">
													2
												</a>
											</li>
											<li class="page-item">
												<a class="page-link" href="#">
													3
												</a>
											</li>
											<li class="page-item">
												<a class="page-link" href="#" aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<form class="mb-5">
								<section class="widget widget-sizes mb-5">
									<h3 class="widget-title h4 mb-4">Shop by Sizes</h3>
									<div class="custom-control custom-checkbox">
										<input
											type="radio"
											class="custom-control-input"
											id="size1"
											checked
										/>
										<label class="custom-control-label" for="size1">
											L Large
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input
											type="radio"
											class="custom-control-input"
											id="size2"
										/>
										<label class="custom-control-label" for="size2">
											XL Extra Large
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input
											type="radio"
											class="custom-control-input"
											id="size3"
										/>
										<label class="custom-control-label" for="size3">
											M Medium
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input
											type="radio"
											class="custom-control-input"
											id="size4"
										/>
										<label class="custom-control-label" for="size4">
											S Small
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input
											type="radio"
											class="custom-control-input"
											id="size5"
										/>
										<label class="custom-control-label" for="size5">
											XS Extra Small
										</label>
									</div>
								</section>

								<button type="button" class="btn btn-black btn-small">
									Filter
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ShopProducts;
