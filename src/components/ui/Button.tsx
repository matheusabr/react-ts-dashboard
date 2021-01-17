import React from "react";

interface Props {
  label: string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  label,
  color = "#fcfcfc",
  backgroundColor = "#3d3d3d",
  disabled,
  onClick,
}) => {
  return (
    <button
      style={{ color, backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
