import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import { RootState } from "../store";
import AuthActions from "../store/actions/authActions";
import { COLORS } from "../styles/colors";

function SettingsPage() {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  console.log("user", user);
  return (
    <div>
      <PageHeader title="Settings" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {user && (
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: 250, height: 250 }}
              src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              alt="User Name"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 0",
              }}
            >
              <span style={{ fontSize: 24, fontWeight: "bold" }}>
                {user.name}
              </span>
              <span style={{ fontSize: 18, fontWeight: "lighter" }}>
                {user.email}
              </span>
              <span style={{ fontSize: 16, fontWeight: "lighter" }}>
                Created at {user.createdAt.toDate().toDateString()}
              </span>
            </div>

            <span
              style={{
                fontSize: 16,
                marginTop: 20,
                color: COLORS.grey.darker,
                fontWeight: "lighter",
                cursor: "pointer",
              }}
              onClick={() => dispatch(AuthActions.signOut())}
            >
              Sign Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
