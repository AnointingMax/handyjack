import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getShopDetails, getShopProducts } from "./api";
import { IMAGE_BASEURL } from "./constants";
import Loader from "./Loader";
import defaultIMG from "./assets/images/adsv.jpg";
import { DebounceInput } from "react-debounce-input";

function ShopProducts() {
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

	const page = searchParams.get("page");

	const [filter, setFilter] = useState("");

	const { data, isLoading } = useQuery(["shop", id], () => getShopDetails(id));
	const { data: products, isLoading: isProductsLoading } = useQuery(
		["shop-products", id, filter, page],
		() => getShopProducts(id, filter, page)
	);

	const handlePageClick = (event) => {
		searchParams.set("page", event.selected + 1);
		setSearchParams(searchParams);
	};

	if (isLoading || isProductsLoading) return <Loader />;

	return (
		<div className="shop-container">
			<section className="page-header" style={{ paddingBlock: 30 }}>
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="d-flex flex-column align-items-center">
								<div className="d-flex gap-2 justify-content-center align-items-center">
									<img
										className="img-fluid imege-2"
										src={`${IMAGE_BASEURL}${data.logo?.bucket[0]}/${data.logo?.key[0]}`}
										alt="product-img"
									/>
									<h1 className="mb-3">{data?.userName}</h1>
								</div>
								<div dangerouslySetInnerHTML={{ __html: data?.description }} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="products-shop section" style={{ paddingTop: 40 }}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="row align-items-center">
								<div className="col-lg-12 mb-lg-0">
									<div className="section-title">
										<div className="heading d-flex justify-content-between">
											<form className="ordering ml-auto" method="get">
												<div className="form-group">
													<DebounceInput
														type="text"
														placeholder="Filter"
														className="form-control"
														name="filter"
														value={filter}
														onChange={(event) => setFilter(event.target.value)}
														debounceTimeout={700}
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
												className="col-lg-4 col-12 col-md-6 col-sm-6"
												key={index}
											>
												<div className="product">
													<div className="product-wrap">
														<Link to={`/product/${product._id}`}>
															<img
																className="img-fluid w-100 mb-3 imege"
																src={
																	product.images
																		? `${IMAGE_BASEURL}${product.images?.bucket[0]}/${product.images?.key[0]}`
																		: defaultIMG
																}
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
