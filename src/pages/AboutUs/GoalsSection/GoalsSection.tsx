import React, { FC } from "react";
import styles from "./goalsSection.module.css";

const GoalsSection: FC = () => {
  return (
    <div className={`${styles.goalSection} container`}>
      <div className={styles.left}>
        <h3 className="headlings">Məqsədimiz</h3>
        <h2 className="text">Id duis id turpis mi quisque. Nulla.</h2>
        <p className="description">
          Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
          turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
          augue. Egestas et amet neque placerat aliquam tempo
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <img src="./assets/logo/Vector.png" alt="" />
          <div>
            <h4>
              Adipiscing phasellus orci in dictumst faucibus ullamcorper odio
              faucibus. Nunc.
            </h4>
            <p className="description">
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="./assets/logo/Vector.png" alt="" />
          <div>
            <h4>
              Adipiscing phasellus orci in dictumst faucibus ullamcorper odio
              faucibus. Nunc.
            </h4>
            <p className="description">
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="./assets/logo/Vector.png" alt="" />
          <div>
            <h4>
              Adipiscing phasellus orci in dictumst faucibus ullamcorper odio
              faucibus. Nunc.
            </h4>
            <p className="description">
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
