// Card.jsx
import React from "react";
import styles from "../styles/Card.module.css";
import { useDispatch, useSelector } from 'react-redux';
import cardData from "../../sampleData.json";  
import { setIsCenterPopupOpen, setCenterPopupContent } from '../features/operatorSlice';
import { render } from "react-dom";


// Alright so figure out how cards are rendered in,
// and use a similar process in order to get the cotnact info
// into the contact section 

export const Card = ({ card, isFirst }) => {
     const dispatch = useDispatch();

     // Function to render the center popup component when the create project button is clicked
     const renderCenterPopup = () => {
        dispatch(setIsCenterPopupOpen(true));
        dispatch(setCenterPopupContent('contact-professor'));
    };

    return(
        <div className={`${styles['card']} ${isFirst ? styles['first-card'] : ''}`}>
            <div className={styles['card-left']}>
                <div className={styles['card-header']}>
                    <img className={styles['profile-pic']} alt="Profile" src={card.profilePic} />
                    <h3>{card.title}</h3>
                </div>
                    <p className={styles['card-subtitle']}>
                    <span className={styles['card-prof']}>{card.prof}</span> | 
                    <span className={styles['card-match']}> {card.match}</span> | 
                    <span className={styles['card-match-factors']}> {card.matchFactors.join(", ")}</span> | 
                    <span className={styles['card-research-type']}> {card.researchType}</span>
                </p>
                <p className={styles['card-description']}>{card.projectDescription}</p>
                <ul>
                <li className={styles['card-mandatory-skills']}>Mandatory Skills: {card.mandatorySkills.join(", ")}</li>
                <li className={styles['card-desired-skills']}>Desired Skills: {card.desiredSkills.join(", ")}</li>
                </ul>
            </div>
            <div className={styles['card-right']}>
                <div className={styles['card-stats']}>
                    <p className={styles['card-num']}>{card.applicants}</p>
                    <p className={styles['card-text']}>Applicants</p>
                </div>
                <div className={styles['card-stats']}>
                    <p className={styles['card-num']}>{card.positions}</p>
                    <p className={styles['card-text']}>Positions</p>
                </div>
                <div className={styles['card-contact-button']}>
                    <button onClick={renderCenterPopup}>
                        <img src="/assets/contact-icon.svg" alt="Contact Icon" />
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}