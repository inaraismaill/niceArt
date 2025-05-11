import { FC } from "react";
import styles from "./strategySection.module.css";

const StrategySection: FC = () => {
  return (
    <div className={`${styles.strategySection} container`}>
      <div className={styles.top}>
        <h3 className="headlings">Strategiyamız</h3>
        <h2 className="text">Id duis id turpis mi quisque. Nulla.</h2>
      </div>
      <div className={styles.bottom}>
        <div>
          <img src="./assets/logo/Vector.png" alt="" />
          <h3>Title</h3>
          <p>
            Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus.
            Feugiat nulla in imperdiet tellus sit lobortis. Cursus adipiscing
            aliquam dignissim.
          </p>
        </div>
        <div>
          <img src="./assets/logo/Vector.png" alt="" />
          <h3>Title</h3>
          <p>
            Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus.
            Feugiat nulla in imperdiet tellus sit lobortis. Cursus adipiscing
            aliquam dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
