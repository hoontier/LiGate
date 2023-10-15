// CollegeSearch.jsx
import React from 'react';
import styles from "../../styles/inputStyles/Select.module.css";

export const CollegeSearch = ({
    collegeQuery,
    setCollegeQuery,
    filteredColleges,
    setFilteredColleges,
    selectedCollege,
    setSelectedCollege
}) => {
    return ( 
        <div className={styles["colleges-wrapper"]}>
            <label className={styles['select-label']} htmlFor="college">College</label>
            <input
                type="text"
                id="college"
                name="college"
                className={styles['select-input']}
                value={collegeQuery}
                onChange={(e) => setCollegeQuery(e.target.value)}
                placeholder="Search Colleges"
            />
            {collegeQuery && (
                <ul className={styles['dropdown']}>
                    {filteredColleges.map(college => (
                        <li 
                            key={college.name}
                            onClick={() => {
                                setSelectedCollege({name: college.name});  // Setting selectedCollege as an object with a name property
                                setCollegeQuery('');  
                                setFilteredColleges([]);
                            }}
                        >
                            {college.name}
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles["selected-colleges"]}>
                {selectedCollege && (
                    <div className={styles["selected-college"]}>
                        <p>{selectedCollege.name}</p>
                        <button
                            className={styles["remove-button"]}
                            onClick={() => setSelectedCollege(null)}
                        >
                            <img src="/assets/remove.svg" alt="Remove" />
                        </button>
                    </div>
                )}
            </div> 
        </div>
    );
};
