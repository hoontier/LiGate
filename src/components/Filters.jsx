// Filters.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/Filters.module.css';
import collegesAndDepartments from '../../collegesAndDepartments.json';
import Select from 'react-select';

export const Filters = () => {
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

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
            const departmentOptions = selected.departments.map(department => ({
                value: department,
                label: department
            }));
            setDepartments(departmentOptions);
        } else {
            setDepartments([]);
        }
    }, [selectedCollege]);

    return (
        <div className={styles['filters-container']}>
            <h2 className={styles['filters-header']}>Filters</h2>
            <div className={styles['filter-group']}>
                <label className={styles['filter-label']} htmlFor="sort-by">Sort By</label>
                <select className={styles['filter-select']} id="sort-by" name="sort-by">
                    {/* Add options here */}
                </select>
            </div>
            <div className={styles['filter-group']}>
                <label className={styles['filter-label']} htmlFor="college">College</label>
                <Select
                    id="college"
                    name="college"
                    options={colleges}
                    value={selectedCollege}
                    onChange={setSelectedCollege}
                    isClearable
                    placeholder="Select a College"
                />
            </div>
            <div className={styles['filter-group']}>
                <label className={styles['filter-label']} htmlFor="department">Department</label>
                <Select
                    id="department"
                    name="department"
                    options={departments}
                    value={selectedDepartment}
                    onChange={setSelectedDepartment}
                    isClearable
                    placeholder="Select a Department"
                    isDisabled={departments.length === 0}
                />
            </div>
            <div className={styles['filter-group']}>
                <label className={styles['filter-label']} htmlFor="min-gpa">Minimum GPA</label>
                <input className={styles['filter-input']} type="text" id="min-gpa" name="min-gpa" />
            </div>
            <div className={styles['filter-group-checkbox']}>
                <label className={styles['filter-label-checkbox']} htmlFor="honors-only">Honors Only</label>
                <input className={styles['filter-checkbox']} type="checkbox" id="honors-only" name="honors-only" />
            </div>
        </div>
    );
};