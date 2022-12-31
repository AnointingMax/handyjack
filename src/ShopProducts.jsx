import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getShopDetails, getShopProducts } from "./api";
import { IMAGE_BASEURL } from "./constants";
import Loader from "./Loader";

function ShopProducts() {
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

	const [filter, setFilter] = useState("");

	const { data, isLoading } = useQuery(["shop", id], () => getShopDetails(id));
	const { data: products, isLoading: isProductsLoading } = useQuery(
		["shop-products", id, filter, searchParams.get("page")],
		() => getShopProducts(id, filter, searchParams.get("page"))
	);

	const handlePageClick = (event) => {
		searchParams.set("page", event.selected + 1);
		setSearchParams(searchParams);
	};

	if (isLoading || isProductsLoading) return <Loader />;

	return (
		<div className="shop-container">
			<section className="page-header">
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="content text-center">
								<h1 className="mb-3">{data?.userName}</h1>
								<div dangerouslySetInnerHTML={{ __html: data?.description }} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="products-shop section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="row align-items-center">
								<div className="col-lg-12 mb-4 mb-lg-0">
									<div className="section-title">
										<h2 className="d-block text-left-sm">Vendors</h2>

										<div className="heading d-flex justify-content-between mb-3">
											{/* <p className="result-count mb-0">
												Showing 1–6 of 17 results
											</p> */}
											<form className="ordering ml-auto" method="get">
												<div className="form-group mb-4">
													<input
														type="text"
														className="form-control"
														placeholder="Filter"
														name="filter"
														value={filter}
														onChange={(event) => setFilter(event.target.value)}
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								{!!products.products.length ? (
									<>
										{products.products.map((product, index) => (
											<div
												className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5"
												key={index}
											>
												<div className="product">
													<div className="product-wrap">
														<Link to={`/product/${product._id}`}>
															<img
																className="img-fluid w-100 mb-3 imege"
																src={`${IMAGE_BASEURL}${product.images.multipleImages.bucket[0]}/${product.images.multipleImages.key[0]}`}
																alt="product-img"
															/>
														</Link>
													</div>

													<div className="product-info">
														<h2 className="product-title h5 mb-0">
															<Link to={`/product/${product._id}`}>
																{product.name}
															</Link>
														</h2>
														<span className="price">
															&#8358; {product.price.toLocaleString()}
														</span>
													</div>
												</div>
											</div>
										))}

										<div className="col-12">
											<ReactPaginate
												breakLabel="..."
												nextLabel="&raquo;"
												onPageChange={handlePageClick}
												pageRangeDisplayed={5}
												pageCount={products?.totalPages}
												previousLabel="&laquo;"
												renderOnZeroPageCount={null}
												pageClassName="page-item"
												className="pagination"
												pageLinkClassName="page-link"
												activeClassName="active"
												nextClassName="page-item"
												previousClassName="page-item"
												nextLinkClassName="page-link"
												previousLinkClassName="page-link"
											/>
										</div>
									</>
								) : (
									<div className="col-12 d-flex justify-content-center">
										Nothing to see
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default ShopProducts;
