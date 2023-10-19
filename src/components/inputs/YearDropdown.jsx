// YearDropdown.jsx
import React from 'react';
import styles from "../../styles/Register.module.css";
import { setStudentYear } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const YearDropdown = () => {
    const dispatch = useDispatch();

    const selectedYear = useSelector(state => state.user.student.year);

    const handleYearChange = (e) => {
        dispatch(setStudentYear(e.target.value));
    }
    
    return (
        <select 
            className={styles.dropdown}
            value={selectedYear}
            onChange={handleYearChange}
            required
        >
            <option value="" disabled>Select your year</option>
            <option value="1">1st year</option>
            <option value="2">2nd year</option>
            <option value="3">3rd year</option>
            <option value="4">4th year</option>
            <option value="5+">5+ Years (Undergrad)</option>
            <option value="grad">Graduate Student</option>
        </select>
    );
};
