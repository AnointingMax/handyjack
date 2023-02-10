import axios from "axios";
import { fireSwalError, getFromStorage } from "../constants";

const api = axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? `${process.env.REACT_APP_LOCAL_BASEURL}`
			: `${process.env.REACT_APP_PROD_BASEURL}`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config) => {
	config.headers["Authorization"] = `${getFromStorage("token")}`;
	return config;
}, undefined);

api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (
			error.response.status === 401 ||
			error.response.data.message === "401 Unauthorized"
		) {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			window.location.reload();
		} else {
			fireSwalError(error.response.data);
		}
	}
);

export const fetchAccountName = (accountNumber, bankCode) =>
	axios
		.get(
			`https://maylancer.org/api/nuban/api.php?account_number=${accountNumber}&bank_code=${bankCode}`
		)
		.then((res) => {
			if (res.data.status === "error") {
				throw new Error(res.data.message);
			} else {
				return res.data;
			}
		});

export const logIn = (data) => api.post("auth/login", data);

export const register = (data) => api.post("auth/register", data);

export const registerShop = (data) => api.post("auth/register/shop", data);

export const getShops = (name, page) =>
	api.get("shops", {
		params: {
			name,
			page,
		},
	});

export const getShopDetails = (id) => api.get(`shops/${id}`);

export const getShopProducts = (id, name, page) =>
	api.get(`products/store/${id}`, {
		params: {
			name,
			page,
		},
	});

export const getNewestProducts = () => api.get(`products`);

export const getRandomCategories = () => api.get(`categories`);

export const getProductDetails = (id) => api.get(`products/${id}`);

export const getProductsByCategory = (id, name, page) =>
	api.get(`products/category/${id}`, {
		params: {
			name,
			page,
		},
	});

export const createOrder = (data) => api.post("orders", data);
