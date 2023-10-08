// LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/register');
  };


  return (
    <div className={styles['login-page']}>
      <div className={styles['login-body']}>
        <div className={styles['title']}>
          <img className={styles['logo']} alt="LiGate" src="/assets/LiGateLogo.svg" />
          <h2>Empowering Clemson's Research Renaissance</h2>
        </div>
        <button className={styles['login']} onClick={handleLogin}>
          Sign In with Clemson Gmail
        </button>
      </div>
    </div>
  );
};
