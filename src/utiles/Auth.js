import { Outlet, Navigate } from "react-router-dom";

export default function Auth() {
  const authState = localStorage.getItem("auth");

//   console.log(authState);

  return authState ? <Outlet /> : <Navigate to="/admin" />;
}
