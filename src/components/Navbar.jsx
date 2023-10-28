// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsCenterPopupOpen, setCenterPopupContent } from "../features/operatorSlice";
import { setRole } from "../features/userSlice";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.user);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogoClick = () => {
        navigate('/register-all'); 
    };

    const handleMenuClick = () => {
        setDropdownOpen(prevOpen => !prevOpen);
    };

    const handleLogoutClick = () => {
        setDropdownOpen(false);
        navigate('/login');
    };

    const handleEditProfileClick = () => {
        setDropdownOpen(false);
        dispatch(setIsCenterPopupOpen(true));
        dispatch(setCenterPopupContent(role === 'professor' ? 'edit-professor-profile' : 'edit-student-profile'));
    };

    // TEMPORARY handler to switch the role from student to professor and vice versa. 
    const handleSwitchRole = () => {
        if (role === 'professor') {
            dispatch(setRole('student'));
        } else {
            dispatch(setRole('professor'));
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles['navbar']}>
            <img className={styles['logo']} alt="LiGate" src="/assets/LiGateLogo.svg" onClick={handleLogoClick} />
            <div className={styles['navbar-right']}>
                <img className={styles['notification-icon']} alt="Notifications" src="/assets/no-notifications.svg" />
                <img className={styles['profile-pic']} alt="Profile" src="/assets/user.svg" />
                <img className={styles['menu-icon']} alt="Menu" src="/assets/menu.svg" onClick={handleMenuClick} />
                {isDropdownOpen && (
                    <div className={styles['dropdown']} ref={dropdownRef}>
                        <button onClick={handleEditProfileClick}>Edit Profile</button>
                        <button onClick={handleLogoutClick}>Log Out</button>
                        <button onClick={handleSwitchRole}>Switch Role (TEMPORARY) Current Role: {role}</button>
                    </div>
                )}
            </div>
        </div>
    );
}
