import { Box, Button, LinearProgress, Link } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

import * as React from "react";
import { useState } from "react";
import UserAddress from "../../../components/form/userAddress";
import UserInfoStep from "../../../components/form/userInfoStep";
import UserPasswordCreation from "../../../components/form/userPasswordCreation";

const steps = [
	"Identificação do Usuário",
	"Informações de endereço",
	"Crie sua uma senha",
];

const checkoutSchema = yup.object().shape({
	firstname: yup.string().required("Este campo é obrigatório!"),
	lastname: yup.string().required("Este campo é obrigatório!"),
	bithDate: yup.date().required("Este campo é obrigatório!"),
	email: yup
		.string()
		.email("Email inválido!")
		.required("Este campo é obrigatório!"),
	phone: yup.string().required("Este campo é obrigatório!"),
	country: yup.string().required("Este campo é obrigatório!"),
	zipCode: yup.string().required("Este campo é obrigatório!"),
	stageOrProvince: yup
		.string()
		.matches(
			/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*\/([A-Z]{2}|[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*)$/,
			"O siga o formato'Nome da cidade/Nome do estado/província ou UF'"
		)
		.required("Este campo é obrigatório!"),
	neighborhood: yup.string().required("Este campo é obrigatório!"),
	street: yup.string().required("Este campo é obrigatório!"),
	password: yup.string().required("Este campo é obrigatório!"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "As senhas devem coincidir")
		.required("Este campo é obrigatório!"),
});
const initialValues = {
	firstname: "",
	lastname: "",
	bithDate: "",
	email: "",
	phone: "",
	country: "",
	zipCode: "",
	stageOrProvince: "",
	neighborhood: "",
	street: "",
	password: "",
};

const PacientRegister = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	const isUserInfoValid = (values) => {
		if (
			values.firstname === "" ||
			values.lastname === "" ||
			values.bithDate === "" ||
			values.email === "" ||
			values.phone === ""
		)
			return false;

		return true;
	};

	const isUserAddressValid = (values) => {
		if (
			values.country === "nenhum" ||
			values.country === "" ||
			values.zipCode === "" ||
			values.stageOrProvince === "" ||
			values.neighborhood === "" ||
			values.street === ""
		)
			return false;

		return true;
	};

	const isUserPasswordValid = (valeus) => {
		return (
			valeus.password === "" ||
			valeus.confirmPassword === "" ||
			valeus.confirmPassword !== valeus.password
		);
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
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
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
							Serviço de Cadastro de Pacientes
						</h5>
					</Box>
					<h1>Cadastro de Paciente</h1>
				</Box>

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
							<Box sx={{ width: "100%" }}>
								<Stepper activeStep={activeStep}>
									{steps.map((label, index) => {
										const stepProps = {};
										const labelProps = {};
										return (
											<Step key={label} {...stepProps}>
												<StepLabel {...labelProps}>
													{label}
												</StepLabel>
											</Step>
										);
									})}
								</Stepper>
								{activeStep === steps.length ? (
									<Box
										sx={{
											height: "484.02px",
										}}
									>
										<Typography sx={{ m: 2, mb: 1 }}>
											Olá <b>{values.firstname}</b>, antes
											de enviar o formulário confirme se
											as informações estão corretas.
										</Typography>
										<Box
											display="flex"
											width="100%"
											justifyContent="center"
											alignItems="center"
										>
											<img
												width="150px"
												src="../../../assets/img/arco-iris.png"
											/>
										</Box>

										<div
											style={{
												marginTop: "8px",
												height: "5px",
											}}
										>
											{loading && <LinearProgress />}
										</div>

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
												type="submit"
												color="success"
												variant="contained"
												sx={{
													mr: 1,
													padding: "10px",
													color: "#fff",
												}}
												disabled={
													!isUserPasswordValid(
														values
													) &&
													!isUserInfoValid(values) &&
													!isUserAddressValid(values)
												}
											>
												Enviar
											</Button>
										</Box>
									</Box>
								) : (
									<Box
										display="flex"
										height="510px"
										justifyContent="flex-start"
										flexDirection="column"
									>
										{activeStep === 0 && (
											<UserInfoStep
												values={values}
												handleBlur={handleBlur}
												handleBack={handleBack}
												handleNext={handleNext}
												handleChange={handleChange}
												touched={touched}
												errors={errors}
												isUserInfoValid={
													isUserInfoValid
												}
												steps={steps}
												activeStep={activeStep}
											/>
										)}
										{activeStep === 1 && (
											<UserAddress
												values={values}
												handleBlur={handleBlur}
												handleBack={handleBack}
												handleNext={handleNext}
												handleChange={handleChange}
												touched={touched}
												errors={errors}
												isUserAddressValid={
													isUserAddressValid
												}
												steps={steps}
												activeStep={activeStep}
											/>
										)}
										{activeStep === 2 && (
											<UserPasswordCreation
												values={values}
												handleBlur={handleBlur}
												handleBack={handleBack}
												handleNext={handleNext}
												handleChange={handleChange}
												isUserPasswordValid={
													isUserPasswordValid
												}
												touched={touched}
												errors={errors}
												steps={steps}
												activeStep={activeStep}
											/>
										)}
									</Box>
								)}
							</Box>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default PacientRegister;
