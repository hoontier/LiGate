import React from 'react';
import styles from "../../styles/RegisterAll.module.css";

export const DisplayName = ({
  firstName, 
  lastName, 
  displayName, 
  setDisplayName, 
  editingDisplayName, 
  setEditingDisplayName, 
  isOtherSelected, 
  setIsOtherSelected
}) => {
  return (
    <div className={styles["display-names"]}>
      {editingDisplayName ? (
        <div className={styles["display-name-inputs"]}> {/* Added wrapper div */}
            <div>
                <input 
                    type="radio" 
                    id="prof-name" 
                    name="displayName" 
                    value={`Prof. ${firstName} ${lastName}`} 
                    onChange={e => setDisplayName(e.target.value)}
                />
                <label htmlFor="prof-name">Prof. {firstName} {lastName}</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id="dr-name-full" 
                    name="displayName" 
                    value={`Dr. ${firstName} ${lastName}`} 
                    onChange={e => setDisplayName(e.target.value)}
                />
                <label htmlFor="dr-name-full">Dr. {firstName} {lastName}</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id="dr-name-last" 
                    name="displayName" 
                    value={`Dr. ${lastName}`} 
                    onChange={e => setDisplayName(e.target.value)}
                />
                <label htmlFor="dr-name-last">Dr. {lastName}</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    id="other" 
                    name="displayName" 
                    value="other" 
                    onChange={() => setIsOtherSelected(true)}
                />
                <label htmlFor="other">Other</label>
            </div>

            {/* If "Other" is selected, show an input box */}
            {isOtherSelected && (
                <input 
                    type="text" 
                    placeholder="Enter Display Name" 
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                />
            )}

            <button 
                className={styles["edit-button"]} 
                onClick={() => {
                    setEditingDisplayName(false);
                    setIsOtherSelected(false);
                }}
            >
                Save
            </button>
        </div>
      ) : (
        <div className={styles["display-name"]}>
          <p>Display Name: {displayName}</p>
          <button 
            className={styles["edit-button"]} 
            onClick={() => setEditingDisplayName(true)}
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
};
