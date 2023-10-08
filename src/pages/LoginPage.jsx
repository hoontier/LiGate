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
        <img className={styles['logo']} alt="LiGate" src="/assets/LiGateLogo.svg" />
        <button className={styles['login']} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
