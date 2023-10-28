import React, { useEffect } from 'react';
import styles from "../styles/HomePage.module.css"
import { Navbar } from '../components/Navbar';
import { HomeMainContent } from '../components/HomeMainContent';
import { Filters } from '../components/Filters';
import { CenterPopup } from '../components/CenterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCenterPopupOpen, setCenterPopupContent } from '../features/operatorSlice';

export const HomePage = () => {
    const { isCenterPopupOpen } = useSelector((state) => state.operator);
    const dispatch = useDispatch();
    const popupRef = React.createRef();  // Create a ref for the CenterPopup component

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                dispatch(setIsCenterPopupOpen(false));
                dispatch(setCenterPopupContent(""));
            }
        };

        if (isCenterPopupOpen) {
            // Add the event listener when the popup is open
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            // Clean up the event listener when the component unmounts or the popup closes
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCenterPopupOpen, dispatch, popupRef]);

    
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
                {isCenterPopupOpen && (
                    <>
                        <div className={styles['overlay']} />
                        <div ref={popupRef}>
                            <CenterPopup />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};
