import React, { useState } from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<PrivateRouter />}>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/store" element={<Store />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
