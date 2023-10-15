import React, { useEffect, useState } from 'react';
import majorsData from '../../../majors.json';
import styles from '../../styles/inputStyles/Select.module.css';

export const MajorsSearch = () => {
  const [majors, setMajors] = useState([]);
  const [majorQuery, setMajorQuery] = useState('');
  const [filteredMajors, setFilteredMajors] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState(null);

  useEffect(() => {
    const majorOptions = majorsData.map(major => ({
      value: major.name,
      label: major.name,
    }));
    setMajors(majorOptions);
  }, []);

  useEffect(() => {
    if(majorQuery !== '') {
      setFilteredMajors(
        majors.filter(major => 
            major.label.toLowerCase().includes(majorQuery.toLowerCase())
         )
      );
    } else {
      setFilteredMajors([]);
    }
  }, [majorQuery, majors]);

  return (
    <div className={styles["majors-wrapper"]}>
      <label className={styles['select-label']} htmlFor="major">Majors</label>
      <input
        type="text"
        id="major"
        name="major"
        className={styles['select-input']}
        value={majorQuery}
        onChange={(e) => setMajorQuery(e.target.value)}
        placeholder="Search majors"
      />
      {majorQuery && (
          <ul className={styles['dropdown']}>
              {filteredMajors.map(major => (
                  <li 
                      key={major.value}
                      onClick={() => {
                          setSelectedMajor(major);
                          setMajorQuery('');
                      }}
                  >
                      {major.label}
                  </li>
              ))}
          </ul>
      )}
      <div className={styles["selected-majors"]}>
          {selectedMajor && (
              <div className={styles["selected-major"]}>
                  <p>{selectedMajor.label}</p>
                  <button
                      className={styles["remove-button"]}
                      onClick={() => setSelectedMajor(null)}
                  >
                      <img src="/assets/remove.svg" alt="Remove" />
                  </button>
              </div>
          )}
      </div> 
    </div>
  );
};
