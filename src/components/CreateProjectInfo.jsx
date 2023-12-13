// CreateProjectInfo.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/EditProjectInfo.module.css'; // Import the CSS file

const validSkills = ['Test1', 'Test2', 'Test3', 'Test4', 'Test 1']; // Replace with your valid inputs

export const CreateProjectInfo = ({ card }) => {
    // Constants 
    const MAX_TITLE_LENGTH = 75;
    const MAX_DESC_LENGTH = 500;

    const [mandatorySkills, setMandatorySkills] = useState([]);
    const [desiredSkills, setDesiredSkills] = useState([]);

    const [projectTitle, setProjectTitle] = useState('');
    const [projectColor, setProjectColor] = useState('black');
    const [projectTitleError, setProjectTitleError] = useState('Please enter a project title');

    const [projectDescription, setProjectDescription] = useState('');
    const [projectDescriptionColor, setProjectDescriptionColor] = useState('black');
    const [projectDescriptionError, setProjectDescriptionError] = useState('Please enter a project description');

    const [positionName, setPositionName] = useState('');
    const [positionNameError, setPositionNameError] = useState('');
 
    const [minGpa, setMinGpa] = useState('');
    const [gpaError, setGpaError] = useState('');

    // Functions
    const handleSkillsInputChange = (event, setSkills) => {
        const inputValue = event.target.value.trim();

        if (inputValue.endsWith(',')) {
            const skill = inputValue.slice(0, -1); // Remove the comma from the input
            setSkills((prevSkills) => [...prevSkills, skill]); // Add the skill to the list of skills
            event.target.value = ''; // Clear the input field
        }
    };


    const handleRemoveSkill = (index, setSkills) => {
        setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const handleTitleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= MAX_TITLE_LENGTH) {
            setProjectTitleError('');
            setProjectTitle(inputValue);
            setProjectColor('black');
        } 
        else {
            setProjectColor('red');
        }

        if (inputValue.length === 0){
            setProjectTitleError('Please enter a project title');
        }
    };

    const handleDescriptionChange = (event) => {
        const inputValue = event.target.value;

        console.log(inputValue.length);
        if (inputValue.length <= MAX_DESC_LENGTH) {
            setProjectDescriptionError('');
            setProjectDescription(inputValue);
            setProjectDescriptionColor('black');
        } else {
            setProjectDescriptionColor('red');
        }

        if(inputValue.length === 0){
            setProjectDescriptionError('Please enter a project description');
        } 
    };

    const handleGpaChange = (event) => {
        const inputValue = event.target.value;
        setMinGpa(inputValue);

        // Regular expression to validate GPA format
        const gpaRegex = /^\d+(\.\d{1,2})?$/;

        if (!gpaRegex.test(inputValue)) {
            setGpaError('Please enter a valid GPA format (e.g., 3.00)');
        }else if (inputValue < 0 || inputValue > 4) {
            setGpaError('Please enter a valid GPA between 0.00 and 4.00');
        }
        else {
            setGpaError('');
        }

        event.target.value = '10'; 
    };

    const handlePositionChange = (event) => {
        const inputValue = event.target.value;
        setPositionName(inputValue);

        if (inputValue.length === 0) {
            setPositionNameError('Please enter a position name');
        } else {
            setPositionNameError('');
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if there's a GPA error before submitting the form

        // Add in checks to make sure the user has entered valid inputs
        if (gpaError) {
            alert('Please fix the GPA format error before submitting the form.');
            return;
        }

        if (positionNameError) {
            alert('Please fix the position name error before submitting the form.');
            return;
        }

        if (projectTitleError) {
            alert(projectTitleError);
            return;
        }

        if (projectDescriptionError) {
            alert(projectDescriptionError);
            return;
        }
        // Handle the form submission logic here
        // ...

        // @desc print out all the states of the of the form

        console.log(`Project Title: ${projectTitle}\nProject Description: ${projectDescription}\nPosition Name: ${positionName}\nMinimum GPA: ${minGpa}\nMandatory Skills: ${mandatorySkills}\nDesired Skills: ${desiredSkills}`);

        // console.log(${projectTitle}, ${projectDescription}, ${positionName}, ${minGpa}, ${mandatorySkills}, ${desiredSkills});
    };

    return (
        <div className={`${styles.createProjectContainer} create-project-container`}>
            <h2>Create Project</h2>

            <form>

                {/* Project Title */}
                <label htmlFor="projectTitle" className={`${styles.projectLabel}`}>Project Title:</label>
                <input
                    type="text"
                    className={`${styles.textareawithremaining}`}
                    id="projectTitle"
                    name="projectTitle"
                    // style={{ color: projectColor }}
                    value={projectTitle}
                    onChange={handleTitleChange}
                    // maxLength={MAX_TITLE_LENGTH}
                    required
                />
                <p className={`${styles.remainingCharacters}`} style={{ color: projectColor }}>
                    Remaining characters: {MAX_TITLE_LENGTH - projectTitle.length}
                </p>


                {/* Project Description */}
                <label htmlFor="projectDescription" className={`${styles.projectLabel}`}>Project Description:</label>
                <textarea
                    id="projectDescription"
                    className={`${styles.textareawithremaining} ${styles.scrollableTextarea}`}
                    name="projectDescription"
                    value={projectDescription}
                    onChange={handleDescriptionChange}
                    rows="4"
                    required
                />
                <p className={`${styles.remainingCharacters}`} style={{ color: projectDescriptionColor }}>
                    Remaining characters: {MAX_DESC_LENGTH - projectDescription.length}
                </p>

                {/* Position Name */}
                <label htmlFor="positionName" className={`${styles.projectLabel}`}>Position Name:</label>
                <input
                    type="text"
                    id="positionName"
                    name="positionName"
                    className={`${styles.textareawithremaining}`}
                    onChange={handlePositionChange}
                    required />
                {positionNameError && <p style={{ color: 'red' }}>{positionNameError}</p>}


                {/* Mandatory Skills */}
                <label htmlFor="mandatorySkills" className={`${styles.projectLabel}`}>Mandatory Skills (comma-separated):</label>
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
                    className={`${styles.textareawithremaining}`}
                    onChange={(e) => handleSkillsInputChange(e, setMandatorySkills)}
                />

                {/* Desired Skills */}
                <label htmlFor="desiredSkills" className={`${styles.projectLabel}`}>Desired Skills (comma-separated):</label>
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
                    className={`${styles.textareawithremaining}`}
                    onChange={(e) => handleSkillsInputChange(e, setDesiredSkills)}
                />

                {/* Preferred Field */}
                <label htmlFor="field" className={`${styles.projectLabel}`}>Preferred Field:</label>
                <input type="text" id="field" name="field" required className={`${styles.textareawithremaining}`} />

                {/* Minimum GPA */}
                <label htmlFor="gpa" className={`${styles.projectLabel}`}>Minimum GPA:</label>
                <input
                    type="text"
                    id="gpa"
                    className={`${styles.textareawithremaining}`}
                    name="gpa"
                    value={minGpa}
                    onChange={handleGpaChange}
                    required
                />
                {gpaError && <p style={{ color: 'red' }}>{gpaError}</p>}

                {/* Submit Button */}
                <button onClick={handleSubmit} className={`${styles.submitbutton}`}>Create Project</button>
            </form>
        </div>
    );
};
