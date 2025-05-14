import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import ProductsSection from "./ProductSection/ProductsSection";
import "./index.module.css";

const Home: React.FC = () => {
  return (
    <>
      <AboutSection />
      <ProductsSection />
    </>
  );
};

export default Home;
