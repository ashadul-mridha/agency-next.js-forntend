import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import React from "react";
import MenuAppBar from "../../components/Dashboard/AppBar";
import LeftBar from "../../components/Dashboard/LeftBar";
import MainContainer from "../../components/Dashboard/MainContainer";
import useAdminHooks from "../../utils/hooks/useAdminHooks";

const Dashboard = ({ children }) => {
  const { showSideBar, setShowSideBar } = useAdminHooks();
  
  return (
    <>
      <MenuAppBar  />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <LeftBar />
        <MainContainer Compo={children} />
      </Box>
    </>
  );
};

export default Dashboard;
