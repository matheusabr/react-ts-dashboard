import React, { useRef } from "react";
import { COLORS } from "../../styles/colors";

type LabelVariant = "inline" | "vertical";
type InputVariant = "standard" | "filled" | "outline";

interface Props {
  type: string;
  label?: string;
  labelColor?: string;
  labelVariant?: LabelVariant;
  placeholder?: string;
  inputVariant?: InputVariant;
  backgroundColor?: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({
  label,
  labelColor = COLORS.grey.darker,
  labelVariant = "inline",
  type,
  placeholder,
  backgroundColor = COLORS.grey.light,
  value,
  handleChange,
}) => {
  const inputRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: labelVariant === "vertical" ? "column" : "row",
        marginBottom: 10,
      }}
    >
      {label && (
        <span
          style={{
            flex: 1,
            alignSelf: "center",
            paddingRight: 10,
            fontWeight: "lighter",
            color: labelColor,
          }}
        >
          {label}
        </span>
      )}
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        style={{
          flex: 2,
          width: "30vw",
          border: 0,
          height: 20,
          borderRadius: 20,
          padding: 10,
          backgroundColor,
        }}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
