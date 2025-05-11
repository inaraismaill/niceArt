import React, { FC } from "react";
import styles from "./aboutSection.module.css";
import Button from "../../../components/ui/Button/Button";
const AboutSection: FC = () => {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className="title">We help you find the perfect loan</h1>
        <div className={styles.description}>
          <h2 className="description">
            Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est,
            egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna
            non purus, gravida commodo.
          </h2>
          <div className={styles.buttons}>
            <Button text="Products" isWhite={true} down={true} />
            <Button text="About NICART" isWhite={false} down={false} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/assets/image/picture1.jpg" alt="picture" />
        <p className="description">
          Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
          turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
          augue. Egestas et amet neque placerat aliquam tempor. Ultricies
          natoque lacus, id natoque cras. Erat aliquam sollicitudin risus semper
          molestie. Ut mattis nisl faucibus vel tincidunt. Et in laoreet
          faucibus urna quis. Tempus in condimentum malesuada ut molestie et in.
          Lobortis neque aliquam felis ac ac augue elit.
        </p>
        <div className={styles.about}>
          <div className={styles.text}>
            <h3 className="headlings">ABOUT US</h3>
            <h2 className="text">Lectus mauris pulvinar sit.</h2>
            <p className="description">
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
              augue. Egestas et amet neque placerat aliquam tempor. Ultricies
              natoque lacus, id natoque cras. Erat aliquam sollicitudin risus
              semper molestie. Ut mattis nisl faucibus vel tincidunt.
            </p>
            <div className={styles.learn}>
              <h4>Learn more</h4>
              <div></div>
            </div>
          </div>
          <img src="assets/image/image1.jpg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
