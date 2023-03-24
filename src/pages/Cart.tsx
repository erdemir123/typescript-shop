import React, { useContext, useEffect } from "react";
import Card from "../component/Card";
import { BasketContext } from "../context/CartContext";
const Cart = () => {
  const { cart, setPageName,pageName} = useContext(BasketContext);
  useEffect(() => {
    setPageName("Cart");
  }, []);
  console.log(pageName)
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cart.map((product: any) => (
        <>
        <Card product={product} />
        </>
        
      ))}
    </div>
  );
};

export default Cart;
