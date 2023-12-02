import { Grid } from "@mui/material";
import SideBar from "../SideBar/";
import Box from "@mui/material/Box";
import QuestionBar from "../QuestionBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import AddQuestion from "../AddQuestion";
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../Firebase";
import Divider from "@mui/material/Divider";
import QuestionProvider from "../../context/questionContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bc063a",
    },
  },
});


function AppLayout() {
  const [user] = useAuthState(auth);
  const [categoryID, setCategoryID] = useState<string | null>(null);

  const [isAddQuestionDisplayed, setAddQuestionDisplayed] = useState<boolean>(false);

  useEffect(() => {
    setAddQuestionDisplayed(false)
  }, [categoryID])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} lg={3} xl={2} sx={{ backgroundColor: "#fafafa" }}>
            <SideBar setCategoryID={setCategoryID} />
          </Grid>
          <Grid item xs={12} lg={9} xl={10} sx={{ textAlign: "center", padding: "5%" }}>
            <QuestionProvider>
              <>
                {categoryID ? <QuestionBar categoryID={categoryID} /> : <h1>Wybierz quiz</h1>}
                <Divider sx={{ margin: "5% 0" }} />
                <div>
                  {
                    isAddQuestionDisplayed && categoryID && user ? (
                      <AddQuestion categoryID={categoryID} />
                    ) : (
                      categoryID && user && (
                        <Button
                          variant="contained"
                          color="info"
                          sx={{ margin: "1rem" }}
                          startIcon={<AddIcon />}
                          onClick={() => setAddQuestionDisplayed(true)}
                        >
                          Dodaj pytanie
                        </Button>
                      )
                    )
                  }
                </div>
              </>
            </QuestionProvider>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AppLayout;
