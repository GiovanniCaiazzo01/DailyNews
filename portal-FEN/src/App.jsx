import "./App.css";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./common/provider/AuthProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
