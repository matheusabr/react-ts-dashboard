import React from "react";

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Dashboard</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Nome User</span>
        <span>User Role</span>
      </div>
    </div>
  );
};

export default Header;
