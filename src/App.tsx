import { BrowserRouter } from "react-router-dom"; 
import { AppRoutes } from "./routes/indext";
export const App = () => {
  return (
   <BrowserRouter>
    <AppRoutes/>
   </BrowserRouter>
  );
}


