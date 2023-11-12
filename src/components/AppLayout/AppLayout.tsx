import { Grid } from '@mui/material';
import SideBar from '../SideBar/';
import Box from '@mui/material/Box';
import QuestionBar from '../QuestionBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';


const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#bc063a',
        dark: '#880035'
      }
    },
  });


function AppLayout() {
  const [url, setUrl] = useState<string | null>(null);

  const handleQuizSelect = (targetUrl : string | null) => {
    setUrl(targetUrl);
  }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={12} lg={3} xl={2} sx={{backgroundColor: "#fafafa"}}>
                        <SideBar handleQuizSelect={ handleQuizSelect }/>
                    </Grid>
                    <Grid item xs={12} lg={9} xl={10} sx={{textAlign: 'center', padding: '5%'}}>
                      { url ? <QuestionBar url={url}/> : (<h1>Wybierz quiz</h1>) }
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
      );
}

export default AppLayout;

