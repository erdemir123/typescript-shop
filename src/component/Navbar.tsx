import React from "react";
import { Navigate, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-[60px] text-slate-600 text-lg font-bold flex gap-3 items-center pl-3">
      <div onClick={() => navigate("/")}>Home</div>
      {/* <div onClick={() => navigate("/store")}>Store</div> */}
      <div onClick={() => navigate("/about")}>About</div>
    </div>
  );
};

export default Navbar;
