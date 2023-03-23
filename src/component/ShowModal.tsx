import React, { useContext } from "react";
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
interface ıProps {
  product: ProductType;
}
const ShowModal = ({ product }: ıProps) => {
  const { addBasket, pageName, isOpen, setIsOpen,showProduct } = useContext(BasketContext);
 const modalProduct = (data.filter(((item)=>(item.id === showProduct))))

  return (
    <div>
      <div
        className="fixed w-[100vw] h-[100%] bg-[#031b28] z-50 top-0 left-0 opacity-5"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed z-[5000] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  flex justify-center items-center">
        <img src={modalProduct[0].url} alt="" />
      </div>
    </div>
  );
};

export default ShowModal;
