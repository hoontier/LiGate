// RoleToggle.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../../features/userSlice';
import styles from "../../styles/inputStyles/RoleToggle.module.css";

export const RoleToggle = () => {
    const dispatch = useDispatch();
    const role = useSelector((state) => state.user.role);

    const toggleRole = (event) => {
        const clickedRole = event.target.innerText.toLowerCase();
        dispatch(setRole(clickedRole));
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
