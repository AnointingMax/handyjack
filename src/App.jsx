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
import ShopProducts from "./ShopProducts";
import Category from "./Category";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="vendors" element={<Shop />} />
					<Route path="vendors/:id" element={<ShopProducts />} />
					<Route path="category/:id" element={<Category />} />
					<Route path="product/:id" element={<SingleProduct />} />
					<Route path="/" element={<AuthWrapper />}>
						<Route path="checkout" element={<Checkout />} />
					</Route>
					<Route path="cart" element={<Cart />} />
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
	const { isLoggedIn, user } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn || !user) return navigate("/login");
	}, []);

	return <Outlet />;
};

export default App;
