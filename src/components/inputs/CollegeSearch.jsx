// CollegeSearch.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../styles/inputStyles/Select.module.css";
import {
    setCollegeQuery,
    setSelectedCollege,
    setFilteredColleges,
    removeSelectedCollege,
} from '../../features/selectSlice';

export const CollegeSearch = () => {
    const dispatch = useDispatch();
    const {
        collegeQuery,
        filteredColleges,
        selectedColleges,
    } = useSelector(state => state.select);  // Ensure these states are defined in your slice
    
    const handleCollegeQueryChange = (e) => {
        dispatch(setCollegeQuery(e.target.value));
    };

    const handleCollegeSelect = (college) => {
        dispatch(setSelectedCollege({name: college.name})); // Dispatching action
        dispatch(setCollegeQuery(''));  // Dispatching action
        dispatch(setFilteredColleges([]));  // Dispatching action
    };

    const handleSelectedCollegeClear = (collegeName) => {
        dispatch(removeSelectedCollege({name: collegeName})); 
    };
    
    return ( 
        <div className={styles["colleges-wrapper"]}>
            <label className={styles['select-label']} htmlFor="college">College</label>
            <input
                type="text"
                id="college"
                name="college"
                className={styles['select-input']}
                value={collegeQuery}
                onChange={handleCollegeQueryChange}
                placeholder="Search Colleges"
            />
            {collegeQuery && (
                <ul className={styles['dropdown']}>
                    {filteredColleges.map(college => (
                        <li 
                            key={college.name}
                            onClick={() => handleCollegeSelect(college)}
                        >
                            {college.name}
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles["selected-colleges"]}>
                {selectedColleges.map(selectedCollege => (
                    <div className={styles["selected-college"]} key={selectedCollege.value}>
                        <p>{selectedCollege.value}</p>
                        <button
                            className={styles["remove-button"]}
                            onClick={() => handleSelectedCollegeClear(selectedCollege.value)}
                        >
                            <img src="/assets/remove.svg" alt="Remove" />
                        </button>
                    </div>
                ))}
            </div>  
        </div>
    );
};
