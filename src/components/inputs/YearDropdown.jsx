// YearDropdown.jsx
import React from 'react';
import styles from "../../styles/Register.module.css";

export const YearDropdown = ({ selectedYear, setSelectedYear }) => {
    return (
        <select 
            className={styles.dropdown}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            required
        >
            <option value="" disabled>Select your year</option>
            <option value="freshman">Freshman (1st year)</option>
            <option value="sophomore">Sophomore (2nd year)</option>
            <option value="junior">Junior (3rd year)</option>
            <option value="senior">Senior (4th year)</option>
            <option value="super_senior">Super Senior</option>
            <option value="graduate">Graduate Student</option>
        </select>
    );
};
