// HomeMainContent.jsx
import React, { useEffect, useRef } from 'react';
import styles from "../styles/HomeMainContent.module.css";
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../features/projectsSlice';
import cardData from "../../sampleData.json";  
import { attachScrollHandler } from '../../scrollHandler';
import { setIsCenterPopupOpen, setCenterPopupContent } from '../features/operatorSlice';

export const HomeMainContent = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);
    const { role } = useSelector((state) => state.user);
    const scrollRef = useRef(null);

    useEffect(() => {
        dispatch(setProjects(cardData));  // Set initial data

        const cleanup = attachScrollHandler(scrollRef.current);
        return cleanup;
    }, [dispatch]);  

    // Function to render the center popup component when the create project button is clicked
    const renderCenterPopup = () => {
        dispatch(setIsCenterPopupOpen(true));
        dispatch(setCenterPopupContent('edit-project-info'));
    };

    

    return (
        <div className={styles['main-content-container']}>
            <div className={styles['main-content-header']}>
                {/* search projects text input */}
                <input className={styles['search-projects']} type="text" placeholder="Search Projects" />
                {/* create project button */}
                {role === 'professor' && (
                    <button className={styles['create-project']} onClick={renderCenterPopup}>Create Project</button>
                )}
            </div>
            <div className={styles['main-content-body']} ref={scrollRef}>
                {projects.map((card, index) => (
                    <Card key={index} card={card} isFirst={index === 0} />
                ))}
            </div>
        </div>
    )
};