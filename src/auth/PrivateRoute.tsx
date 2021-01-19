import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { RootState } from "../store";

import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated, user } = useSelector((state: RootState) => state.auth);

  if (authenticated) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return (
            <div>
              {/* Main Header */}
              <Header user={user} />
              {/* Content */}
              <div
                style={{
                  display: "flex",
                  height: "100vh",
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
