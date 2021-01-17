import React from "react";

type LabelVariant = "inline" | "vertical";
type InputVariant = "standard" | "filled" | "outline";

interface Props {
  label: string;
  labelVariant?: LabelVariant;
  type: string;
  placeholder?: string;
  inputVariant?: InputVariant;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({
  label,
  labelVariant = "inline",
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: labelVariant === "vertical" ? "column" : "row",
      }}
    >
      <span style={{ alignSelf: "flex-start" }}>{label}</span>
      <input type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default TextField;
