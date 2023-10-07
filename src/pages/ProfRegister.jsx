// ProfessorPage.jsx
import React from 'react';
import styles from "../styles/Register.module.css"

export const ProfRegister = () => {
  return (
    <div className={styles["register-body"]}>
      <div className={styles["main-contents"]}>
        <h1>Professor Registration</h1>
      </div>
      <div className={styles["image"]}>
        <img src="../../public/assets/ProfRegisterPhoto.png" alt="Professor" />
      </div>
    </div>
  );
};