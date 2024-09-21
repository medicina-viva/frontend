import { Box, Button } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";

const UserPasswordCreation = ({
	values,
	handleBlur,
	handleBack,
	handleNext,
	handleChange,
	touched,
	errors,
	isUserPasswordValid,
	steps,
	activeStep,
}) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<FormControl
				sx={{ margin: "16px 0 10px 0" }}
				fullWidth={true}
				variant="outlined"
			>
				<InputLabel htmlFor="passwordLabel">Senha</InputLabel>
				<OutlinedInput
					id="passwordLabel"
					type={showPassword ? "text" : "password"}
					label="Senha"
					name="password"
					value={values.password}
					onBlur={handleBlur}
					onChange={handleChange}
					error={!!touched.password && !!errors.password}
					helperText={touched.password && errors.password}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								onMouseUp={handleMouseUpPassword}
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
				/>
			</FormControl>

			<FormControl
				sx={{ margin: "16px 0 10px 0" }}
				fullWidth={true}
				variant="outlined"
			>
				<InputLabel htmlFor="confirmPasswordLabel">
					Confirmar Senha
				</InputLabel>
				<OutlinedInput
					id="confirmPasswordLabel"
					type={showPassword ? "text" : "password"}
					label="Confirmar Senha"
					name="confirmPassword"
					value={values.confirmPassword}
					onBlur={handleBlur}
					onChange={handleChange}
					error={
						!!touched.confirmPassword && !!errors.confirmPassword
					}
					helperText={
						touched.confirmPassword && errors.confirmPassword
					}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								onMouseUp={handleMouseUpPassword}
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
				/>
			</FormControl>

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
			></Box>
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
					disabled={isUserPasswordValid(values)}
					onClick={() => handleNext(values)}
				>
					{activeStep === steps.length - 1 ? "Finish" : "Next"}
				</Button>
			</Box>
		</>
	);
};

export default UserPasswordCreation;
