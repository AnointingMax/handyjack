import { Link } from "react-router-dom";

function Shop() {
	return (
		<div className="shop-container">
			<section className="page-header">
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="content text-center">
								<h1 className="mb-3">Vendors</h1>
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

			<section className="products-shop section">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<div className="row align-items-center">
								<div className="col-lg-12 mb-4 mb-lg-0">
									<div className="section-title">
										<h2 className="d-block text-left-sm">Vendors</h2>

										<div className="heading d-flex justify-content-between mb-3">
											<p className="result-count mb-0">
												{" "}
												Showing 1–6 of 17 results
											</p>
											<form className="ordering " method="get">
												<div className="form-group mb-4">
													<input
														type="text"
														className="form-control"
														placeholder="Filter"
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Floral Kirby</Link>
											</h2>
											<span className="price">$329.10</span>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/111.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Open knit switer</Link>
											</h2>
											<span className="price">$29.10</span>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/222.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Official trendy</Link>
											</h2>
											<span className="price">$350.00 – $355.00</span>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Frock short</Link>
											</h2>
											<span className="price">$249</span>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/444.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Sleeve dress</Link>
											</h2>
											<span className="price">$59.10</span>
										</div>
									</div>
								</div>

								<div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
									<div className="product">
										<div className="product-wrap">
											<Link to="/vendors/121">
												<img
													className="img-fluid w-100 mb-3"
													src="assets/images/322.jpg"
													alt="product-img"
												/>
											</Link>
										</div>

										<div className="product-info">
											<h2 className="product-title h5 mb-0">
												<Link to="/vendors/121">Stylish dress</Link>
											</h2>
											<span className="price">$99.00</span>
										</div>
									</div>
								</div>

								<div className="col-12">
									<nav aria-label="Page navigation">
										<ul className="pagination">
											<li className="page-item">
												<a className="page-link" href="#" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
												</a>
											</li>
											<li className="page-item active">
												<a className="page-link" href="#">
													1
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													2
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													3
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#" aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<form className="mb-5">
								<section className="widget widget-sizes mb-5">
									<h3 className="widget-title h4 mb-4">Shop by Sizes</h3>
									<div className="custom-control custom-checkbox">
										<input
											type="radio"
											className="custom-control-input"
											id="size1"
											checked
										/>
										<label className="custom-control-label" htmlFor="size1">
											L Large
										</label>
									</div>
									<div className="custom-control custom-checkbox">
										<input
											type="radio"
											className="custom-control-input"
											id="size2"
										/>
										<label className="custom-control-label" htmlFor="size2">
											XL Extra Large
										</label>
									</div>
									<div className="custom-control custom-checkbox">
										<input
											type="radio"
											className="custom-control-input"
											id="size3"
										/>
										<label className="custom-control-label" htmlFor="size3">
											M Medium
										</label>
									</div>
									<div className="custom-control custom-checkbox">
										<input
											type="radio"
											className="custom-control-input"
											id="size4"
										/>
										<label className="custom-control-label" htmlFor="size4">
											S Small
										</label>
									</div>
									<div className="custom-control custom-checkbox">
										<input
											type="radio"
											className="custom-control-input"
											id="size5"
										/>
										<label className="custom-control-label" htmlFor="size5">
											XS Extra Small
										</label>
									</div>
								</section>

								<button type="button" className="btn btn-black btn-small">
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
export default Shop;
