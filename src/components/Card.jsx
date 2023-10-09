// Card.jsx
import React from "react";
import styles from "../styles/Card.module.css";

export const Card = ({ card }) => {
    return(
        <div className={styles['card']}>
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
                    <button>
                        <img src="/assets/contact-icon.svg" alt="Contact Icon" />
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}