// RegisterStu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Register.module.css"
import { DisplayName } from '../components/inputs/DisplayName';
import { TextInput } from '../components/inputs/TextInput';
import { MajorsSearch } from '../components/inputs/MajorsSearch';
import { MinorsSearch } from '../components/inputs/MinorsSearch';
import { YearDropdown } from '../components/inputs/YearDropdown';
import { setEmail, setCuid, setStudentGPA, setStudentYear, setStudentHonors, setStudentMajors, setStudentMinors } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const RegisterStu = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const [selectedYear, setSelectedYear] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();  // Prevents the default form submission behavior
        navigate('/home');
      }

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/register-all');
    }

    const handleInputChange = (e) => {
        if(e.target.name === 'gpa') {
            dispatch(setStudentGPA(e.target.value));
        } else if(e.target.name === 'email') {
            dispatch(setEmail(e.target.value));
        } else if(e.target.name === 'cuid') {
            dispatch(setCuid(e.target.value));
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
                      <MajorsSearch />
                      <MinorsSearch />
                    </div>
                    <div className={styles["two-inputs-container"]}>
                      <TextInput placeholder={'GPA'} name={'gpa'} onChange={handleInputChange} />
                      <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                    </div>
                    <TextInput placeholder={'Email'} name={'email'} onChange={handleInputChange} />
                    <div className={styles["two-inputs-container"]}>
                      <TextInput placeholder={'CUID'} name={'cuid'} onChange={handleInputChange} />
                      <div className={styles["tos"]}>
                          <input type="checkbox" id="tos" name="tos" required />
                          <label htmlFor="tos">Current Honors Student</label>
                      </div>
                    </div>
                    <div className={styles["register-container"]}>
                      <div className={styles["tos"]}>
                          <input type="checkbox" id="tos" name="tos" required />
                          <label htmlFor="tos">I agree to the Terms of Service</label>
                      </div>
                      <div className={styles["register-buttons"]}>
                      <div className={styles["back-link"]}>
                            <a onClick={handleBack}>Back</a>
                      </div>
                      <button className={styles["register-button"]} type="submit">Register</button>
                      </div>
                    </div>
                    <p className={styles['page-count']}>Page 2 of 2</p>
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
