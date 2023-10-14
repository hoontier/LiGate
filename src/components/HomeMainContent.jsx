// HomeMainContent.jsx
import React, { useEffect, useRef } from 'react';
import styles from "../styles/HomeMainContent.module.css";
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../features/projectsSlice';
import cardData from "../../sampleData.json";  
import { attachScrollHandler } from '../../scrollHandler';

export const HomeMainContent = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);
    const scrollRef = useRef(null);

    useEffect(() => {
        dispatch(setProjects(cardData));  // Set initial data

        const cleanup = attachScrollHandler(scrollRef.current);
        return cleanup;
    }, [dispatch]);  

    return (
        <div className={styles['main-content-container']}>
            <div className={styles['main-content-header']}>
                {/* search projects text input */}
                <input className={styles['search-projects']} type="text" placeholder="Search Projects" />
                {/* create project button */}
                <button className={styles['create-project']}>Create Project</button>
            </div>
            <div className={styles['main-content-body']} ref={scrollRef}>
                {projects.map((card, index) => (
                    <Card key={index} card={card} isFirst={index === 0} />
                ))}
            </div>
        </div>
    )
};