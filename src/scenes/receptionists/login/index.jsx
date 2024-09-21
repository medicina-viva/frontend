import { Box, Button, Link, OutlinedInput, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";

const checkoutSchema = yup.object().shape({
	username: yup.string().required("Este campo é obrigatório!"),
	password: yup.string().required("Este campo é obrigatório!"),
});
const initialValues = {
	username: "",
	password: "",
};

const ReceptionistLogin = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event) => {
		event.preventDefault();
	};

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	const isFormValid = (values) => {
		if (values.username === "" || values.password === "") return false;

		return true;
	};

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				width="450px"
				display="flex"
				alignItems="center"
				flexDirection="column"
				borderRadius="8px"
				boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
				backgroundColor="#fff"
			>
				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Link
						href="/"
						sx={{
							textDecoration: "none",
							color: "#1f8acc",
						}}
					>
						<img
							style={{
								margin: "0",
								border: "1px solid grenn",
							}}
							alt="Medicinaviva logo image."
							width="95px"
							src="../../../assets/img/logo.png"
						/>
						<h4
							style={{
								margin: "0",
							}}
						>
							MEDICINAVIVA
						</h4>
					</Link>
					<h5
						style={{
							margin: "0",
						}}
					>
						Serviço de Autenticação para Receptionistas
					</h5>
				</Box>
                <h1>Login</h1>
				<Formik
					onSubmit={handleFormSubmit}
					initialValues={initialValues}
					validationSchema={checkoutSchema}
				>
					{({
						values,
						errors,
						touched,
						handleBlur,
						handleChange,
						handleSubmit,
					}) => (
						<form
							onSubmit={handleSubmit}
							style={{
								width: "100%",
								padding: "16px",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<TextField
								fullWidth={true}
								type="text"
								label="Nome de Usuário"
								name="username"
								value={values.username}
								onBlur={handleBlur}
								onChange={handleChange}
								error={!!touched.username && !!errors.username}
								helperText={touched.username && errors.username}
								sx={{
									marginBottom: "36px",
								}}
							/>
							<FormControl>
								<InputLabel htmlFor="outlined-adornment-password">
									Password
								</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password"
									type={showPassword ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													handleClickShowPassword
												}
												onMouseDown={
													handleMouseDownPassword
												}
												onMouseUp={
													handleMouseUpPassword
												}
												edge="end"
											>
												{showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
									name="password"
									value={values.password}
									onBlur={handleBlur}
									onChange={handleChange}
									error={
										!!touched.password && !!errors.password
									}
									helperText={
										touched.password && errors.password
									}
								/>
							</FormControl>
							<Box
								height="65px"
								display="flex"
								width="100%"
								margin="8px 0"
							></Box>
							<Button
								disabled={!isFormValid(values)}
								type="submit"
								color="success"
								variant="contained"
								sx={{
									marginBottom: "36px",
									padding: "16px",
									color: "#fff",
								}}
							>
								Login
							</Button>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default ReceptionistLogin;
