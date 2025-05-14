import React, { FC } from "react";
import styles from "./productsSection.module.css"

const ProductsSection: FC = () => {
  return (
    <div className={ `${styles.productsSection} container`}>
      <div className={styles.title}>
        <h3 className="headlings">Products</h3>
        <h2 className="text">Daşınmaz əmlak krediti</h2>
      </div>
      <p className="description">
        Quisque bibendum adipiscing sem massa auctor nulla donec mi integer.
        Suspendisse eget convallis magna viverra amet. Ut quam scelerisque massa
        morbi ac pharetra. Sit at elit non et diam. Quam a id egestas elit.
        Posuere cursus accumsan urna viverra. Sit egestas et convallis donec
        risus sapien enim. Gravida praesent adipiscin
      </p>
    </div>
  );
};

export default ProductsSection;
