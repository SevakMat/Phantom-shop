import RoutersContainer from "./routers/RoutersContainer";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { CssBaseline } from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider";
function App() {
  return (
    <ThemeProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <CssBaseline />
      <RoutersContainer />
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  );
}

export default App;
{
  /* <ThemeProvider theme={theme}>
<RoutersContainer />
</ThemeProvider> */
}
