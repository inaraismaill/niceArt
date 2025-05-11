import { FC } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home"
import Contact from "../pages/ContactUs/Contact";
import About from "../pages/AboutUs/About";
import Products from "../pages/Products/Products";
import Partners from "../pages/Partners/Partners";



const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/partners" element={<Partners/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  );
};

export default AppRouter;
