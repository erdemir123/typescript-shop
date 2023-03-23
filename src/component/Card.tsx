import React, { useContext, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import { BasketContext } from "../context/CartContext";
import data from "../data";
import ShowModal from "./ShowModal";
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
const Card = ({ product }: ıProps) => {
  const {
    addBasket,
    pageName,
    isOpen,
    setIsOpen,
    showProduct,
    setShowProduct,
  } = useContext(BasketContext);
  return (
    <div>
      <div className="bg-orange-400 flex flex-col justify-center items-center w-[300px] h-[400px] border-2 border-orange-800 mx-auto my-4 relative shadow-md shadow-orange-900 rounded-md">
        <span className="absolute top-2 left-2 text-slate-500 font-bold text-md flex items-center gap-2">
          Kargo Bedava <FaTruck />
        </span>
        <RiHeartAddLine className="absolute top-[9px] right-4 text-xl text-red-900" />
        <img src={product.url} alt="" className="w-48" />
        <p className="my-2 text-2xl font-bold text-slate-600">
          {product.price} TL
        </p>
        <p className="text-center my-2 text-md font-bold text-slate-600">
          {product.name}
        </p>
        <div className="absolute bottom-5 flex gap-6">
          <button
            className="py-1 px-2 bg-slate-400 rounded-lg shadow-sm shadow-slate-200  text-slate-800  font-bold text-md active:scale-95"
            onClick={() => {
              setIsOpen(true);
              setShowProduct(product.id);
            }}
          >
            İncele
          </button>

          {pageName !== "Cart" ? (
            <button
              className="py-1 px-2 bg-slate-400 rounded-lg shadow-sm shadow-slate-200 text-slate-800  font-bold text-md active:scale-95"
              onClick={() => addBasket(product)}
            >
              Sepete ekle
            </button>
          ) : null}
        </div>
      </div>
      {isOpen && <ShowModal product={product} />}
    </div>
  );
};

export default Card;
