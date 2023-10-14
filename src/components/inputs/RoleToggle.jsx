// RoleToggle.jsx
import React from 'react';
import styles from "../../styles/inputStyles/RoleToggle.module.css"; 

export const RoleToggle = ({ role, setRole }) => {
    const toggleRole = (event) => {
      const clickedRole = event.target.innerText.toLowerCase();
      setRole(clickedRole);
    };
    
    return (
        <div className={styles["toggle-role-container"]}>
            <p>I am a...</p>
            <div className={styles["role-toggle"]}>
                <div className={styles["toggler-container"]}>
                    <p onClick={toggleRole} className={styles["toggler"]}>Student</p>
                </div>
                <div 
                    className={`${styles["selector"]} ${role === 'student' ? styles["left"] : styles["right"]}`} 
                >
                </div>
                <div className={styles["toggler-container"]}>
                    <p onClick={toggleRole} className={styles["toggler"]}>Professor</p>
                </div>
            </div>
        </div>
    );
};
