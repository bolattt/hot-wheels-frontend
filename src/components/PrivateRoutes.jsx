import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

function PrivateRoutes() {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoutes;
