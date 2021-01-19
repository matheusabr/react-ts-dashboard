import React from "react";
import { COLORS } from "../../styles/colors";

interface Props {
  label: string;
  margin?: number | string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  small?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  label,
  margin = 0,
  color = COLORS.grey.light,
  backgroundColor = COLORS.grey.dark,
  disabled,
  small = false,
  onClick,
}) => {
  return (
    <button
      style={{
        height: small ? 30 : 40,
        border: 0,
        borderRadius: small ? 15 : 20,
        padding: "5px 20px",
        fontSize: small ? 12 : 16,
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
