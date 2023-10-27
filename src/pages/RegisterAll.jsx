// RegisterAll.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from '../components/inputs/TextInput';
import { ProfilePicFileInput } from '../components/inputs/ProfilePicFileInput';
import { RoleToggle } from '../components/inputs/RoleToggle';
import { setFirstName, setLastName, setDisplayName, setRoleAndInitialize } from '../features/userSlice';
import styles from "../styles/Register.module.css"

// Exporting RegisterAll component
export const RegisterAll = () => {
    // Get the dispatch function to dispatch actions to the store
    const dispatch = useDispatch();

    // Get the navigate function to programmatically navigate to different routes
    const navigate = useNavigate();  

    // Selecting specific slices of state from the store
    const role = useSelector((state) => state.user.role);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    // Function to handle input change events
    const handleInputChange = (e) => {  
      if(e.target.name === 'firstName') {
          dispatch(setFirstName(e.target.value));  // Dispatch an action to set first name
      } else if(e.target.name === 'lastName') {
          dispatch(setLastName(e.target.value));  // Dispatch an action to set last name
      }
    };
    
    // Function to handle logo click event
    const handleLogoClick = () => {
      navigate('/login');  // Navigate to login page on logo click
    };

    // Function to handle form submission
    const handleNext = (event) => {
      event.preventDefault();  // Prevent default form submission behavior
      dispatch(setDisplayName());  // Dispatch an action to set display name
      dispatch(setRoleAndInitialize(role));  // Dispatch an action to set role and initialize user

      // Conditional navigation based on user role
      if (role === 'student') {
        navigate('/register-stu');  // Navigate to student registration page
      } else if (role === 'professor') {
        navigate('/register-prof');  // Navigate to professor registration page
      }
    }

    // Render the component
    return (
        <div className={styles["register-body"]}>
            <div className={styles["main-contents"]}>
                <img 
                    className={styles['logo']} 
                    alt="LiGate" 
                    src="/assets/LiGateLogo.svg" 
                    onClick={handleLogoClick}  // Handle logo click event
                />
                <form className={styles.form} onSubmit={handleNext}>  {/*Handle form submission*/}
                  <h1>Register</h1>
                  <div className={styles["two-inputs-container"]}>
                    <TextInput name="firstName" placeholder={'First Name'} onChange={handleInputChange} value={firstName}/>
                    <TextInput name="lastName" placeholder={'Last Name'} onChange={handleInputChange} value={lastName}/>
                  </div>
                    <RoleToggle />  {/*// Toggle user role*/}
                    <ProfilePicFileInput 
                        styles={styles} 
                    />
                  <button type="submit" className={styles['register-button']}>Next</button>
                  <p className={styles['page-count']}>Page 1 of 2</p>  {/*// Indicate page count*/}
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
