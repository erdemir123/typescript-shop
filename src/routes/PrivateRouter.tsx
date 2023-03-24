import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { BasketContext } from "../context/CartContext";

const PrivateRouter = () => {
  const {isLoggedIn, setIsLoggedIn} =useContext(BasketContext)
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
