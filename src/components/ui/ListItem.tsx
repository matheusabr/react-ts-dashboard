import React from "react";

interface Props {
  title: string;
  thumbnail?: string;
  subtitle?: string;
}

const ListItem: React.FC<Props> = ({ title, thumbnail, subtitle }) => {
  return (
    <div
      style={{
        display: "flex",
        height: thumbnail ? 80 : 30,
        padding: "2px 0",
      }}
    >
      {thumbnail && (
        <div style={{ height: 80, width: 80 }}>
          <img style={{ height: 80, width: 80 }} src={thumbnail} alt={title} />
        </div>
      )}
      <div
        style={{
          flexGrow: 1,
          padding: "0 5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: thumbnail ? 80 : "auto",
          }}
        >
          {subtitle && (
            <span style={{ fontSize: 14, fontWeight: "lighter" }}>
              {subtitle}
            </span>
          )}
          <span style={{ fontSize: 16, fontWeight: "bold" }}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
