// RegisterProf.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Register.module.css";
import { CollegeSearch } from '../components/inputs/CollegeSearch';
import { DepartmentSearch } from '../components/inputs/DepartmentSearch';
import { DisplayName } from '../components/inputs/DisplayName';
import { TextInput } from '../components/inputs/TextInput';
import { 
    setEmail, 
    setCuid, 
    setProfessorAcademicTitle
} from '../features/userSlice';

// Exporting RegisterProf component
export const RegisterProf = () => {
    const navigate = useNavigate();  // Get the navigate function for navigation
    const dispatch = useDispatch();  // Get the dispatch function to dispatch actions to the store

    // Function to handle registration form submission
    const handleRegister = (event) => {
        event.preventDefault();  // Prevent default form submission behavior
        navigate('/home');  // Navigate to home page on successful registration
    };

    // Function to handle back button click event
    const handleBack = (event) => {
        event.preventDefault();  // Prevent default click event behavior
        navigate('/register-all');  // Navigate back to the all-registration page
    };

    // Function to handle input change events
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === 'academicTitle') {
            dispatch(setProfessorAcademicTitle(value));  // Dispatch action to set academic title
        } else if(name === 'email') {
            dispatch(setEmail(value));  // Dispatch action to set email
        } else if(name === 'cuid') {
            dispatch(setCuid(value));  // Dispatch action to set cuid
        }
    };
    
    return (
        <div className={styles["register-body"]}>
            <div className={styles["main-contents"]}>
                <img 
                    className={styles['logo']} 
                    alt="LiGate" 
                    src="/assets/LiGateLogo.svg" 
                />
                <form className={styles.form} onSubmit={handleRegister}>
                    <h1>Professor Registration</h1>
                    <DisplayName />
                    {/* Text input for entering academic title */}
                    <TextInput placeholder={'Academic Title (i.e. Professor, Lecturer, Researcher)'} name={'academicTitle'} onChange={handleInputChange} />
                    <div className={styles["two-inputs-container"]}>
                        {/* College and Department search components */}
                        <CollegeSearch />
                        <DepartmentSearch />
                    </div>
                    {/* Text inputs for entering email and cuid */}
                    {/* TODO: Remove email? */}
                    <TextInput placeholder={'Email'} name={'email'} onChange={handleInputChange} />
                    <TextInput placeholder={'CUID'} name={'cuid'} onChange={handleInputChange} />
                    <div className={styles["register-container"]}>
                      <div className={styles["tos"]}>
                          {/* Checkbox for agreeing to the Terms of Service */}
                          <input type="checkbox" id="tos" name="tos" required />
                          <label htmlFor="tos">I agree to the Terms of Service</label>
                      </div>
                      <div className={styles["register-buttons"]}>
                      <div className={styles["back-link"]}>
                          {/* Link to navigate back */}
                          <a onClick={handleBack}>Back</a>
                      </div>
                      {/* Register button to submit the form */}
                      <button className={styles["register-button"]} type="submit">Register</button>
                      </div>
                    </div>
                    {/* Indicator for the page count */}
                    <p className={styles['page-count']}>Page 2 of 2</p>
                </form>
            </div>
            <div className={styles["image"]}>
                {/* Image of a professor */}
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
