import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";

import PrivateRoute from "./auth/PrivateRoute";

import { RootState } from "./store";
import { AlertState } from "./store/reducers/alertReducer";
import { AlertType } from "./store/types/alertTypes";

const App: React.FC = () => {
  const sAlert: AlertState = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    if (sAlert.show) {
      alert(
        `${sAlert.type === AlertType.WARNING && "Warning -"} ${sAlert.message}`
      );
    }
  }, [sAlert]);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={DashboardPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/settings" component={SettingsPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
