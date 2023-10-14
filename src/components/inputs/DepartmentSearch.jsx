// DepartmentSearch.jsx
import React from 'react';
import styles from "../../styles/inputStyles/DepartmentAndCollegeSearch.module.css";

export const DepartmentSearch = ({
    departmentQuery,
    setDepartmentQuery,
    filteredDepartments,
    setFilteredDepartments,
    selectedDepartment,
    selectedCollege,
    setSelectedDepartment
}) => {
    return ( 
        <div className={styles["departments-wrapper"]}>
                <label className={styles['college-department-label']} htmlFor="department">Department</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    className={styles['select-input']}
                    value={departmentQuery}
                    onChange={(e) => setDepartmentQuery(e.target.value)}
                    placeholder="Search Departments"
                    disabled={!selectedCollege}
                />
                {departmentQuery && (
                    <ul className={styles['dropdown']}>
                        {filteredDepartments.map(department => (
                            <li 
                                key={department}
                                onClick={() => {
                                    setSelectedDepartment(department);
                                    setDepartmentQuery('');
                                    setFilteredDepartments([]);
                                }}
                            >
                                {department}
                            </li>
                        ))}
                    </ul>
                )}
            <div className={styles["selected-departments"]}>
                {selectedDepartment && (
                    <div className={styles["selected-department"]}>
                        <p>{selectedDepartment}</p>
                        <button
                            className={styles["remove-button"]}
                            onClick={() => setSelectedDepartment(null)}
                        >
                            <img src="/assets/remove.svg" alt="Remove" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
