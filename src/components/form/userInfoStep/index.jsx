import React from "react";

import { Box, Button, Link, TextField } from "@mui/material";
import InputMask from "react-input-mask";

const UserInfoStep = ({
	values,
	handleBlur,
	handleBack,
	handleNext,
	handleChange,
	touched,
	errors,
	isUserInfoValid,
	steps,
	activeStep,
}) => {
	return (
		<>
			<Box display="flex" height="73px" margin="16px 0 10px 0">
				<TextField
					fullWidth={true}
					type="text"
					label="Primeiro Nome"
					name="firstname"
					value={values.firstname}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.firstname && !!errors.firstname}
					helperText={touched.firstname && errors.firstname}
				/>
			</Box>

			<Box display="flex" height="73px">
				<TextField
					fullWidth={true}
					type="text"
					label="Segundo Nome"
					name="lastname"
					value={values.lastname}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.lastname && !!errors.lastname}
					helperText={touched.lastname && errors.lastname}
				/>
			</Box>

			<Box
				display="flex"
				flexDirection="column"
				height="73px"
				marginBottom="20px"
			>
				<label
					style={{
						marginLeft: "8px",
					}}
				>
					Data de nascimento
				</label>
				<TextField
					fullWidth={true}
					type="date"
					name="bithDate"
					variant="outlined"
					value={values.bithDate}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.bithDate && !!errors.bithDate}
					helperText={touched.bithDate && errors.bithDate}
				/>
			</Box>

			<Box
				display="flex"
				height="73px"
				marginTop="2px"
				marginBottom="10px"
			>
				<TextField
					fullWidth={true}
					type="text"
					label="Email"
					name="email"
					value={values.email}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.email && !!errors.email}
					helperText={touched.email && errors.email}
				/>
			</Box>
			<Box display="flex" height="73px">
				<InputMask
					mask="+999 999 999 999 9999"
					maskChar={null}
					value={values.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					error={!!touched.phone && !!errors.phone}
					helperText={touched.phone && errors.phone}
				>
					{(inputProps) => (
						<TextField
							{...inputProps}
							fullWidth={true}
							type="text"
							label="Celular"
							name="phone"
						/>
					)}
				</InputMask>
			</Box>

			<Box
				display="flex"
				justifyContent="space-between"
				sx={{
					marginTop: "8px",
					"& a": {
						textDecoration: "none",
					},

					"& a:hover": {
						cursor: "pointer",
						textDecoration: "underline",
					},
				}}
			>
				<Link href="/patients/login">Já possui uma conta?</Link>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					pt: 2,
				}}
			>
				<Button
					color="inherit"
					disabled={activeStep === 0}
					onClick={handleBack}
					sx={{ mr: 1 }}
				>
					Back
				</Button>
				<Box
					sx={{
						flex: "1 1 auto",
					}}
				/>
				<Button
					disabled={!isUserInfoValid(values)}
					onClick={() => handleNext(values)}
				>
					{activeStep === steps.length - 1 ? "Finish" : "Next"}
				</Button>
			</Box>
		</>
	);
};

export default UserInfoStep;
