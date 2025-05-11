import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowDown } from "react-icons/fa";
import React, { FC } from "react";

interface ButtonProps {
  text: string;
  isWhite: boolean;
  down: boolean;
}

const Button: FC<ButtonProps> = ({ text, isWhite, down }) => {
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px", zIndex:-10,
    padding: "0 16px",
    fontSize: "16px",
    fontWeight: 400,
    border: "1px solid",
    borderColor: "#3E6F00",
    backgroundColor: isWhite ? "#3E6F00" : "white",
    color: isWhite ? "white" : "#3E6F00",
    height: "48px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle}>
      {text}
      <FaArrowDown
        style={{
          transform: down ?  "rotate(0deg)": "rotate(-90deg)" ,
          transition: "transform 0.3s ease",
        }}
      />
    </button>
  );
};

export default Button;
