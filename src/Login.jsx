import { useMutation } from "@tanstack/react-query";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "./api";

function Login() {
	const initialValues = {
		identifier: "",
		password: "",
	};
	const validationSchema = Yup.object().shape({
		identifier: Yup.string()
			.email("Please provide a valid email")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const { isLoading, mutate } = useMutation(logIn, {
		onSuccess: (data) => {
			console.log(data);
		},
	});

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
										Don’t have an account? <a href="#">Create a free account</a>
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
														name="identifier"
														placeholder="Enter email"
														value={values.identifier}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="identifier"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="#">Enter Password</label>
													<a className="float-right" href="">
														Forget password?
													</a>
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
