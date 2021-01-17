import React from "react";

import { COLORS } from "../styles/colors";

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.grey.dark,
        color: COLORS.secondary,
        padding: 10,
        height: 30,
      }}
    >
      <span style={{ fontWeight: "bold" }}>Dashboard</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: "bold" }}>Nome User</span>
        <span style={{ fontSize: 10, fontWeight: "lighter" }}>User Role</span>
      </div>
    </div>
  );
};

export default Header;
