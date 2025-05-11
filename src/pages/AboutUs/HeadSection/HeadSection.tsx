import React, { FC } from "react";
import styles from "./headSection.module.css";
const HeadSection: FC = () => {
  return (
    <div className={`${styles.headSection} container`}>
      <div className={styles.texts}>
        <h2 className="title">Title for about us or Lorem Ipsum motto</h2>
        <div className={styles.right}>
          <h3 className="headlings">Biz kimik?</h3>
          <h2 className="text">Lectus mauris pulvinar sit?</h2>
          <p className="description">
            Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
            Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas
            est aliquet facilisis elit sit. Massa libero turpis facilisi mattis
            sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam
            euismod cum cursus. Enim nunc quis commodo leo libero diam.
          </p>
        </div>
      </div>
      <img src="/assets/image/picture1.jpg" alt="picture" />
    </div>
  );
};

export default HeadSection;
