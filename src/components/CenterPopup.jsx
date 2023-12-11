//CenterPopup.jsx
import React from 'react';
import styles from "../styles/CenterPopup.module.css";
import { EditProfessorProfile } from './EditProfessorProfile';
import { EditStudentProfile } from './EditStudentProfile';
import { EditProjectInfo } from './EditProjectInfo';
import { CreateProjectInfo } from './CreateProjectInfo';
import { ContactProfessor } from './ContactProfessor';
import { useSelector } from 'react-redux';


export const CenterPopup = () => {
    const { centerPopupContent } = useSelector((state) => state.operator);

    const renderPopup = () => {
        switch (centerPopupContent) {
            case "edit-professor-profile":
                return <EditProfessorProfile />
            case "edit-student-profile":
                return <EditStudentProfile />
            case "create-project-info":
                return <CreateProjectInfo />
            case "edit-project-info":
                return <EditProjectInfo />
            case "contact-professor":
                return <ContactProfessor />
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