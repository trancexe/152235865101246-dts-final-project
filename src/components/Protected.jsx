import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Protected = ({ allowedRoute }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  // if (isLoading) {
  //   console.log("isloading", isLoading, "allowedRoute", allowedRoute);
  // }
  // console.log(
  //   "isloading",
  //   isLoading,
  //   "allowedRoute",
  //   allowedRoute,
  //   "user",
  //   user
  // );

  //  halaman detil
  // jika tidak ada user dan allowed = true maka redirect ke login
  if (!user && allowedRoute) {
    // console.log("redirect to login", location);
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  } else if (user && !allowedRoute) {
    // console.log("redirect to home", location);
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  } else if (!user && !allowedRoute) {
    // return outet
    return <Outlet />;
  } else if (user && allowedRoute) {
    return <Outlet />;
  }

  // {
  //   return user?.email && allowedRoute ? (
  //     <Outlet />
  //   ) : user?.email && !allowedRoute ? (
  //     <Navigate to="/" />
  //   ) : (
  //     <Navigate to="/login" />
  //   );
  // }
};

export default Protected;
