// HomePage.jsx
import React from 'react';
import styles from "../styles/HomePage.module.css"
import { Navbar } from '../components/Navbar';
import { HomeMainContent } from '../components/HomeMainContent';
import { Filters } from '../components/Filters';


export const HomePage = () => {

    return (
        <div className={styles['flex-container']}>
            <div className={styles['home-body']}>
                <div className={styles['nav-bar']}>
                    <Navbar />
                </div>
                <div className={styles['filters']}>
                    <Filters />
                </div>
                <div className={styles['main']}>
                    <HomeMainContent />
                </div>
            </div>
        </div>
    )
};
