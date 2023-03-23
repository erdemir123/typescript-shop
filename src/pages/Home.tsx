import React, { useContext, useEffect } from "react";
import Card from "../component/Card";
import ShowModal from "../component/ShowModal";
import { BasketContext } from "../context/CartContext";
import data from "../data";
interface ProductType {
  id: number;
  title: string;
  price: number;
  url: string;
  name: string;
  type: string;
}

const Home = () => {
  const { cart, setCart, pageName,setPageName } = useContext(BasketContext);
  useEffect(() => {
    setPageName("Home");
  }, []);
  console.log(pageName);
  console.log(cart);

  return (
    <div className="border flex flex-wrap gap-4 justify-center">
      {data.map((product: ProductType, index: number) => (
        <>
        <Card product={product} />
        </>
        
      ))}
    </div>
  );
};

export default Home;
