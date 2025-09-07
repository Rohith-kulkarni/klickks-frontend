import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        exact
        element={<ProtectedRoute element={<Dashboard />} />}
      />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;
