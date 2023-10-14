// RegisterProf.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/RegisterAll.module.css"
import { CollegeSearch } from '../components/inputs/CollegeSearch';
import { DepartmentSearch } from '../components/inputs/DepartmentSearch';
import collegesAndDepartments from '../../collegesAndDepartments.json';


export const RegisterProf = () => {
    const navigate = useNavigate();  
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [collegeQuery, setCollegeQuery] = useState('');
    const [departmentQuery, setDepartmentQuery] = useState('');
    const [filteredColleges, setFilteredColleges] = useState([]);
    const [filteredDepartments, setFilteredDepartments] = useState([]);

    const handleRegister = (event) => {
        event.preventDefault();  // Prevents the default form submission behavior
        navigate('/home');
      }

    useEffect(() => {
        // Transform the college data to be used in React-Select
        const collegeOptions = collegesAndDepartments.colleges.map(college => ({
            value: college.name,
            label: college.name
        }));
        setColleges(collegeOptions);
    }, []);

    useEffect(() => {
        // If a college is selected, filter its departments
        if (selectedCollege) {
            const selected = collegesAndDepartments.colleges.find(
                college => college.name === selectedCollege.value
            );
            
            // Safety Check: Ensure `selected` is defined before using it
            const departmentOptions = selected 
                ? selected.departments.map(department => ({
                      value: department,
                      label: department
                  }))
                : [];        
            setDepartments(departmentOptions);
        } else {
            setDepartments([]);
        }
    }, [selectedCollege]); 

    useEffect(() => {
        // Filtering colleges based on the user's input
        if(collegeQuery !== '') {
            setFilteredColleges(
                collegesAndDepartments.colleges.filter(college => 
                    college.name.toLowerCase().includes(collegeQuery.toLowerCase())
                )
            );
        } else {
            setFilteredColleges([]);
        }
    }, [collegeQuery]);

    useEffect(() => {
        // Filtering departments based on the user's input and selected college
        if(selectedCollege && departmentQuery !== '') {
            const selected = collegesAndDepartments.colleges.find(
                college => college.name === selectedCollege.name
            );
            setFilteredDepartments(
                selected.departments.filter(department => 
                    department.toLowerCase().includes(departmentQuery.toLowerCase())
                )
            );
        } else {
            setFilteredDepartments([]);
        }
    }, [selectedCollege, departmentQuery]);

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
                    <input className={styles["wide-text-input"]} type="text" placeholder="Academic Title (i.e. Professor, Lecturer, Researcher)" />
                    <div className={styles["two-inputs-container"]}>
                        <CollegeSearch 
                            collegeQuery={collegeQuery}
                            setCollegeQuery={setCollegeQuery}
                            filteredColleges={filteredColleges}
                            setFilteredColleges={setFilteredColleges}
                            selectedCollege={selectedCollege}
                            setSelectedCollege={setSelectedCollege}
                        />
                        <DepartmentSearch 
                            departmentQuery={departmentQuery}
                            setDepartmentQuery={setDepartmentQuery}
                            filteredDepartments={filteredDepartments}
                            setFilteredDepartments={setFilteredDepartments}
                            selectedDepartment={selectedDepartment}
                            selectedCollege={selectedCollege}
                            setSelectedDepartment={setSelectedDepartment}
                        />
                    </div>
                    <button className={styles["register-button"]} type="submit">Register</button>
                    <p className={styles['page-count']}>Page 2 of 2</p>
                </form>
            </div>
            <div className={styles["image"]}>
                <img src="/assets/ProfRegisterPhoto.png" alt="Professor" /> 
            </div>
        </div>
    );
};
