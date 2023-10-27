// RegisterStu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Register.module.css";
import { DisplayName } from '../components/inputs/DisplayName';
import { TextInput } from '../components/inputs/TextInput';
import { MajorsSearch } from '../components/inputs/MajorsSearch';
import { MinorsSearch } from '../components/inputs/MinorsSearch';
import { YearDropdown } from '../components/inputs/YearDropdown';
import { setEmail, setCuid, setStudentGPA, setStudentYear, setStudentHonors, setStudentMajors, setStudentMinors } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

// Exporting RegisterStu component
export const RegisterStu = () => {
    const navigate = useNavigate();  // Get the navigate function for navigation
    const dispatch = useDispatch();  // Get the dispatch function to dispatch actions to the store

    // Function to handle registration form submission
    const handleRegister = (event) => {
        event.preventDefault();  // Prevents the default form submission behavior
        navigate('/home');  // Navigate to home page on successful registration
    };

    // Function to handle back button click event
    const handleBack = (event) => {
        event.preventDefault();  // Prevent default click event behavior
        navigate('/register-all');  // Navigate back to the all-registration page
    };

    // Function to handle input change events
    const handleInputChange = (e) => {
        if(e.target.name === 'gpa') {
            dispatch(setStudentGPA(e.target.value));  // Dispatch action to set GPA
        } else if(e.target.name === 'email') {
            dispatch(setEmail(e.target.value));  // Dispatch action to set email
        } else if(e.target.name === 'cuid') {
            dispatch(setCuid(e.target.value));  // Dispatch action to set CUID
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
                    <h1>Student Registration</h1>
                    <DisplayName />
                    <div className={styles["two-inputs-container"]}>
                      {/* Major and Minor search components */}
                      <MajorsSearch />
                      <MinorsSearch />
                    </div>
                    <div className={styles["two-inputs-container"]}>
                      {/* Text input for entering GPA and Year dropdown component */}
                      <TextInput placeholder={'GPA'} name={'gpa'} onChange={handleInputChange} />
                      <YearDropdown />
                    </div>
                    {/* Text input for entering email */}
                    <TextInput placeholder={'Email'} name={'email'} onChange={handleInputChange} />
                    <div className={styles["two-inputs-container"]}>
                      {/* Text input for entering CUID and checkbox for Honors Student status */}
                      <TextInput placeholder={'CUID'} name={'cuid'} onChange={handleInputChange} />
                      <div className={styles["tos"]}>
                          <input type="checkbox" id="tos" name="tos" required />
                          <label htmlFor="tos">Current Honors Student</label>
                      </div>
                    </div>
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
                {/* Image of a professor (might need to update alt text or image source for accuracy) */}
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
