import React from 'react';
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import useAdminHooks from '../../utils/hooks/useAdminHooks';

const MainContainer = ({Compo}) => {

  const { showSideBar, setShowSideBar } = useAdminHooks();

    return (
      <>
        <Box
          sx={showSideBar ? { marginLeft: "250px" } : { marginLeft: "0px" }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item>
                <h1>Layout</h1>
                {Compo}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
};

export default MainContainer;