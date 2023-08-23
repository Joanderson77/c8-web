import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/indext";
import { MenuLateral } from "./shared/components/indext";
import { AppDrawerProvider } from "./shared/contexts/DrawerContext";
import { AppThemeProvider } from './shared/contexts/ThemeContext';
export const App = () => {
  return (
    <AppThemeProvider>
    <AppDrawerProvider> 
    <BrowserRouter>

    <MenuLateral>
      <AppRoutes />
    </MenuLateral>

    </BrowserRouter>
    </AppDrawerProvider>
    </AppThemeProvider>
  );
}


