import { useAppContext } from "./context/AppContext";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { Formik, ErrorMessage } from "formik";
import { createOrder } from "./api";
import { useNavigate } from "react-router-dom";
import { banks } from "./constants";

function Checkout() {
	const {
		state: { cart, store },
		price,
		dispatch,
		user,
	} = useAppContext();
	const navigate = useNavigate();

	const initialValues = {
		phone: "",
		address: "",
		price,
		store: store?._id,
		user: user?._id,
	};
	const validationSchema = Yup.object().shape({
		phone: Yup.string()
			.length(11, "Please provide a valid phone number")
			.required("Phone number is required"),
		address: Yup.string().required("Address for shipping is required"),
	});

	const { isLoading, mutate } = useMutation(createOrder, {
		onSuccess: () => {
			localStorage.removeItem("state");
			dispatch({ type: "CLEAR" });
			navigate("/");
		},
	});

	if (!cart?.length || !store) return navigate("/");

	return (
		<div className="checkout-container">
			<section className="page-header">
				<div className="overly"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="content text-center">
								<h1 className="mb-3">Checkout</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="page-wrapper">
				<div className="checkout shopping">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 pr-5">
								<div className="billing-details">
									<h4 className="mb-4">Billing Details</h4>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={(values) => {
											const data = { ...values };
											data.products = cart.map(({ product, quantity }) => ({
												product: product._id,
												quantity,
											}));
											mutate(data);
										}}
									>
										{({ values, handleChange, handleSubmit }) => {
											return (
												<form className="checkout-form" onSubmit={handleSubmit}>
													<div className="row">
														<div className="col-lg-12">
															<div className="form-group mb-4">
																<label htmlFor="first_name">Phone </label>
																<input
																	type="text"
																	className="form-control"
																	name="phone"
																	placeholder=""
																	value={values.phone}
																	onChange={handleChange}
																/>
																<ErrorMessage
																	component="div"
																	className="text-danger"
																	name="phone"
																/>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-group mb-4">
																<label htmlFor="first_name">
																	Address and notes
																</label>
																<textarea
																	className="form-control"
																	name="address"
																	cols="30"
																	rows="5"
																	placeholder="Notes about order e:g: want to say something"
																	value={values.address}
																	onChange={handleChange}
																/>
																<ErrorMessage
																	component="div"
																	className="text-danger"
																	name="address"
																/>
															</div>
														</div>
														<button
															className="btn btn-main btn-small"
															type="submit"
															disabled={isLoading}
														>
															Place Order
														</button>
													</div>
												</form>
											);
										}}
									</Formik>
								</div>
							</div>

							<div className="col-md-6 col-lg-4">
								<div className="product-checkout-details mt-5 mt-lg-0">
									<h4 className="mb-4 border-bottom pb-4">Order Summary</h4>

									{cart.map(({ product, quantity }, index) => (
										<div className="media product-card" key={index}>
											<p>{product.name}</p>
											<div className="media-body text-right">
												<p className="h5">
													{quantity} x &#8358;{product.price.toLocaleString()}
												</p>
											</div>
										</div>
									))}

									<ul className="summary-prices border-top pt-4 list-unstyled mb-4">
										<li className="d-flex justify-content-between">
											<span>Subtotal:</span>
											<span className="h5">
												&#8358;{price.toLocaleString()}
											</span>
										</li>
										{/* <li className="d-flex justify-content-between">
											<span>Shipping:</span>
											<span className="h5">Free</span>
										</li> */}
										<li className="d-flex justify-content-between">
											<span>Total</span>
											<span className="h5">
												&#8358;{price.toLocaleString()}
											</span>
										</li>
									</ul>

									<div className="info mt-4 border-top pt-4 mb-5">
										<h3>Account Details</h3>
										<p>Phone Number: {store?.phone}</p>
										<p>Account Number: {store?.accountNumber}</p>
										<p>Account Bank: {banks[store?.accountBank]}</p>
										<p>Account Name: {store?.accountName}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Checkout;
