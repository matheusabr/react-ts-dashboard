import React from "react";

import { COLORS } from "../styles/colors";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: COLORS.grey.dark,
        backgroundColor: COLORS.secondary,
        fontWeight: "bold",
        padding: 10,
        height: 50,
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default PageHeader;
