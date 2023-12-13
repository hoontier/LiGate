import React, { useState } from 'react';
import styles from '../styles/ContactProfessor.module.css';


export const ContactProfessor = ({card}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [reason, setReason] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };


    return (
        <div className={styles.container}>
        {/* Add In contact professor name */}

        {/* Formatting Should be:
        Conttac Prefix Name for Research Title */}
        <h2 className={styles.title}>Contact Professor</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
                <label htmlFor="resume" className={styles.label}>Resume:</label>
                <input type="file" id="resume" onChange={handleResumeChange} className={styles["input-file"]} />
            </div>
            <div className={styles["form-group"]}>
                <label htmlFor="reason" className={styles.label}>Reason Interested:</label>
                <textarea id="reason" value={reason} onChange={handleReasonChange} className={styles.textarea} />
            </div>
            <button type="submit" className={styles["button-submit"]}>Submit</button>
        </form>
    </div>
    );

};
