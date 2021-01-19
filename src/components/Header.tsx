import React from "react";

import { User } from "../store/types/authTypes";

import { COLORS } from "../styles/colors";

interface Props {
  user: User;
}

const Header: React.FC<Props> = ({ user }) => {
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
          alignItems: "flex-end",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: "bold" }}>{user.name}</span>
        <span style={{ fontSize: 10, fontWeight: "lighter" }}>
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default Header;
