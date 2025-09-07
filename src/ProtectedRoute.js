import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const cookie = Cookies.get("username");
  console.log("cookie", cookie);

  // If not logged in → redirect to login
  if (!cookie) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → render the element
  return element;
};

export default ProtectedRoute;
