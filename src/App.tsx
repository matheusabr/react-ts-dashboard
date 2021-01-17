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
      <div
        style={{
          display: "flex",
          height: "100vw",
        }}
      >
        <MenuDrawer activePageId={1} />
        <div style={{ flexGrow: 1 }}>
          <DashboardPage />
        </div>
      </div>
      {/* <LoginPage />
      <SettingsPage /> */}
    </div>
  );
}

export default App;
