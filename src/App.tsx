import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/indext";
import { MenuLateral } from "./shared/components/indext";
import { AppThemeProvider } from './shared/contexts/ThemeContext';
export const App = () => {
  return (
    <AppThemeProvider>
    <BrowserRouter>

    <MenuLateral>
      <AppRoutes />
    </MenuLateral>
    
    </BrowserRouter>
    </AppThemeProvider>
  );
}


