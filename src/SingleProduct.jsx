import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetails } from "./api";
import { IMAGE_BASEURL } from "./constants";
import { useAppContext } from "./context/AppContext";
import Loader from "./Loader";

function SingleProduct() {
	const { id } = useParams();
	const { dispatch } = useAppContext();

	const [quantity, setQuantity] = useState(1);

	const { data, isLoading } = useQuery(["product", id], () =>
		getProductDetails(id)
	);

	if (isLoading) return <Loader />;

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
										{data?.images?.multipleImages?.key.map((_, index) => (
											<div
												className={`carousel-item ${index === 0 && "active"}`}
												key={index}
											>
												<img
													src={`${IMAGE_BASEURL}${data?.images?.multipleImages.bucket[index]}/${data?.images?.multipleImages.key[index]}`}
													alt={`product-${index}`}
													className="img-fluid"
												/>
											</div>
										))}
									</div>

									<ol className="carousel-indicators">
										{data?.images?.multipleImages?.key.map((_, index) => (
											<li
												data-target="#single-product-slider"
												data-slide-to={index}
												key={index}
												className="active"
											>
												<img
													src={`${IMAGE_BASEURL}${data?.images?.multipleImages.bucket[index]}/${data?.images?.multipleImages.key[index]}`}
													alt={`product-indicator-${index}`}
													className="img-fluid"
												/>
											</li>
										))}
									</ol>
								</div>
							</div>
						</div>

						<div className="col-md-7">
							<div className="single-product-details mt-5 mt-lg-0">
								<h2>{data.name}</h2>
								{/* <div className="sku_wrapper mb-4">
									SKU: <span className="text-muted">AB1563456789 </span>
								</div> */}

								<hr />

								<h3 className="product-price">
									&#8358; {data.price.toLocaleString()}
									{/* $300 <del>$119.90</del> */}
								</h3>

								<div
									className="product-description my-4"
									dangerouslySetInnerHTML={{ __html: data?.description }}
								/>

								<div className="quantity d-flex align-items-center">
									<input
										type="number"
										className="input-text qty text form-control w-25 mr-3"
										step="1"
										min="1"
										name="quantity"
										onChange={(event) =>
											setQuantity(event.target.valueAsNumber)
										}
										value={quantity}
										title="Qty"
										size="4"
									/>
									<button
										className="btn btn-main btn-small"
										onClick={() =>
											dispatch({
												type: "ADD",
												payload: { product: data, quantity },
											})
										}
									>
										Add to cart
									</button>
								</div>

								<div className="products-meta mt-4">
									<div className="product-category d-flex align-items-center">
										<span className="font-weight-bold text-capitalize product-meta-title">
											Categories :
										</span>
										{data.categories.map((category, index) => (
											<Link to={`/category/${category.slug}`} key={index}>
												{index !== 0 ? " , " : ""} {category.name}
											</Link>
										))}
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
									<div
										className="product-description my-4"
										dangerouslySetInnerHTML={{ __html: data?.long_description }}
									/>
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
