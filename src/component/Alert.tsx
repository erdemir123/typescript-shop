import React, { useContext, useEffect } from "react";
import { BasketContext } from "../context/CartContext";
interface ıProps {
  children: JSX.Element;
}

const Alert = ({ children }: ıProps) => {
  const { alert, setAlert } = useContext(BasketContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    if (!alert) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [alert]);
  return (
    <>
      {alert && (
        <div className="bg-slate-500 w-[279px] h-[74px] fixed right-4 bottom-6 z-50 rounded-[16px] shadow-[0 8px 24px 0 rgba(3, 27, 40, 0.12)] border-[1px] border-[#e6eaec] flex justify-center items-center font-bold text-slate-50">
          {children}
        </div>
      )}
    </>
  );
};

export default Alert;
