import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import { IMAGE_BASEURL } from "./constants";

function Header() {
	const {
		state: { cart },
		dispatch,
		price,
		isLoggedIn,
	} = useAppContext();

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-white w-100 navigation"
			id="navbar"
		>
			<div className="container">
				<Link className="navbar-brand font-weight-bold" to={{ pathname: "/" }}>
					MarketPlace
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#main-navbar"
					aria-controls="main-navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse " id="main-navbar">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<Link className="nav-link" to={{ pathname: "/" }}>
								Home
							</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link" to={{ pathname: "/vendors" }}>
								Vendors
							</Link>
						</li>
						{!isLoggedIn && (
							<>
								<li className="nav-item active">
									<Link className="nav-link" to={{ pathname: "/login" }}>
										Login
									</Link>
								</li>

								<li className="nav-item dropdown dropdown-slide">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown3"
										role="button"
										data-delay="350"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										SignUp.
									</a>
									<ul
										className="dropdown-menu"
										aria-labelledby="navbarDropdown3"
									>
										<li>
											<Link to={{ pathname: "/signup" }}>Customers</Link>
										</li>
										<li>
											<Link to={{ pathname: "/signup-vendor" }}>Shop</Link>
										</li>
									</ul>
								</li>
							</>
						)}
					</ul>
				</div>

				<ul
					className="top-menu list-inline mb-0 d-none d-lg-block"
					id="top-menu"
				>
					<li className="dropdown cart-nav dropdown-slide list-inline-item">
						<a
							href="#"
							className="dropdown-toggle cart-icon"
							data-toggle="dropdown"
							data-hover="dropdown"
						>
							<i className="tf-ion-android-cart"></i>
						</a>
						{!!cart.length && (
							<div className="dropdown-menu cart-dropdown">
								{cart.map(({ product, quantity }, index) => (
									<div className="media" key={index}>
										<Link
											to={`/product/${product._id}`}
											style={{ display: "flex", alignItems: "center" }}
										>
											<img
												className="media-object img- mr-3"
												src={`${IMAGE_BASEURL}${product?.images?.multipleImages.bucket[0]}/${product?.images?.multipleImages.key[0]}`}
												alt="image"
											/>

											<div className="media-body">
												<h6>{product.name}</h6>
												<div className="cart-price">
													<span>{quantity} x </span>
													<span>&#8358;{product.price.toLocaleString()}</span>
												</div>
											</div>
										</Link>
										<button
											className="remove"
											style={{ border: "none", background: "transparent" }}
											onClick={() =>
												dispatch({ type: "REMOVE", payload: product._id })
											}
										>
											<i className="tf-ion-close"></i>
										</button>
									</div>
								))}

								<div className="cart-summary">
									<span className="h6">Total</span>
									<span className="total-price h6">
										&#8358;{price.toLocaleString()}
									</span>

									<div className="text-center cart-buttons mt-3">
										<Link
											to="/cart"
											className="btn btn-small btn-transparent btn-block"
										>
											View Cart
										</Link>
										<Link
											to="/checkout"
											className="btn btn-small btn-main btn-block"
										>
											Checkout
										</Link>
									</div>
								</div>
							</div>
						)}
					</li>
					{!!isLoggedIn && (
						<li className="dropdown cart-nav dropdown-slide list-inline-item">
							<div
								className="dropdown-toggle cart-icon cursor-pointer"
								onClick={() => {
									localStorage.removeItem("token");
									localStorage.removeItem("user");
									window.location.reload();
								}}
							>
								Logout
							</div>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Header;
