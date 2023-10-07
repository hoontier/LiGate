// LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleProfessorLogin = () => {
    navigate('/professor-register');
  };

  const handleStudentLogin = () => {
    navigate('/student-register');
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-body']}>
        <img className={styles.logo} alt="LiGate" src="/assets/LiGateLogo.svg" />
        <div className={styles['login-buttons-container']}>
          <button className={styles['professor-login']} onClick={handleProfessorLogin}>
            Professor Login
          </button>
          <button className={styles['student-login']} onClick={handleStudentLogin}>
            Student Login
          </button>
        </div>
      </div>
    </div>
  );
};
