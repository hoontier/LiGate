// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/register-all'); 
    };


    return (
        <div className={styles['navbar']}>
            <img className={styles['logo']} alt="LiGate" src="/assets/LiGateLogo.svg" onClick={handleLogoClick} />
            <div className={styles['navbar-right']}>
                <img className={styles['notification-icon']} alt="Notifications" src="/assets/no-notifications.svg" />
                <img className={styles['profile-pic']} alt="Profile" src="/assets/user.svg" />
                <img className={styles['menu']} alt="Menu" src="/assets/menu.svg" />
            </div>
        </div>
    )
};