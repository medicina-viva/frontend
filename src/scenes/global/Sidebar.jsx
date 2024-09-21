import { Box, IconButton, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.text.primary,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          height: "100vh",
          background: `#fff !important`,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          marginBottom: "5px",
        },
        "& .pro-inner-item:hover": {
          color: "#fff !important",
          borderRadius: "3px",
          backgroundColor: `${colors.primary.default} !important`,
        },
        "& .pro-menu-item.active": {
          color: "#fff !important",
          borderRadius: "3px",
          backgroundColor: `${colors.primary.default} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          <Box display="flex" justifyContent="center" alignItems="center">
            {!isCollapsed && (
              <Link
                to="/patients/dashboard/"
                style={{
                  color: "#1f8acc",
                  marginLeft: "15px",
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  alt="User profile"
                  width="75px"
                  src="../../assets/img/logo.png"
                />
                <h5
                  style={{
                    margin: "0",
                  }}
                >
                  MEDICINAVIVA
                </h5>
              </Link>
            )}
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/img/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Gervásio
                </Typography>
                <Typography variant="h5">Patient</Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/patients/dashboard/"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Consultas"
              to="/patients/consultations/"
              icon={<HealthAndSafetyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
