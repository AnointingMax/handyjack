import { useMutation } from "@tanstack/react-query";
import { Formik, ErrorMessage } from "formik";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { logIn } from "./api";
import { setToStorage } from "./constants";
import { useAppContext } from "./context/AppContext";

function Login() {
	const { setUser, setIsLoggedIn, isLoggedIn } = useAppContext();
	const navigate = useNavigate();
	const location = useLocation();

	const initialValues = {
		email: "",
		password: "",
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please provide a valid email")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const { isLoading, mutate } = useMutation(logIn, {
		onSuccess: (data) => {
			setToStorage("token", data.token);
			setToStorage("user", data.user);
			setIsLoggedIn(data.token);
			setUser(data.user);

			const origin = location.state?.from?.pathname || "/";
			navigate(origin);
		},
	});

	if (isLoggedIn) {
		return <Navigate to="/" />;
	}

	return (
		<div className="login-container">
			<div className="account section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="login-form border p-5">
								<div className="text-center heading">
									<h2 className="mb-2">Login</h2>
									<p className="lead">
										Don’t have an account?{" "}
										<Link to="/signup">Create a free account</Link>
									</p>
								</div>
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={(values) => {
										mutate(values);
									}}
								>
									{({ values, handleChange, handleSubmit }) => {
										return (
											<form onSubmit={handleSubmit}>
												<div className="form-group mb-4">
													<label htmlFor="#">Enter email</label>
													<input
														type="email"
														className="form-control"
														name="email"
														placeholder="Enter email"
														value={values.email}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="email"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="#">Enter Password</label>
													<Link className="float-right" to="/forgot-password">
														Forget password?
													</Link>
													<input
														type="password"
														className="form-control"
														name="password"
														placeholder="Enter Password"
														value={values.password}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="password"
													/>
												</div>

												<button
													type="submit"
													className="btn btn-main mt-3 btn-block"
													disabled={isLoading}
												>
													Login
												</button>
											</form>
										);
									}}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
