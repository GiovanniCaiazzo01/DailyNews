import "./App.css";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./common/provider/AuthProvider";
import { UserProvider } from "./common/provider/UserProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <MainRoutes />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
