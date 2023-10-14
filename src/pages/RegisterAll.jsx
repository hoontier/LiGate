// RegisterAll.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { TextInput } from '../components/inputs/TextInput';
import { ProfilePicFileInput } from '../components/inputs/ProfilePicFileInput';
import { RoleToggle } from '../components/inputs/RoleToggle';
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

    const handleNext = (event) => {
      event.preventDefault();
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
                <form className={styles.form} onSubmit={handleNext}>
                  <h1>Register</h1>
                  <div className={styles["two-inputs-container"]}>
                    <TextInput placeholder={'First Name'} />
                    <TextInput placeholder={'Last Name'} />
                  </div>
                    <RoleToggle role={role} setRole={setRole} />
                    <ProfilePicFileInput 
                        fileName={fileName} 
                        setFileName={setFileName} 
                        styles={styles} 
                    />
                  <div className={styles["tos"]}>
                  <input type="checkbox" id="tos" name="tos" required />
                  <label htmlFor="tos">I agree to the Terms of Service</label>
              </div>
              <button type="submit" className={styles['register-button']}>Next</button>
              <p className={styles['page-count']}>Page 1 of 2</p>
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
