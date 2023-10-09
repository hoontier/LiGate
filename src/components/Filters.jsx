// Filters.jsx
import React from 'react';
import styles from '../styles/Filters.module.css';

export const Filters = () => {
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
                <select className={styles['filter-select']} id="college" name="college">
                    {/* Add options here */}
                </select>
            </div>
            <div className={styles['filter-group']}>
                <label className={styles['filter-label']} htmlFor="department">Department</label>
                <select className={styles['filter-select']} id="department" name="department">
                    {/* Add options here */}
                </select>
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