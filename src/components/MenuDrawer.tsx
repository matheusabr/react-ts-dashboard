import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import AuthActions from "../store/actions/authActions";

import { COLORS } from "../styles/colors";

interface MenuItem {
  id: number;
  label: string;
  pathname: string;
  link: string;
  // icon: React.Component;
}

const MENU_LIST: Array<MenuItem> = [
  {
    id: 1,
    label: "Dashboard",
    pathname: "/dashboard",
    link: "/dashboard",
    // icon: <Component />,
  },
  {
    id: 2,
    label: "Settings",
    pathname: "/settings",
    link: "/settings",
    // icon: <Component />,
  },
];

const MenuDrawer: React.FC = () => {
  // Get redux dispatch
  const dispatch = useDispatch();
  // Get route location
  const locationRoute = useLocation();

  return (
    <div
      style={{
        backgroundColor: COLORS.grey.darker,
        width: 160,
      }}
    >
      <ul style={{ margin: 0, padding: 10, listStyleType: "none" }}>
        {MENU_LIST.map((item) => (
          <Link key={item.id} to={item.link}>
            <li
              style={{
                fontSize: 14,
                paddingBottom: 10,
                color:
                  item.pathname === locationRoute.pathname
                    ? COLORS.primary
                    : COLORS.secondary,
              }}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>

      <button onClick={() => dispatch(AuthActions.signOut())}>Sign Out</button>
    </div>
  );
};

export default MenuDrawer;
