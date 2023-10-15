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

export const RegisterProf = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/register-all');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === 'academicTitle') {
            dispatch(setProfessorAcademicTitle(value));
        } else if(name === 'email') {
            dispatch(setEmail(value));
        } else if(name === 'cuid') {
            dispatch(setCuid(value));
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
                    <TextInput placeholder={'Academic Title (i.e. Professor, Lecturer, Researcher)'} name={'academicTitle'} onChange={handleInputChange} />
                    <div className={styles["two-inputs-container"]}>
                        <CollegeSearch />
                        <DepartmentSearch />
                    </div>
                    <TextInput placeholder={'Email'} name={'email'} onChange={handleInputChange} />
                    <TextInput placeholder={'CUID'} name={'cuid'} onChange={handleInputChange} />
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
