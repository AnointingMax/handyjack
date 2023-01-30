import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_BASEURL } from "./constants";
import { useAppContext } from "./context/AppContext";

function Cart() {
	const {
		state: { cart, store },
		dispatch,
		price,
	} = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!cart?.length || !store) return navigate("/");
	}, []);

	return (
		<div className="checkout-container">
			<section className="page-header">
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="content text-center">
								<h1 className="mb-3">Cart</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cart shopping page-wrapper">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="product-list">
								<div className="cart-form">
									<table
										className="table shop_table shop_table_responsive cart"
										cellSpacing="0"
									>
										<thead>
											<tr>
												<th className="product-thumbnail"> </th>
												<th className="product-name">Product</th>
												<th className="product-price">Price</th>
												<th className="product-quantity">Quantity</th>
												<th className="product-subtotal">Total</th>
												<th className="product-remove"> </th>
											</tr>
										</thead>

										<tbody>
											{cart.map(({ product, quantity }, index) => (
												<tr className="cart_item" key={index}>
													<td
														className="product-thumbnail"
														data-title="Thumbnail"
													>
														<Link to={`/product/${product._id}`}>
															<img
																src={`${IMAGE_BASEURL}${product?.images?.bucket[0]}/${product?.images?.key[0]}`}
																className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
																alt=""
															/>
														</Link>
													</td>

													<td className="product-name" data-title="Product">
														<Link to={`/product/${product._id}`}>
															{product.name}
														</Link>
													</td>

													<td className="product-price" data-title="Price">
														<span className="amount">
															&#8358;{product.price.toLocaleString()}
														</span>
													</td>
													<td
														className="product-quantity"
														data-title="Quantity"
													>
														<div className="quantity">
															<label className="sr-only">Quantity</label>
															<input
																type="number"
																id="qty"
																className="input-text qty text"
																step="1"
																min="0"
																value={quantity}
																onChange={(event) =>
																	dispatch({
																		type: "CHANGE-QUANTITY",
																		payload: {
																			id: product._id,
																			quantity: event.target.valueAsNumber,
																		},
																	})
																}
																size="4"
															/>
														</div>
													</td>
													<td className="product-subtotal" data-title="Total">
														<span className="amount">
															<span className="currencySymbol">
																<pre wp-pre-tag-3=""></pre>
															</span>
															&#8358;
															{(product.price * quantity).toLocaleString()}
														</span>
													</td>
													<td className="product-remove" data-title="Remove">
														<button
															className="remove"
															aria-label="Remove this item"
															data-product_id="30"
															data-product_sku=""
															style={{
																border: "none",
																background: "transparent",
															}}
															onClick={() =>
																dispatch({
																	type: "REMOVE",
																	payload: product._id,
																})
															}
														>
															×
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="cart-info card p-4">
								<h4 className="mb-4">Cart totals</h4>
								<ul className="list-unstyled mb-4">
									<li className="d-flex justify-content-between pb-2 mb-3">
										<h5>Subtotal</h5>
										<span>&#8358;{price.toLocaleString()}</span>
									</li>
									{/* <li className="d-flex justify-content-between pb-2 mb-3">
										<h5>Shipping</h5>
										<span>Free</span>
									</li> */}
									<li className="d-flex justify-content-between pb-2">
										<h5>Total</h5>
										<span>&#8358;{price.toLocaleString()}</span>
									</li>
								</ul>
								<Link to="/checkout" className="btn btn-main btn-small">
									Proceed to checkout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Cart;
