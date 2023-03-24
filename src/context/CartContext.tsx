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

interface userData {
  userName: string;
  email: string;
  password: string;
}
interface basketContextType {
  cart: ProductArrType[] | [];
  setCart: React.Dispatch<React.SetStateAction<ProductArrType[] | []>>;
  addBasket: (product: ProductArrType) => void;
  pageName: string;
  setPageName: (pageName: string) => void;
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  alert: boolean;
  setAlert: (e: boolean) => void;
  showProduct: number;
  setShowProduct: (e: number) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (e: boolean) => void;
  user: userData;
  setUser: React.Dispatch<React.SetStateAction<userData>>;
}
export const BasketContext = createContext({} as basketContextType);

const CartContextProvider = ({ children }: ıChildren) => {
  const [cart, setCart] = useState<ProductArrType[] | []>([]);
  const [pageName, setPageName] = useState<string>("");
  const [user, setUser] = useState<userData>({
    userName: "",
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(true);
  const [showProduct, setShowProduct] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const addBasket = (product: ProductArrType) => {
    setCart([...cart.filter((item) => item.id !== product.id), product]);
    setAlert(true)
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
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        alert,
        setAlert,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
export default CartContextProvider;
