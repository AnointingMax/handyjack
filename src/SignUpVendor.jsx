import { useMutation, useQuery } from "@tanstack/react-query";
import { ErrorMessage, Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fetchAccountName, registerShop } from "./api";
import { banks, fireSwalError, fireSwalMessage } from "./constants";

function SignUpVendor() {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		userName: "",
		phone: "",
		accountNumber: "",
		accountBank: "",
		accountName: "",
		password: "",
		confirm: "",
	};
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Please provide a valid email")
			.required("Email is required"),
		userName: Yup.string().required("Shop name is required"),
		phone: Yup.string()
			.length(11, "Please provide a valid phone number")
			.required("Phone number is required"),
		accountNumber: Yup.string()
			.length(10, "Enter a valid account number")
			.required("Account number is required"),
		accountBank: Yup.string().required("Account bank is required"),
		accountName: Yup.string().required("Account name is required"),
		password: Yup.string().required("Password is required"),
		confirm: Yup.string()
			.required("Confirm password is required")
			.oneOf([Yup.ref("password"), null], "Passwords must match"),
	});

	const { isLoading, mutate } = useMutation(registerShop, {
		onSuccess: (data) => {
			fireSwalMessage(data).then(() => navigate("/"));
		},
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
									<h4>For Shops</h4>
									<p className="lead">
										Already have an account? <Link to="/admin"> Login now</Link>
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
													<label>Enter Shop name</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Shop name"
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
													<label>Enter Account Number</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Account Number"
														name="accountNumber"
														value={values.accountNumber}
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="accountNumber"
													/>
												</div>
												<div className="form-group mb-4">
													<label>Enter Account Bank</label>
													<select
														className="form-control"
														value={values.accountBank}
														onChange={handleChange}
														// onBlur={handleBlur}
														name="accountBank"
													>
														<option value="" selected disabled>
															Enter Account Bank
														</option>
														{Object.entries(banks)
															.sort((a, b) => a[1].localeCompare(b[1]))
															.map((bank, index) => (
																<option key={index} value={bank[0]}>
																	{bank[1]}
																</option>
															))}
													</select>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="accountBank"
													/>
												</div>
												<AccountName />
												{/* <div className="form-group mb-4">
													<label>Enter Account Name</label>
													<input
														type="text"
														className="form-control"
														placeholder="Enter Account Name"
														name="accountName"
														value={values.accountName}
														disabled
														onChange={handleChange}
													/>
													<ErrorMessage
														component="div"
														className="text-danger"
														name="accountName"
													/>
												</div> */}
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

function AccountName() {
	const {
		values,
		handleChange,
		setFieldValue,
		setFieldError,
		setFieldTouched,
	} = useFormikContext();

	const { data, isError, error } = useQuery(
		["accountName", values.accountNumber, values.accountBank],
		() => fetchAccountName(values.accountNumber, values.accountBank),
		{
			enabled: !!values.accountBank && values.accountNumber.length === 10,
			retry: false,
		}
	);

	useEffect(() => {
		setFieldValue("accountName", data?.account_name || "");
	}, [data, setFieldValue]);

	useEffect(() => {
		if (isError) {
			setFieldTouched("accountName", true, false);
			setFieldError("accountName", error.message);
		}
	}, [isError, error, setFieldError, setFieldTouched]);

	return (
		<div className="form-group mb-4">
			<label>Enter Account Name</label>
			<input
				type="text"
				className="form-control"
				placeholder="Enter Account Name"
				name="accountName"
				value={values.accountName}
				disabled
				onChange={handleChange}
			/>
			<ErrorMessage
				component="div"
				className="text-danger"
				name="accountName"
			/>
		</div>
	);
}
export default SignUpVendor;
