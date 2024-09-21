import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { tokens } from "../../theme";
import { useLocation, useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  let navegation = ``;
  const colors = tokens(theme.palette.mode);
  const locationLength = location.pathname.split("/").length - 2;
  const currentLocation = location.pathname.split("/")[locationLength];

  for (let i = 2; i <= locationLength; i++) {
    navegation += `${location.pathname.split("/")[i]}/`;
  }

  const handleNavigate = (page) => {
    const path = `${location.pathname.split(page)[0]}${page}/`;
    navigate(path);
  };

  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          border="1px solid #9e9e9e"
          borderRadius="3px"
          marginLeft="20px"
          width="250px"
          height="35px"
        >
          <InputBase
            sx={{
              p: 2,
            }}
            placeholder="Search"
          />
          <IconButton
            sx={{
              "&:hover": {
                color: colors.primary.default,
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton
            sx={{
              "&:hover": {
                color: colors.primary.default,
              },
            }}
          >
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": {
                color: colors.primary.default,
              },
            }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": {
                color: colors.primary.default,
              },
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box width="100%" paddingLeft="20px">
        <h1
          style={{
            textTransform: "capitalize",
          }}
        >
          {currentLocation}
        </h1>
        <Box>
          {navegation.split("/").map(
            (elem, index) =>
              index < navegation.split("/").length - 1 && (
                <Button
                  key={index}
                  onClick={() => handleNavigate(elem)}
                  sx={{
                    margin: 0,
                    padding: 0,
                    border: "none",
                    outline: "none",
                    textTransform: "lowercase",
                    color: `${colors.primary.default}`,
                  }}
                >
                  {`${elem}/`}
                </Button>
              )
          )}
        </Box>
      </Box>
    </header>
  );
};

export default Topbar;
