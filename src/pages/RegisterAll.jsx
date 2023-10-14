// ProfessorPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import styles from "../styles/RegisterAll.module.css"


export const RegisterAll = () => {
    // Function to display the selected file name
    const [fileName, setFileName] = React.useState('Add Profile Photo (optional)');
    const [role, setRole] = useState('neutral');

    const navigate = useNavigate();  

    const handleFileChange = (event) => {
        setFileName(event.target.files[0] ? event.target.files[0].name : 'Add Profile Photo (optional)'); 
    };

    const handleLogoClick = () => {
      navigate('/login'); 
    };

    const toggleRole = (event) => {
      const clickedRole = event.target.innerText.toLowerCase();
      setRole(clickedRole);
    };

    const handleRegister = (event) => {
      event.preventDefault();  // Prevents the default form submission behavior
      // if role is student, navigate to register-stu, else if role is professor, navigate to register-prof, else do nothing
      if (role === 'student') {
        navigate('/register-stu');
      } else if (role === 'professor') {
        navigate('/register-prof');
      }
    }
  
  

    return (
        <div className={styles["register-body"]}>
            <div className={styles["main-contents"]}>
                <img 
                    className={styles['logo']} 
                    alt="LiGate" 
                    src="/assets/LiGateLogo.svg" 
                    onClick={handleLogoClick}  
                />
                <form className={styles.form} onSubmit={handleRegister}>
                  <h1>Register</h1>
                  <div className={styles["two-inputs-container"]}>
                    <input className={styles["text-input"]} type="text" placeholder="First Name" />
                    <input className={styles["text-input"]} type="text" placeholder="Last Name" />
                  </div>
                  <div className={styles["toggle-role-container"]}>
                <p>I am a...</p>
                <div className={styles["role-toggle"]}>
                    <div className={styles["toggler-container"]}>
                      <p onClick={toggleRole} className={styles["toggler"]}>Student</p>
                    </div>
                    <div 
                        className={`${styles["selector"]} ${role === 'student' ? styles["left"] : styles["right"]}`} 
                    >
                    </div>
                    <div className={styles["toggler-container"]}>
                      <p onClick={toggleRole} className={styles["toggler"]}>Professor</p>
                    </div>
                </div>
              </div>
                  <label className={styles["file-input-label"]}>
                    <img className={styles["file-input-icon"]} src="/assets/AddProfile.svg" alt="" aria-hidden="true" />
                    <input className={`${styles["file-input"]} ${styles["upload-input"]}`} type="file" accept="image/*" onChange={handleFileChange} />
                    <span className={styles["file-input-text"]}>{fileName}</span>
                  </label>
                  <div className={styles["tos"]}>
                  <input type="checkbox" id="tos" name="tos" required />
                  <label htmlFor="tos">I agree to the Terms of Service</label>
              </div>
              <button type="submit">Next</button>
              <p className={styles['page-count']}>Page 1 of 2</p>
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
