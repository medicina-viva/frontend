import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Box, Link } from "@mui/material";
import styles from "./home.module.css";

const Home = () => {
	return (
		<Box display="flex" flexDirection="column" width="100%" height="100%">
			<header className={styles.header}>
				<Link href="/" className={styles.logoWrap}>
					<img
						width="75"
						height="75"
						alt="Medicinaviva logo"
						src="../../../assets/img/logo.png"
					/>
					<span>MEDICINAVIVA</span>
				</Link>
				<div className={styles.menu}>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>FAQ</li>
					</ul>

					<Link
						href="/patients/login"
						sx={{
							textDecoration: "none",
							color: "#fff",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "50px",
							backgroundColor: "#1f8acc",
							padding: "5px",
							marginRight: "18px",
							borderRadius: "8px",

							"&:hover": {
								cursor: "pointer",
								backgroundColor: "#46c8bb",
							},
						}}
					>
						<LoginIcon />
					</Link>
				</div>
			</header>
		</Box>
	);
};

export default Home;
