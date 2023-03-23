import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import CartContextProvider from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    
    <CartContextProvider>
      <Navbar /> 
      <AppRoutes />     
    </CartContextProvider>
    
    
  );
}

export default App;
