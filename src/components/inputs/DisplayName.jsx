// DisplayName.jsx
import React from 'react';
import styles from "../../styles/inputStyles/DisplayName.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    editDisplayName,
    setEditingDisplayName,
    setIsOtherSelected
} from '../../features/userSlice';

export const DisplayName = () => {
    const dispatch = useDispatch();
    const {
        role,
        firstName,
        lastName,
        displayName,
        editingDisplayName,
        isOtherSelected
    } = useSelector((state) => state.user);

    const handleDisplayNameChange = (e) => {
        dispatch(editDisplayName(e.target.value));
    };

    const handleToggleEditingDisplayName = (value) => {
        dispatch(setEditingDisplayName(value));
    };

    const handleToggleIsOtherSelected = (value) => {
        dispatch(setIsOtherSelected(value));
    };

    const handleSaveOther = () => {
        dispatch(setEditingDisplayName(false));
        dispatch(setIsOtherSelected(false));
    };

    return (
        <div className={styles["display-names"]}>
            {role === 'student' ? (
                editingDisplayName ? (
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter Display Name" 
                            value={displayName}
                            onChange={(e) => handleDisplayNameChange(e)}
                        />
                        <button 
                            className={styles["edit-button"]} 
                            onClick={() => handleToggleEditingDisplayName(false)}
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <div className={styles["display-name"]}>
                        <p>Display Name: {displayName}</p>
                        <button 
                            className={styles["edit-button"]} 
                            onClick={() => handleToggleEditingDisplayName(true)}
                        >
                            Change
                        </button>
                    </div>
                )
            ) : (
                <>
                    {editingDisplayName ? (
                        <div className={styles["display-name-inputs"]}>
                            <div>
                                <input 
                                    type="radio" 
                                    id="prof-name" 
                                    name="displayName" 
                                    value={`Prof. ${firstName} ${lastName}`} 
                                    onChange={handleDisplayNameChange}
                                />
                                <label htmlFor="prof-name">Prof. {firstName} {lastName}</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="dr-name-full" 
                                    name="displayName" 
                                    value={`Dr. ${firstName} ${lastName}`} 
                                    onChange={handleDisplayNameChange}
                                />
                                <label htmlFor="dr-name-full">Dr. {firstName} {lastName}</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="dr-name-last" 
                                    name="displayName" 
                                    value={`Dr. ${lastName}`} 
                                    onChange={handleDisplayNameChange}
                                />
                                <label htmlFor="dr-name-last">Dr. {lastName}</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="other" 
                                    name="displayName" 
                                    value="other" 
                                    onChange={() => handleToggleIsOtherSelected(true)}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                            {isOtherSelected && (
                                <input 
                                    type="text" 
                                    placeholder="Enter Display Name" 
                                    value={displayName}
                                    onChange={handleDisplayNameChange}
                                />
                            )}
                            <button 
                                className={styles["edit-button"]} 
                                onClick={handleSaveOther}
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <div className={styles["display-name"]}>
                            <p>Display Name: {displayName}</p>
                            <button 
                                className={styles["edit-button"]} 
                                onClick={() => handleToggleEditingDisplayName(true)}
                            >
                                Change
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
