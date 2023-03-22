import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/store" element={<Store />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
