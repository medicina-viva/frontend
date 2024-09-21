import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Box display="flex" height="100%">
      <Sidebar />
      <Box flexGrow={1}>
        <Topbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
