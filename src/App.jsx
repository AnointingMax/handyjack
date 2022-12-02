import Header from "./Header"; //Include Header
import Footer from "./Footer"; //Include Footer
import Home from "./Home";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import SignUpVendor from "./SignUpVendor";
import ForgotPassword from "./ForgotPassword";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	useNavigate,
} from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import { useLayoutEffect } from "react";
import ShopProducts from "./ShopProducts";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<AuthWrapper />}>
						<Route index element={<Home />} />
						<Route path="vendors" element={<Shop />} />
						<Route path="vendors/:id" element={<ShopProducts />} />
						<Route path="single-product/:id" element={<SingleProduct />} />
						<Route path="checkout" element={<Checkout />} />
						<Route path="cart" element={<Cart />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signup-vendor" element={<SignUpVendor />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

const AuthWrapper = () => {
	// const { isLoggedIn, user } = useAppContext();
	// const navigate = useNavigate();

	// useLayoutEffect(() => {
	// 	if (!isLoggedIn || !user) return navigate("/login");
	// }, []);

	return <Outlet />;
};

// const NoAuthWrapper = () => {
// 	const { isLoggedIn, user } = useAppContext();
// 	const navigate = useNavigate();

// 	useLayoutEffect(() => {
// 		if (!!isLoggedIn && !!user) return navigate("/");
// 	}, []);
// 	return <Outlet />;
// };

export default App;
