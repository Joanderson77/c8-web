import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/indext";
import { LightTheme } from './shared/themes/Light';
export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  );
}


