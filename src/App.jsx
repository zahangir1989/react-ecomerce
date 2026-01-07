import Home from "./Page/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About";
import Contract from "./components/Contract";
import Blog from "./components/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Help from "./components/Help";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
