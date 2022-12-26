import { Formik } from "formik";
import * as Yup from "yup";

function SignUp() {
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
	return (
		<div className="signUp-container">
			<div className="account section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="login-form border p-5">
								<div className="text-center heading">
									<h2 className="mb-2">Sign Up</h2>
									<p className="lead">
										Already have an account? <a href="/login"> Login now</a>
									</p>
								</div>
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={(values) => {
										// mutate(values);
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
														name="identifier"
														placeholder="Enter email"
														value={values.identifier}
														onChange={handleChange}
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter username</label>
													<a className="float-right" href="">
														Forget password?
													</a>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Username"
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter Password</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Password"
													/>
												</div>
												<div className="form-group">
													<label>Confirm Password</label>
													<input
														type="text"
														className="form-control"
														placeholder="Confirm Password"
													/>
												</div>

												<a href="#" className="btn btn-main mt-3 btn-block">
													Signup
												</a>
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
