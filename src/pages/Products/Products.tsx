import React from "react";
import styles from "./productsSection.module.css";
import Button from "../../components/ui/Button/Button";

const Products: React.FC = () => {
  return (
    <div className={`${styles.productSection} container`}>
      <div className={styles.texts}>
        <h2 className="title">Title for about us or Lorem Ipsum motto</h2>
        <div className={styles.right}>
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
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.information}>
            <div>
              <h3>Daşınmaz əmlak krediti</h3>
              <p>
                Information about loan. Volutpat faucibus enim risus vulputate
                nisl sed sed. Facilisis pellentesque id tristique.
              </p>
            </div>
            <div className={styles.detail}>
              <p>
                Müddət (Ay) <br /> 24-72
              </p>
              <p>
                Məbləğ (AZN) <br /> 24 000 - 72 000
              </p>
              <p>
                Faiz dərəcəsi (%) <br /> 12-18
              </p>
            </div>
            <Button to="" isWhite={true} text={"Apply loan"} down={false} />
          </div>
          <img src="./assets/image/Group.png" alt="" />
        </div>
        <div className={styles.card}>
          <div className={styles.information}>
            <div>
              <h3>Daşınmaz əmlak krediti</h3>
              <p>
                Information about loan. Volutpat faucibus enim risus vulputate
                nisl sed sed. Facilisis pellentesque id tristique.
              </p>
            </div>
            <div className={styles.detail}>
              <p>
                Müddət (Ay) <br /> 24-72
              </p>
              <p>
                Məbləğ (AZN) <br /> 24 000 - 72 000
              </p>
              <p>
                Faiz dərəcəsi (%) <br /> 12-18
              </p>
            </div>
            <Button to="" isWhite={true} text={"Apply loan"} down={false} />
          </div>
          <img src="./assets/image/Vector.png" alt="" />
        </div>
        <div className={styles.card}>
          <div className={styles.information}>
            <div>
              <h3>Daşınmaz əmlak krediti</h3>
              <p>
                Information about loan. Volutpat faucibus enim risus vulputate
                nisl sed sed. Facilisis pellentesque id tristique.
              </p>
            </div>
            <div className={styles.detail}>
              <p>
                Müddət (Ay) <br /> 24-72
              </p>
              <p>
                Məbləğ (AZN) <br /> 24 000 - 72 000
              </p>
              <p>
                Faiz dərəcəsi (%) <br /> 12-18
              </p>
            </div>
            <Button to="" isWhite={true} text={"Apply loan"} down={false} />
          </div>
          <img src="./assets/image/Vector.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
