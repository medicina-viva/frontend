import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				grey: {
					100: "#f5f5f5",
					200: "#eeeeee",
					300: "#e0e0e0",
					400: "#bdbdbd",
					500: "#9e9e9e",
					600: "#757575",
					700: "#616161",
					800: "#424242",
					900: "#212121",
				},
				primary: {
                    default: "#1f8acc",
					100: "#d0e8f5",
					200: "#a2d1eb",
					300: "#73b9e1",
					400: "#45a2d7",
					500: "#168bcd",
					600: "#126fa4",
					700: "#0d537b",
					800: "#093852",
					900: "#041c29",
				},
				secondary: {
                    default: "#46C8BB",
					100: "#eef1f5",
					200: "#dde4eb",
					300: "#ccd6e0",
					400: "#bbc9d6",
					500: "#aabbcc",
					600: "#8896a3",
					700: "#66707a",
					800: "#444b52",
					900: "#222529",
				},
				text: {
					primary: "#f5f5f5", // Soft white for dark mode text
					secondary: "#cfd8dc", // Soft grey/blue for secondary text
				},
				success: {
					main: "#43A047",
				},
				warning: {
					main: "#F4511E", // Warm alert tones
				},
		  }
		: {
				grey: {
					100: "#212121",
					200: "#424242",
					300: "#616161",
					400: "#757575",
					500: "#9e9e9e",
					600: "#bdbdbd",
					700: "#e0e0e0",
					800: "#eeeeee",
					900: "#f5f5f5",
				},
				primary: {
					default: "#1f8acc",
					100: "#d0e8f5",
					200: "#a2d1eb",
					300: "#73b9e1",
					400: "#45a2d7",
					500: "#168bcd",
					600: "#126fa4",
					700: "#0d537b",
					800: "#093852",
					900: "#041c29",
				},
				secondary: {
                    default: "#46C8BB",
					100: "#eef1f5",
					200: "#dde4eb",
					300: "#ccd6e0",
					400: "#bbc9d6",
					500: "#aabbcc",
					600: "#8896a3",
					700: "#66707a",
					800: "#444b52",
					900: "#222529",
				},
				text: {
					primary: "#37474F", // Dark grey for light mode text
					secondary: "#455A64", // Blue-grey for secondary text
				},
				success: {
					main: "#66BB6A",
				},
				warning: {
					main: "#FF7043",
				},
		  }),
});

// Adjust theme settings accordingly
export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						primary: {
							main: colors.primary[500],
						},
						secondary: {
							main: colors.secondary[500],
						},
						text: {
							primary: colors.text.primary,
							secondary: colors.text.secondary,
						},
						background: {
							default: colors.primary[800],
						},
				  }
				: {
						primary: {
							main: colors.primary[400],
						},
						secondary: {
							main: colors.secondary[400],
						},
						text: {
							primary: colors.text.primary,
							secondary: colors.text.secondary,
						},
						background: {
							default: "#fcfcfc",
						},
				  }),
		},
		typography: {
			fontFamily: ["Roboto Mono", "monospace"].join(","),
			fontSize: 12,
			h1: {
				fontSize: 40,
			},
			h2: {
				fontSize: 32,
			},
			h3: {
				fontSize: 24,
			},
			h4: {
				fontSize: 20,
			},
			h5: {
				fontSize: 16,
			},
			h6: {
				fontSize: 14,
			},
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
