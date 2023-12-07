// CreateProjectInfo.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/EditProjectInfo.module.css'; // Import the CSS file

const validSkills = ['Test1', 'Test2', 'Test3', 'Test4', 'Test 1']; // Replace with your valid inputs

export const CreateProjectInfo = ({ card }) => {
    // Constants 
    const [mandatorySkills, setMandatorySkills] = useState([]);
    const [desiredSkills, setDesiredSkills] = useState([]);

    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const maxTitleLength = 50; // Set your desired maximum character limit for the title
    const maxDescriptionLength = 500; // Set your desired maximum character limit for the description

    // Functions
    const handleSkillsInputChange = (event, setSkills) => {
        const inputValue = event.target.value.trim();

        // setSkills((prevSkills) => [...prevSkills, inputValue]);
        // event.target.value = ''; // Clear the input field

        if (inputValue.endsWith(',')) {
            const skill = inputValue.slice(0, -1); // Remove the comma from the input
            setSkills((prevSkills) => [...prevSkills, skill]); // Add the skill to the list of skills
            event.target.value = ''; // Clear the input field
        }
    };

    const handleRemoveSkill = (index, setSkills) => {
        setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const renderTags = (skills, setSkills) => (
        skills.map((skill, index) => (
            <div key={index} className={styles.tag}>
                {skill}
                <span onClick={() => handleRemoveSkill(index, setSkills)}>x</span>
            </div>
        ))
    );

    const handleTitleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxTitleLength) {
            setProjectTitle(inputValue);
        }
    };

    const handleDescriptionChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxDescriptionLength) {
            setProjectDescription(inputValue);
        }
    };


    return (
        <div className="create-project-container">
            <h2>Create Project</h2>

            <form>

                <label htmlFor="projectTitle">Project Title:</label>
                <input
                    type="text"
                    className={`${styles.textareawithremaining}`}
                    id="projectTitle"
                    name="projectTitle"
                    value={projectTitle}
                    onChange={handleTitleChange}
                    maxLength={maxTitleLength}
                    required
                />
                <p className={`${styles.remainingCharacters}`}>
                    Remaining characters: {maxTitleLength - projectTitle.length}
                </p>


                <label htmlFor="projectDescription">Project Description:</label>
                <textarea
                    id="projectDescription"
                    className={`${styles.textareawithremaining}`}
                    name="projectDescription"
                    value={projectDescription}
                    onChange={handleDescriptionChange}
                    rows="4"
                    maxLength={maxDescriptionLength}
                    required
                />
                <p className={`${styles.remainingCharacters}`}>
                    Remaining characters: {maxDescriptionLength - projectDescription.length}
                </p>


                <label htmlFor="mandatorySkills">Mandatory Skills (comma-separated):</label>
                <div className={styles.tagContainer}>
                    {mandatorySkills.map((skill, index) => (
                        <div key={index} className={styles.tag}>
                            {skill}
                            <span onClick={() => handleRemoveSkill(index, setMandatorySkills)}>x</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    id="mandatorySkills"
                    name="mandatorySkills"
                    onChange={(e) => handleSkillsInputChange(e, setMandatorySkills)}
                />

                <label htmlFor="desiredSkills">Desired Skills (comma-separated):</label>
                <div className={styles.tagContainer}>
                    {desiredSkills.map((skill, index) => (
                        <div key={index} className={styles.tag}>
                            {skill}
                            <span onClick={() => handleRemoveSkill(index, setDesiredSkills)}>x</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    id="desiredSkills"
                    name="desiredSkills"
                    onChange={(e) => handleSkillsInputChange(e, setDesiredSkills)}
                />

                <label htmlFor="field">Field:</label>
                <input type="text" id="field" name="field" required />

                <label htmlFor="gpa">GPA:</label>
                <input type="text" id="gpa" name="gpa" required />

                <label htmlFor="positionName">Position Name:</label>
                <input type="text" id="positionName" name="positionName" required />

                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};
