import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Slider from "./components/Slider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup"
import Login from "./pages/Login"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
