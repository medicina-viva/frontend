import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLogin from "./scenes/admins/login";
import DoctorLogin from "./scenes/doctors/login";
import Home from "./scenes/home";
import PatientLogin from "./scenes/patients/login";
import PacientRegister from "./scenes/patients/register";
import ReceptionistLogin from "./scenes/receptionists/login";
import { ColorModeContext, useMode } from "./theme";
import PatientDashboard from "./scenes/patients/dashboard";
import NotFound from "./scenes/notFound";
import PatientConsultation from "./scenes/patients/consultation";
import Layout from "./scenes/global/Layout";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const noLayoutRoutes = [
    "/",
    "/admins/login",
    "/patients/login",
    "/patients/register",
    "/doctors/login",
    "/receptionists/login",
    "/not-found",
  ];

  const shouldRenderLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {shouldRenderLayout ? (
              <Layout>
                <Routes>
                  <Route
                    path="/patients/dashboard"
                    element={<PatientDashboard />}
                  />
                  <Route
                    path="/patients/consultations"
                    element={<PatientConsultation />}
                  />
                </Routes>
              </Layout>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admins/login" element={<AdminLogin />} />
                <Route path="/patients/login" element={<PatientLogin />} />
                <Route
                  path="/patients/register"
                  element={<PacientRegister />}
                />
                <Route path="/doctors/login" element={<DoctorLogin />} />
                <Route
                  path="/receptionists/login"
                  element={<ReceptionistLogin />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
