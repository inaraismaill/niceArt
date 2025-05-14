import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowDown } from "react-icons/fa";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  to: string | undefined;
  text: string;
  isWhite: boolean;
  down: boolean;
}

const Button: FC<ButtonProps> = ({ text, isWhite, down, to = undefined }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: isWhite ? "#3E6F00" : "white",
    color: isWhite ? "white" : "#3E6F00",
  };

  return (
    <button style={buttonStyle} className="buttons">
      {to ? <NavLink to={to}>{text}</NavLink> : text}
      <FaArrowDown
        style={{
          transform: down ? "rotate(0deg)" : "rotate(-90deg)",
          transition: "transform 0.3s ease",
        }}
      />
    </button>
  );
};

export default Button;
