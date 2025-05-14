import React, { FC, useEffect, useState } from "react";
import styles from "./creditSection.module.css";
import { FaArrowDown } from "react-icons/fa";

const CreditSection: FC = () => {
  const [amount, setAmount] = useState(5000);
  const [duration, setDuration] = useState(12);
  const [interest, setInterest] = useState(15);
  const [errors, setErrors] = useState({});

  const calculatePayment = (amount, duration, interest) => {
    const principal = amount;
    const months = duration;
    const rate = interest / 100 / 12;
    return (principal * rate) / (1 - Math.pow(1 + rate, -months));
  };

  const [monthlyPayment, setMonthlyPayment] = useState(
    calculatePayment(amount, duration, interest).toFixed(2)
  );

  useEffect(() => {
    setMonthlyPayment(calculatePayment(amount, duration, interest).toFixed(2));
  }, [amount, duration, interest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { amount, duration, interest });
  };

  return (
    <div className={`${styles.creditSection} container`}>
      <div className={styles.left}>
        <h3 className="headlings">Apply to loan</h3>
        <h2 className="text">Id duis id turpis mi quisque. Nulla.</h2>
        <p className="description">
          Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
          turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
          augue.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.right}>
        <div className={styles.loanInputs}>
          <div className={styles.inputGroup}>
            <label htmlFor="amount">Kreditin məbləği</label>
            <input
              type="range"
              id="amount"
              min="100"
              max="10000"
              step="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <span>
              <span>{amount}</span> AZN
            </span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="duration">Kreditin müddəti</label>
            <input
              type="range"
              id="duration"
              min="1"
              max="60"
              step="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
            <span>
              <span>{duration}</span> Ay
            </span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="interest">Faiz dərəcəsi</label>
            <input
              type="range"
              id="interest"
              min="0"
              max="30"
              step="0.1"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
            <span>
              <span>{interest}</span> %
            </span>
          </div>
        </div>

        <div className={styles.monthlyPayment}>
          Aylıq ödəniş
          <br />
          <span className="amount">{monthlyPayment} ₼</span>
        </div>

        <div className={styles.consent}>
          <input type="checkbox" />
          <label htmlFor="consent">AKB RAZILIQ verilməsi üçün icazə</label>
        </div>

        <button type="submit" className="buttons">
          Submit
          <FaArrowDown
            style={{
              transform: "rotate(-90deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default CreditSection;
