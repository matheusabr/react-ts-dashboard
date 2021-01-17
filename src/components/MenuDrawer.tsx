import React from "react";
import { COLORS } from "../styles/colors";

interface MenuItem {
  id: number;
  label: string;
  link: string;
  // icon: React.Component;
}

const MENU_LIST: Array<MenuItem> = [
  {
    id: 1,
    label: "Dashboard",
    link: "/dashboard",
    // icon: <Component />,
  },
  {
    id: 2,
    label: "Settings",
    link: "/settings",
    // icon: <Component />,
  },
];

interface Props {
  activePageId: number;
}

const MenuDrawer: React.FC<Props> = ({ activePageId }) => {
  return (
    <div style={{ backgroundColor: COLORS.grey.darker }}>
      <ul style={{ margin: 0, padding: 10, listStyleType: "none" }}>
        {MENU_LIST.map((item) => (
          <li
            key={item.id}
            style={{
              fontSize: 14,
              paddingBottom: 10,
              color:
                item.id === activePageId ? COLORS.primary : COLORS.secondary,
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDrawer;
