import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return isLoggedIn ? <Outlet /> : <Navigate to="" />;
};

export default PrivateRouter;
