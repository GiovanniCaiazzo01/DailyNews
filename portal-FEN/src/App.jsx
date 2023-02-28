import "./App.css";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
