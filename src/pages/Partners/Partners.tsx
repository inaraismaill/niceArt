import React from "react";
import styles from "./partnersSection.module.css";
import Button from "../../components/ui/Button/Button";

const Partners: React.FC = () => {
  return (
    <div className={`${styles.partnersSection} container`}>
      <div className={styles.texts}>
        <h2 className="title">Title for Partners or Lorem Ipsum motto</h2>
        <div className={styles.right}>
          <h2 className="text">Lectus mauris pulvinar sit?</h2>
          <p className="description">
            Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
            Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas
            est aliquet facilisis elit sit. Massa libero turpis facilisi mattis
            sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam
            euismod cum cursus. Enim nunc quis commodo leo libero diam.
          </p>
          <Button isWhite={true} text={"Became a partner"} down={false} />
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div> <div className={styles.card}>
          <div>
            <img src="./assets/image/image.png" alt="" /> Metus, vel
          </div>
          <h5>E-commerce</h5>
        </div>
      </div>
    </div>
  );
};

export default Partners;
