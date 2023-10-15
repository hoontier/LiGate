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
import { setProfessorCollege } from '../../features/userSlice';

export const CollegeSearch = () => {
    const dispatch = useDispatch();
    const {
        collegeQuery,
        filteredColleges,
        selectedColleges,
    } = useSelector(state => state.select);
    
    const handleCollegeQueryChange = (e) => {
        dispatch(setCollegeQuery(e.target.value));
    };

    const handleCollegeSelect = (college) => {
        dispatch(setSelectedCollege(college)); 
        dispatch(setCollegeQuery(''));  
        dispatch(setFilteredColleges([]));  

        const updatedColleges = [...selectedColleges, college];
        dispatch(setProfessorCollege(updatedColleges));
    };

    const handleSelectedCollegeClear = (index) => {
        const updatedColleges = selectedColleges.filter((_, i) => i !== index);
        dispatch(setProfessorCollege(updatedColleges));
        dispatch(removeSelectedCollege(updatedColleges));
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
                {selectedColleges.map((selectedCollege, index) => (
                    <div className={styles["selected-college"]} key={selectedCollege.name}>
                        <p>{selectedCollege.name}</p>
                        <button
                            className={styles["remove-button"]}
                            onClick={() => handleSelectedCollegeClear(index)}
                        >
                            <img src="/assets/remove.svg" alt="Remove" />
                        </button>
                    </div>
                ))}
            </div>  
        </div>
    );
};
