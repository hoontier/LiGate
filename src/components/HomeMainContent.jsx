// HomeMainContent.jsx
import React, { useEffect, useRef } from 'react';
import styles from "../styles/HomeMainContent.module.css";
import { Card } from './Card';
import cardData from "../../sampleData.json";  // Import the JSON data
import { attachScrollHandler } from '../../scrollHandler';  // Import the scroll handler

export const HomeMainContent = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const cleanup = attachScrollHandler(scrollRef.current);
        return cleanup;
    }, []);  

    return (
        <div className={styles['main-content-container']}>
            <div className={styles['main-content-header']}>
                {/* search projects text input */}
                <input className={styles['search-projects']} type="text" placeholder="Search Projects" />
                {/* create project button */}
                <button className={styles['create-project']}>Create Project</button>
            </div>
            <div className={styles['main-content-body']} ref={scrollRef}>
                {cardData.map((card, index) => (
                    <Card key={index} card={card} isFirst={index === 0} />
                ))}
            </div>
        </div>
    )
};