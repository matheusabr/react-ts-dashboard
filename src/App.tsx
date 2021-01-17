import React from "react";

import Header from "./components/Header";
import MenuDrawer from "./components/MenuDrawer";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuDrawer activePageId={1} />
      <LoginPage />
      <DashboardPage />
      <SettingsPage />
    </div>
  );
}

export default App;
