import Home from "./Page/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About";
import Contract from "./components/Contract";
import Blog from "./components/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Help from "./components/Help";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
