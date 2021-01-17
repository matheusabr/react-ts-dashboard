import React from "react";

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
    <ul>
      {MENU_LIST.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
};

export default MenuDrawer;
