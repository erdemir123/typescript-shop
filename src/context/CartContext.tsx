import { createContext, ReactNode, useState } from "react";
interface ıChildren {
  children: ReactNode;
}

type ProductArrType = {
  id: number | null;
  title: string;
  price: number;
  url: string;
  name: string;
  type: string;
};
interface basketContextType {
  cart: ProductArrType[] | [];
  setCart: React.Dispatch<React.SetStateAction<ProductArrType[] | []>>;
  addBasket: (product: ProductArrType) => void;
  pageName: string;
  setPageName: (pageName: string) => void;
}
export const BasketContext = createContext({} as basketContextType);

const CartContextProvider = ({ children }: ıChildren) => {
  const [cart, setCart] = useState<ProductArrType[] | []>([]);
  const [pageName, setPageName] = useState<string>("");
  const addBasket = (product: ProductArrType) => {
    setCart([...cart.filter((item) => item.id !== product.id), product]);
  };
  const removeBasket = (product: ProductArrType) => {
    setCart([...cart.filter((item) => item.id == product.id)]);
  };
  return (
    <BasketContext.Provider
      value={{ cart, setCart, addBasket, pageName, setPageName }}
    >
      {children}
    </BasketContext.Provider>
  );
};
export default CartContextProvider;
