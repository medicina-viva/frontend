import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./scenes/admins/login";
import DoctorLogin from "./scenes/doctors/login";
import Home from "./scenes/home";
import PatientLogin from "./scenes/patients/login";
import PacientRegister from "./scenes/patients/register";
import ReceptionistLogin from "./scenes/receptionists/login";
import { ColorModeContext, useMode } from "./theme";
import PatientDashboard from "./scenes/patients/dashboard";
import NotFound from "./scenes/notFound";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Admins Routes */}
              <Route path="/admins/login" element={<AdminLogin />} />

              {/* Patients Routes*/}
              <Route path="/patients/login" element={<PatientLogin />} />
              <Route path="/patients/register" element={<PacientRegister />} />
              <Route
                path="/patients/dashboard"
                element={<PatientDashboard />}
              />

              {/* Doctors Routes */}
              <Route path="/doctors/login" element={<DoctorLogin />} />

              {/* Receptionists Routes*/}
              <Route
                path="/receptionists/login"
                element={<ReceptionistLogin />}
              />

              {/* Not found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
