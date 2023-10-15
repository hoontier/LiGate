// RegisterAll.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from '../components/inputs/TextInput';
import { ProfilePicFileInput } from '../components/inputs/ProfilePicFileInput';
import { RoleToggle } from '../components/inputs/RoleToggle';
import { setFirstName, setLastName, setDisplayName } from '../features/userSlice';
import styles from "../styles/Register.module.css"

export const RegisterAll = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();  

    const role = useSelector((state) => state.user.role);


    const handleInputChange = (e) => {
      if(e.target.name === 'firstName') {
          dispatch(setFirstName(e.target.value));
      } else if(e.target.name === 'lastName') {
          dispatch(setLastName(e.target.value));
      }
    };

    const handleLogoClick = () => {
      navigate('/login'); 
    };

    const handleNext = (event) => {
      event.preventDefault();
      dispatch(setDisplayName());
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
                    <TextInput name="firstName" placeholder={'First Name'} onChange={handleInputChange} />
                    <TextInput name="lastName" placeholder={'Last Name'} onChange={handleInputChange} />
                  </div>
                    <RoleToggle />
                    <ProfilePicFileInput 
                        styles={styles} 
                    />
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
