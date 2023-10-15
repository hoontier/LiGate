//TextInput.jsx
import React from 'react';
import styles from "../../styles/inputStyles/TextInput.module.css";

export const TextInput = ({ placeholder, onChange, value, name }) => {
  return (
    <input 
      className={styles["text-input"]} 
      type="text" 
      name={name}
      placeholder={placeholder} 
      onChange={onChange} 
      value={value}
    />
  );
};
