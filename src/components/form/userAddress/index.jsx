import React from "react";

import {
    Box,
    Button,
    FormControl,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useCountries } from "../../../api/hooks/useCountries";

const UserAddress = ({
	values,
	handleBlur,
	handleBack,
	handleNext,
	handleChange,
	touched,
	errors,
	isUserAddressValid,
	steps,
	activeStep,
}) => {
	const [loading, setLoading] = useState(false);

	const { getCountries, getAddressByCep } = useCountries();
	const countries = getCountries();

	const handleZipCodeBlur = async () => {
		if (
			(values.country === "Brasil" || values.country === "Brazil") &&
			values.zipCode.length >= 8
		) {
			setLoading(true);
			try {
				const response = await getAddressByCep(values.zipCode);
				if (response.code === 200) {
					handleChange({
						target: {
							name: "stageOrProvince",
							value: `${response.city}/${response.state}`,
						},
					});
					handleChange({
						target: {
							name: "neighborhood",
							value: response.neighborhood,
						},
					});
					handleChange({
						target: {
							name: "street",
							value: response.street,
						},
					});
				}
			} catch (error) {
				console.error("Erro ao buscar o CEP:", error);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<>
			<Box display="flex" height="73px" margin="16px 0 10px 0">
				<FormControl fullWidth>
					<InputLabel id="country-label">País</InputLabel>
					<Select
						labelId="country-label"
						name="country"
						id="country"
						label="País"
						value={values.country}
						onBlur={handleBlur}
						onChange={handleChange}
						error={!!touched.country && !!errors.country}
						helperText={touched.country && errors.country}
					>
						<MenuItem value="">Nenhum</MenuItem>
						{countries.map((country) => (
							<MenuItem key={country} value={country}>
								{country}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			<Box display="flex" height="73px" marginBottom="10px">
				<TextField
					fullWidth={true}
					type="text"
					label="CEP/Código Postal"
					name="zipCode"
					value={values.zipCode}
					onBlur={(e) => {
						handleBlur(e);
						handleZipCodeBlur();
					}}
					onChange={handleChange}
					error={!!touched.zipCode && !!errors.zipCode}
					helperText={touched.zipCode && errors.zipCode}
				/>
			</Box>

			<Box display="flex" height="73px" marginBottom="10px">
				<TextField
					fullWidth={true}
					type="text"
					label="Cidade/Estado"
					name="stageOrProvince"
					value={values.stageOrProvince}
					onBlur={handleBlur}
					onChange={handleChange}
					error={
						!!touched.stageOrProvince && !!errors.stageOrProvince
					}
					helperText={
						touched.stageOrProvince && errors.stageOrProvince
					}
				/>
			</Box>
			<Box display="flex" height="73px" marginBottom="10px">
				<TextField
					fullWidth={true}
					type="text"
					label="Bairo"
					name="neighborhood"
					value={values.neighborhood}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.neighborhood && !!errors.neighborhood}
					helperText={touched.neighborhood && errors.neighborhood}
				/>
			</Box>
			<Box display="flex" height="73px" marginBottom="10px">
				<TextField
					fullWidth={true}
					type="text"
					label="Logradouro"
					name="street"
					value={values.street}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.street && !!errors.street}
					helperText={touched.street && errors.street}
				/>
			</Box>

			<div
				style={{
					height: "5px",
				}}
			>
				{loading && <LinearProgress />}
			</div>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
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
					disabled={!isUserAddressValid(values)}
					onClick={() => handleNext(values)}
				>
					{activeStep === steps.length - 1 ? "Finish" : "Next"}
				</Button>
			</Box>
		</>
	);
};

export default UserAddress;
