import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Formik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "./api";
import { fireSwalSuccess } from "./constants";
import { useAppContext } from "./context/AppContext";

function SignUp() {
	const navigate = useNavigate();
	const { isLoggedIn } = useAppContext();

	const initialValues = {
		email: "",
		userName: "",
		password: "",
		phone: "",
		confirm: "",
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please provide a valid email")
			.required("Email is required"),
		userName: Yup.string().required("Username is required"),
		phone: Yup.string()
			.length(11, "Please provide a valid phone number")
			.required("Phone number is required"),
		password: Yup.string().required("Password is required"),
		confirm: Yup.string()
			.required("Confirm password is required")
			.oneOf([Yup.ref("password"), null], "Passwords must match"),
	});

	const { isLoading, mutate } = useMutation(register, {
		onSuccess: () => {
			fireSwalSuccess("Account created successfully").then(() =>
				navigate("/login")
			);
		},
	});

	if (isLoggedIn) {
		return <Navigate to="/" />;
	}

	return (
		<div className="signUp-container">
			<div className="account section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="login-form border p-5">
								<div className="text-center heading">
									<h2 className="mb-2">Sign Up</h2>
									<h4>For Customers</h4>
									<p className="lead">
										Already have an account? <Link to="/login"> Login now</Link>
									</p>
								</div>
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={(values) => {
										const { confirm, ...data } = values;
										mutate(data);
									}}
								>
									{({ values, handleChange, handleSubmit }) => {
										return (
											<form onSubmit={handleSubmit}>
												<div className="form-group mb-4">
													<label>Enter Email Address</label>
													<input
														type="email"
														className="form-control"
														placeholder="Enter email"
														name="email"
														value={values.email}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="email"
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter username</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Username"
														name="userName"
														value={values.userName}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="userName"
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter phone number</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter phone number"
														name="phone"
														value={values.phone}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="phone"
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter Password</label>
													<input
														type="password"
														className="form-control"
														placeholder="Enter Password"
														name="password"
														value={values.password}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="password"
													/>
												</div>
												<div className="form-group">
													<label>Confirm Password</label>
													<input
														type="password"
														className="form-control"
														placeholder="Confirm Password"
														name="confirm"
														value={values.confirm}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="confirm"
													/>
												</div>

												<button
													type="submit"
													disabled={isLoading}
													className="btn btn-main mt-3 btn-block"
												>
													Signup
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
export default SignUp;
