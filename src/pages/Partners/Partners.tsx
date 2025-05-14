import { FC, useState } from "react";
import styles from "./partnersSection.module.css";
import Button from "../../components/ui/Button/Button";

const Partners: FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupData, setPopupData] = useState<string | null>(null);

  const openPopup = (item: string) => {
    setPopupData(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupData(null);
  };
  const cardData = [
    { text: "Lorem ipsum dolor", title: "Consectetur" },
    { text: "Sed do eiusmod", title: "Tempor incididunt" },
    { text: "Ut labore et dolore", title: "Magna aliqua" },
    { text: "Enim ad minim veniam", title: "Quis nostrud" },
    { text: "Exercitation ullamco", title: "Laboris nisi" },
    { text: "Duis aute irure", title: "Dolor in reprehenderit" },
  ];
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
          <Button
            to="/contact"
            isWhite={true}
            text={"Became a partner"}
            down={false}
          />
        </div>
      </div>
      <div className={styles.cards}>
        {cardData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => openPopup(item.text)}
          >
            <div>
              <img src="./assets/image/image.png" alt="" /> {item.text}
            </div>
            <h5>E-commerce</h5>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className={styles.popUp} onClick={closePopup}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div>
              <img src="./assets/image/image.png" alt="" />
              <div>
                <h2>{popupData || ""}</h2>
                <h5>E-commerce</h5>
              </div>
            </div>
            <p className="description">
              Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
              Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna
              egestas est aliquet facilisis elit sit. Massa libero turpis
              facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
              senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo
              libero diam.  
            </p>
            <div className={styles.popUpButtons}>
              <Button
                to="/"
                text="Visit Website"
                isWhite={true}
                down={false}
              />
              <button className="buttons" onClick={closePopup} style={{background:"white"}}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
