import React from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";

import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return (
            <div>
              {/* Main Header */}
              <Header />
              {/* Content */}
              <div
                style={{
                  display: "flex",
                  height: "100vw",
                }}
              >
                {/* Sidemenu */}
                <MenuDrawer />
                {/* Private Pages */}
                <div style={{ flexGrow: 1 }}>
                  <Component {...props} />
                </div>
              </div>
            </div>
          );
        }}
      ></Route>
    );
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
