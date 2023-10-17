// MajorsSearch.jsx
import React from 'react';
import styles from '../../styles/inputStyles/Select.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    setSelectedMajor,
    removeSelectedMajor,
    setMajorQuery,
    setFilteredMajors,
} from '../../features/selectSlice';
import { 
  setStudentMajors,
  removeStudentMajor,
} from '../../features/userSlice';

export const MajorsSearch = () => {
  const dispatch = useDispatch();
  const {
    selectedMajors,
    majorQuery,
    filteredMajors,
  } = useSelector(state => state.select);

  const handleMajorQueryChange = (e) => {
    dispatch(setMajorQuery(e.target.value));
  }

  const handleMajorSelect = (major) => {
    dispatch(setSelectedMajor(major));
    dispatch(setMajorQuery(''));
    dispatch(setFilteredMajors([]));
    dispatch(setStudentMajors(major));
  }

  const handleSelectedMajorClear = (major) => {
    dispatch(removeSelectedMajor(major));
    dispatch(removeStudentMajor(major));
  }


  return (
    <div className={styles["majors-wrapper"]}>
      <label className={styles['select-label']} htmlFor="major">Majors</label>
      <input
        type="text"
        id="major"
        name="major"
        className={styles['select-input']}
        value={majorQuery}
        onChange={handleMajorQueryChange}
        placeholder="Search majors"
      />
      {majorQuery && (
          <ul className={styles['dropdown']}>
              {filteredMajors.map(major => (
                  <li 
                      key={major.majorName}
                      onClick={() => handleMajorSelect(major)}
                  >
                      {major.majorName}
                  </li>
              ))}
          </ul>
      )}
      <div className={styles["selected-majors"]}>
          {selectedMajors.map((major, index) => (
              <div className={styles["selected-major"]} key={index}>
                  <p>{major.majorName}</p>
                  <button
                      className={styles["remove-button"]}
                      onClick={() => handleSelectedMajorClear(major)}
                  >
                      <img src="/assets/remove.svg" alt="Remove" />
                  </button>
              </div>
          ))}
      </div> 
    </div>
  );
};
