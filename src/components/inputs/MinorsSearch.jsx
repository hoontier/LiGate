// MinorsSearch.jsx
import React from 'react';
import styles from '../../styles/inputStyles/Select.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    setSelectedMinor,
    removeSelectedMinor,
    setMinorQuery,
    setFilteredMinors,
} from '../../features/selectSlice';
import { 
  setStudentMinors,
  removeStudentMinor,
} from '../../features/userSlice';

export const MinorsSearch = () => {
  const dispatch = useDispatch();
  const {
    selectedMinors,
    minorQuery,
    filteredMinors,
  } = useSelector(state => state.select);

  const handleMinorQueryChange = (e) => {
    dispatch(setMinorQuery(e.target.value));
  }

  const handleMinorSelect = (minor) => {
    dispatch(setSelectedMinor(minor));
    dispatch(setMinorQuery(''));
    dispatch(setFilteredMinors([]));
    dispatch(setStudentMinors(minor));
  }

  const handleSelectedMinorClear = (minor) => {
    dispatch(removeSelectedMinor(minor));
    dispatch(removeStudentMinor(minor));
  }


  return (
    <div className={styles["minors-wrapper"]}>
      <label className={styles['select-label']} htmlFor="minor">Minors</label>
      <input
        type="text"
        id="minor"
        name="minor"
        className={styles['select-input']}
        value={minorQuery}
        onChange={handleMinorQueryChange}
        placeholder="Search minors"
      />
      {minorQuery && (
          <ul className={styles['dropdown']}>
              {filteredMinors.map(minor => (
                  <li 
                      key={minor.minorName}
                      onClick={() => handleMinorSelect(minor)}
                  >
                      {minor.minorName}
                  </li>
              ))}
          </ul>
      )}
      <div className={styles["selected-minors"]}>
          {selectedMinors.map((minor, index) => (
              <div className={styles["selected-minor"]} key={index}>
                  <p>{minor.minorName}</p>
                  <button
                      className={styles["remove-button"]}
                      onClick={() => handleSelectedMinorClear(minor)}
                  >
                      <img src="/assets/remove.svg" alt="Remove" />
                  </button>
              </div>
          ))}
      </div> 
    </div>
  );
};
