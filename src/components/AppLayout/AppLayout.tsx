import { Grid } from "@mui/material";
import SideBar from "../SideBar/";
import Box from "@mui/material/Box";
import QuestionBar from "../QuestionBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bc063a",
      dark: "#880035",
    },
  },
});

function AppLayout() {
  const [categoryID, setCategoryID] = useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} lg={3} xl={2} sx={{ backgroundColor: "#fafafa" }}>
            <SideBar setCategoryID={setCategoryID} />
          </Grid>
          <Grid item xs={12} lg={9} xl={10} sx={{ textAlign: "center", padding: "5%" }}>
            {categoryID ? <QuestionBar categoryID={categoryID} /> : <h1>Wybierz quiz</h1>}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AppLayout;
