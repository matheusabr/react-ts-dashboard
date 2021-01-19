import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FirebaseApp from "./services/firebase";

import PrivateRoute from "./auth/PrivateRoute";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";

import { RootState } from "./store";
import { AlertState } from "./store/reducers/alertReducer";
import { AlertType } from "./store/types/alertTypes";
import AuthActions from "./store/actions/authActions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const sAlert: AlertState = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    const unsubscribeFirebase = FirebaseApp.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          // Get user profile
          dispatch(AuthActions.getUserProfile({ id: user.uid }));
        }
      }
    );
    return () => {
      unsubscribeFirebase();
    };
  }, [dispatch]);

  useEffect(() => {
    if (sAlert.show) {
      alert(
        `${sAlert.type === AlertType.WARNING ? "Warning -" : ""} ${
          sAlert.message
        }`
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
