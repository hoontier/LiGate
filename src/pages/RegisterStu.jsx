// RegisterStu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Register.module.css"
import { DisplayName } from '../components/inputs/DisplayName';
import { TextInput } from '../components/inputs/TextInput';
import { MajorsSearch } from '../components/inputs/MajorsSearch';
import { MinorsSearch } from '../components/inputs/MinorsSearch';
import { YearDropdown } from '../components/inputs/YearDropdown';

export const RegisterStu = () => {
    const navigate = useNavigate(); 
    // sample first and last name
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [displayName, setDisplayName] = useState(`Prof. ${firstName} ${lastName}`);

    const [editingDisplayName, setEditingDisplayName] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);

    const [selectedYear, setSelectedYear] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();  // Prevents the default form submission behavior
        navigate('/home');
      }

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
                    <DisplayName
                        firstName={firstName}
                        lastName={lastName}
                        displayName={displayName}
                        setDisplayName={setDisplayName}
                        editingDisplayName={editingDisplayName}
                        setEditingDisplayName={setEditingDisplayName}
                        isOtherSelected={isOtherSelected}
                        setIsOtherSelected={setIsOtherSelected}
                    />
                    <div className={styles["two-inputs-container"]}>
                      <MajorsSearch />
                      <MinorsSearch />
                    </div>
                    <div className={styles["two-inputs-container"]}>
                      <TextInput placeholder={'GPA'} />
                      <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                    </div>
                    <TextInput placeholder={'Email'} />
                    <div className={styles["two-inputs-container"]}>
                      <TextInput placeholder={'CUID'} />
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
                          <a href="/register-all">Back</a>
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
