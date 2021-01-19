import React from "react";
import { COLORS } from "../../styles/colors";

interface Props {
  label: string;
  margin?: number | string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  label,
  margin = 0,
  color = "#fcfcfc",
  backgroundColor = COLORS.grey.dark,
  disabled,
  onClick,
}) => {
  return (
    <button
      style={{
        height: 40,
        border: 0,
        borderRadius: 25,
        padding: "5px 20px",
        fontSize: 16,
        fontWeight: "bold",
        margin,
        color,
        backgroundColor,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
