import React, { useEffect, useState } from 'react';
import minorsData from '../../../minors.json';
import styles from '../../styles/inputStyles/Select.module.css';

export const MinorsSearch = () => { // Changed the component name to MinorsSearch
  const [minors, setMinors] = useState([]); // Changed variable names from "majors" to "minors"
  const [minorQuery, setMinorQuery] = useState(''); // Changed variable names from "major" to "minor"
  const [filteredMinors, setFilteredMinors] = useState([]); // Changed variable names from "filteredMajors" to "filteredMinors"
  const [selectedMinor, setSelectedMinor] = useState(null); // Changed variable names from "selectedMajor" to "selectedMinor"

  useEffect(() => {
    const minorOptions = minorsData.map(minor => ({ // Changed variable names from "major" to "minor"
      value: minor.name,
      label: minor.name,
    }));
    setMinors(minorOptions);
  }, []);

  useEffect(() => {
    if (minorQuery !== '') {
      setFilteredMinors(
        minors.filter(minor =>
          minor.label.toLowerCase().includes(minorQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMinors([]);
    }
  }, [minorQuery, minors]);

  return (
    <div className={styles["majors-wrapper"]}>
      <label className={styles['select-label']} htmlFor="minor">Minors</label> {/* Changed "Majors" to "Minors" */}
      <input
        type="text"
        id="minor" // Changed "major" to "minor"
        name="minor" // Changed "major" to "minor"
        className={styles['select-input']}
        value={minorQuery}
        onChange={(e) => setMinorQuery(e.target.value)}
        placeholder="Search minors" // Changed "majors" to "minors"
      />
      {minorQuery && (
        <ul className={styles['dropdown']}>
          {filteredMinors.map(minor => (
            <li
              key={minor.value}
              onClick={() => {
                setSelectedMinor(minor); // Changed "selectedMajor" to "selectedMinor"
                setMinorQuery('');
              }}
            >
              {minor.label}
            </li>
          ))}
        </ul>
      )}
      <div className={styles["selected-majors"]}>
        {selectedMinor && (
          <div className={styles["selected-major"]}>
            <p>{selectedMinor.label}</p> {/* Changed "selectedMajor" to "selectedMinor" */}
            <button
              className={styles["remove-button"]}
              onClick={() => setSelectedMinor(null)} // Changed "selectedMajor" to "selectedMinor"
            >
              <img src="/assets/remove.svg" alt="Remove" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
