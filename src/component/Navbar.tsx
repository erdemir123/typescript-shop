import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { BasketContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, setCart, pageName, setPageName } = useContext(BasketContext);
  return (
    <div className="bg-slate-300 h-[60px] text-slate-600 text-lg font-bold flex justify-between items-center px-[40px]">
      <div className="flex gap-5">
        <div onClick={() => navigate("/home")}>Home</div>
        {/* <div onClick={() => navigate("/store")}>Store</div> */}
        <div onClick={() => navigate("/about")}>About</div>
      </div>
      <div className="flex gap-5">
        <div onClick={() => navigate("/Cart")}>Cart({cart.length})</div>
        {/* <div onClick={() => navigate("/store")}>Store</div> */}
        <div onClick={() => navigate("/favorite")}>Favorite</div>
        <div onClick={() => navigate("/login")}>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
