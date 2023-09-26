import Login from "./Login";
import Singup from "./Singup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
