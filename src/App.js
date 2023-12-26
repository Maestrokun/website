import { Outlet } from "react-router-dom";
import Routes from "./routes/index";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

function App() {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Routes />
          <Outlet />
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
