// HomePage.jsx
import React from 'react';
import styles from "../styles/HomePage.module.css"
import { Navbar } from '../components/Navbar';

export const HomePage = () => {
    return (
        <div className={styles['flex-container']}>
            <div className={styles['home-body']}>
                <div className={styles['nav-bar']}>
                    <Navbar />
                </div>
                <div className={styles['filters']}>
                </div>
                <div className={styles['main']}>
                </div>
            </div>
        </div>
    )
};
