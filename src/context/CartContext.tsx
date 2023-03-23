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
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  showProduct: number;
  setShowProduct: (e: number) => void;
}
export const BasketContext = createContext({} as basketContextType);

const CartContextProvider = ({ children }: ıChildren) => {
  const [cart, setCart] = useState<ProductArrType[] | []>([]);
  const [pageName, setPageName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<number>(0);
  const addBasket = (product: ProductArrType) => {
    setCart([...cart.filter((item) => item.id !== product.id), product]);
  };
  const removeBasket = (product: ProductArrType) => {
    setCart([...cart.filter((item) => item.id == product.id)]);
  };
  return (
    <BasketContext.Provider
      value={{
        cart,
        setCart,
        addBasket,
        pageName,
        setPageName,
        isOpen,
        setIsOpen,
        showProduct,
        setShowProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
export default CartContextProvider;
