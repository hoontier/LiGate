import React from "react";
import "../styles/LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-body">
        <img className="frame" alt="Frame" src="/assets/LiGateLogo.svg" />
        <div className="login-buttons-container">
          <button className="professor-login">Professor Login</button>
          <button className="student-login">Student Login</button>
        </div>
      </div>
    </div>
  );
};
