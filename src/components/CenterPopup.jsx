//CenterPopup.jsx
import React from 'react';
import styles from "../styles/CenterPopup.module.css";
import { EditProfessorProfile } from './EditProfessorProfile';
import { EditStudentProfile } from './EditStudentProfile';
import { EditProjectInfo } from './EditProjectInfo';
import { useSelector } from 'react-redux';


export const CenterPopup = () => {
    const { centerPopupContent } = useSelector((state) => state.operator);

    const renderPopup = () => {
        switch (centerPopupContent) {
            case "edit-professor-profile":
                return <EditProfessorProfile />
            case "edit-student-profile":
                return <EditStudentProfile />
            case "edit-project-info":
                return <EditProjectInfo />
            default:
                return <p>Error: incorrect centerPopupContent</p>
        }
    }


    return (
        <div className={styles["center-popup"]}>
            {renderPopup()}
        </div>
    )
}