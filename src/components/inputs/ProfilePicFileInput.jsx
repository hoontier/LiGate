// ProfilePicFileInput.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFileName } from '../../features/userSlice';  // Ensure path is correct
import styles from "../../styles/inputStyles/ProfilePicFileInput.module.css";

export const ProfilePicFileInput = ({ fileName }) => {  // Removed setFileName from props
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        dispatch(setFileName(event.target.files[0] ? event.target.files[0].name : 'Add Profile Photo (optional)'));
    };

    return (
        <label className={styles["file-input-label"]}>
            <img className={styles["file-input-icon"]} src="/assets/AddProfile.svg" alt="" aria-hidden="true" />
            <input 
                className={`${styles["file-input"]} ${styles["upload-input"]}`} 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
            />
            <span className={styles["file-input-text"]}>{fileName}</span>
        </label>
    );
};
