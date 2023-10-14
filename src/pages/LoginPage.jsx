// LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [signInClicked, setSignInClicked] = React.useState(false);

  const handleLogin = () => {
    setSignInClicked(true);
  };

  const handleRegisterClick = () => {
    navigate("/register-all");
  }

  const handleViewProjectsClick = () => {
    navigate("/home");
  }

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-body']}>
        <div className={styles['title']}>
          <img className={styles['logo']} alt="LiGate" src="/assets/LiGateLogo.svg" />
          <h2>Empowering Clemson's Research Renaissance</h2>
        </div>
        {signInClicked ? (
          <div className={styles['option-buttons']}>
            <button className={styles['register-button']} onClick={handleRegisterClick}>
              Register
            </button>
            <button className={styles['view-projects-button']} onClick={handleViewProjectsClick}>
              View Projects
            </button>
          </div>
        ) : (
          <button className={styles['login-button']} onClick={handleLogin}>
            Sign In with Clemson Gmail
          </button>
        )}
      </div>
    </div>
  );
};
