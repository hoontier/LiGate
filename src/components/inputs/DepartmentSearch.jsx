// DepartmentSearch.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../styles/inputStyles/Select.module.css";
import {
    setDepartmentQuery,
    setSelectedDepartment,
    setFilteredDepartments,
    removeSelectedDepartment,
} from '../../features/selectSlice';
import { setProfessorDepartment } from '../../features/userSlice';

export const DepartmentSearch = () => {
    const dispatch = useDispatch();
    const {
        departmentQuery,
        filteredDepartments,
        selectedDepartments,
        selectedColleges,
    } = useSelector(state => state.select);  

    const handleDepartmentQueryChange = (e) => {
        dispatch(setDepartmentQuery(e.target.value));
    };

    const handleDepartmentSelect = (department) => {
        dispatch(setSelectedDepartment(department)); 
        dispatch(setDepartmentQuery(''));  
        dispatch(setFilteredDepartments([]));  

        const updatedDepartments = [...selectedDepartments, department];
        dispatch(setProfessorDepartment(updatedDepartments));
    };

    const handleSelectedDepartmentClear = (index) => {
        const departmentToRemove = selectedDepartments[index];
        dispatch(removeSelectedDepartment({name: departmentToRemove.name}));


        const updatedDepartments = selectedDepartments.filter((_, i) => i !== index);
        dispatch(setProfessorDepartment(updatedDepartments));
    };
    
    

    return (
        <div className={styles["departments-wrapper"]}>
                <label className={styles['select-label']} htmlFor="department">Department</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    className={styles['select-input']}
                    value={departmentQuery}
                    onChange={handleDepartmentQueryChange}
                    placeholder="Search Departments"
                    disabled={!selectedColleges}
                />
                {departmentQuery && (
                    <ul className={styles['dropdown']}>
                        {filteredDepartments.map(department => {
                            console.log('Rendering department with key: ', department.name);
                            return (
                                <li 
                                    key={department.name}
                                    onClick={() => handleDepartmentSelect(department)}
                                >
                                    {department.name}
                                </li>
                            );
                        })}
                    </ul>
                )}
            <div className={styles["selected-departments"]}>
                {selectedDepartments.map((dept, index) => (
                    <div key={index} className={styles["selected-department"]}>
                        <p>{dept.name}</p>
                        <button
                            className={styles["remove-button"]}
                            onClick={() => handleSelectedDepartmentClear(index)}
                        >
                            <img src="/assets/remove.svg" alt="Remove" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
