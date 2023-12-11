import React, { useState } from 'react';
//import styles from '../styles/ContactProfessor.module.css';


const ContactProfessor = () => {
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


    // return (
    //     <div className={styles.container}>
    //     <h2 className={styles.title}>Contact Professor</h2>
    //     <form onSubmit={handleSubmit}>
    //         <div className={styles["form-group"]}>
    //             <label htmlFor="name" className={styles.label}>Name:</label>
    //             <input type="text" id="name" value={name} onChange={handleNameChange} className={styles["input-text"]} />
    //         </div>
    //         <div className={styles["form-group"]}>
    //             <label htmlFor="email" className={styles.label}>Email:</label>
    //             <input type="email" id="email" value={email} onChange={handleEmailChange} className={styles["input-email"]} />
    //         </div>
    //         <div className={styles["form-group"]}>
    //             <label htmlFor="resume" className={styles.label}>Resume:</label>
    //             <input type="file" id="resume" onChange={handleResumeChange} className={styles["input-file"]} />
    //         </div>
    //         <div className={styles["form-group"]}>
    //             <label htmlFor="reason" className={styles.label}>Reason Interested:</label>
    //             <textarea id="reason" value={reason} onChange={handleReasonChange} className={styles.textarea} />
    //         </div>
    //         <button type="submit" className={styles["button-submit"]}>Submit</button>
    //     </form>
    // </div>
    // );

    return (
        <div>
            <h2>Contact Professor</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="resume">Resume:</label>
                    <input type="file" id="resume" onChange={handleResumeChange} />
                </div>
                <div>
                    <label htmlFor="reason">Reason Interested:</label>
                    <textarea id="reason" value={reason} onChange={handleReasonChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactProfessor;
