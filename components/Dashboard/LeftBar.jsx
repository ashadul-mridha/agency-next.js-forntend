import React from 'react';
import { Box } from "@mui/material";
import useAdminHooks from '../../utils/hooks/useAdminHooks';

const LeftBar = () => {
    
  const { showSideBar, setShowSideBar } = useAdminHooks();

    return (
      <>
        <Box
          sx={
            showSideBar
              ? {
                  width: "250px",
                  position: "fixed",
                  left: 0,
                  top: 0,
                  marginTop: "80px",
                  height: "100vh",
                }
              : {
                  width: "250px",
                  position: "fixed",
                  left: -250,
                  top: 0,
                  marginTop: "80px",
                  height: "100vh",
                }
          }
        >
          <h6>Left Site bar</h6>
        </Box>
      </>
    );
};

export default LeftBar;