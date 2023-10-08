// ProfessorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import styles from "../styles/Register.module.css"


export const Register = () => {
    // Function to display the selected file name
    const [fileName, setFileName] = React.useState('Add Profile Photo (optional)');

    const navigate = useNavigate();  

    const handleFileChange = (event) => {
        setFileName(event.target.files[0] ? event.target.files[0].name : 'Add Profile Photo (optional)'); 
    };

    const handleLogoClick = () => {
      navigate('/login'); 
    };
  

    return (
        <div className={styles["register-body"]}>
            <div className={styles["main-contents"]}>
                <img 
                    className={styles['logo']} 
                    alt="LiGate" 
                    src="/assets/LiGateLogo.svg" 
                    onClick={handleLogoClick}  
                />
                <form className={styles.form}>
                  <h1>Register</h1>
                  <div className={styles["name-inputs"]}>
                    <input className={styles["text-input"]} type="text" placeholder="First Name" />
                    <input className={styles["text-input"]} type="text" placeholder="Last Name" />
                  </div>
                  <label className={styles["file-input-label"]}>
                    <img className={styles["file-input-icon"]} src="/assets/AddProfile.svg" alt="" aria-hidden="true" />
                    <input className={`${styles["file-input"]} ${styles["upload-input"]}`} type="file" accept="image/*" onChange={handleFileChange} />
                    <span className={styles["file-input-text"]}>{fileName}</span>
                  </label>
                  <button type="submit">Register</button>
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
