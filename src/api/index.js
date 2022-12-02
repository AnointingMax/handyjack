import axios from "axios";
import { getFromStorage } from "../constants";

const api = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? `${import.meta.env.VITE_LOCAL_BASEURL}`
			: `${import.meta.env.VITE_PROD_BASEURL}`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config) => {
	config.headers["Authorization"] = `Bearer ${getFromStorage("token")}`;
	return config;
}, undefined);

api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (
			error.response.status === 401 ||
			error.response.data.message === "401 Unauthorized"
		) {
			// localStorage.clear();
			// window.location.reload();
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

export const logIn = (data) => api.post("api/auth/local", data);

export const register = (data) => api.post("api/auth/register", data);
