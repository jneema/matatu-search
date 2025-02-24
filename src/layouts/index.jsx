import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./header";

const Layout = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
      <Header />
      <Box sx={{ marginTop: "100px", width: "100vw", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%" }}> {/* Adjust max-width as needed */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
