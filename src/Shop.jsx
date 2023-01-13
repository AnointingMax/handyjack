import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import ReactPaginate from "react-paginate";
import { Link, useSearchParams } from "react-router-dom";
import { getShops } from "./api";
import { convertToURL, IMAGE_BASEURL } from "./constants";
import Loader from "./Loader";

function Shop() {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

	const [filter, setFilter] = useState("");
	const { data, isLoading } = useQuery(
		["shops", filter, searchParams.get("page")],
		() => getShops(filter, searchParams.get("page"))
	);

	const handlePageClick = (event) => {
		searchParams.set("page", event.selected + 1);
		setSearchParams(searchParams);
	};

	return (
		<div className="shop-container">
			<section className="page-header">
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="content text-center">
								<h1 className="mb-3">Vendors</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="products-shop section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row align-items-center">
								<div className="col-lg-12 mb-4 mb-lg-0">
									<div className="section-title">
										<div className="heading d-flex justify-content-between mb-3">
											<form className="ordering ml-auto" method="get">
												<div className="form-group mb-4">
													<DebounceInput
														type="text"
														placeholder="Filter"
														className="form-control"
														name="filter"
														value={filter}
														onChange={(event) => setFilter(event.target.value)}
														debounceTimeout={500}
													/>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							{isLoading ? (
								<Loader />
							) : (
								<div className="row">
									{data?.shops?.map((shop, index) => (
										<div
											className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5"
											key={index}
										>
											<div className="product">
												<div className="product-wrap">
													<Link to={`/vendors/${convertToURL(shop.userName)}`}>
														<img
															className="img-fluid w-100 mb-3 imege"
															src={`${IMAGE_BASEURL}${shop.logo?.logo?.bucket[0]}/${shop.logo?.logo?.key[0]}`}
															alt="product-img"
														/>
													</Link>
												</div>

												<div className="product-info">
													<h2 className="product-title h5 mb-0">
														<Link
															to={`/vendors/${convertToURL(shop.userName)}`}
														>
															{shop.userName}
														</Link>
													</h2>
													<span className="price">{shop.email}</span>
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
											pageCount={data?.totalPages}
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
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Shop;
