// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        fileName: 'Add Profile Photo (optional)',
        role: 'professor',
        displayName: '',
        email: '',
        cuid: '',
        editingDisplayName: false,
        isOtherSelected: false,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setFileName: (state, action) => {
            state.fileName = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        editDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        setDisplayName: (state) => {
            if (state.role == 'student') {
                state.displayName = state.firstName + ' ' + state.lastName;
            } else if (state.role == 'professor') {
                state.displayName = 'Prof. ' + state.firstName + ' ' + state.lastName;
            }
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setCuid: (state, action) => {
            state.cuid = action.payload;
        },
        setEditingDisplayName: (state, action) => {
            state.editingDisplayName = action.payload;
        },
        setIsOtherSelected: (state, action) => {
            state.isOtherSelected = action.payload;
        },
        setRoleAndInitialize: (state, action) => {
            state.role = action.payload;
            if (state.role === 'student') {
                delete state.professor; // Removing professor data when role is student
                state.student = {
                    majors: '',
                    minors: '',
                    GPA: null,
                    honors: false,
                    year: '',
                };
            } else if (state.role === 'professor') {
                delete state.student; // Removing student data when role is professor
                state.professor = {
                    academicTitle: '',
                    colleges: [],
                    departments: [],
                };
            }
        },        
        setStudentMajors: (state, action) => {
            state.student.majors = action.payload;
        },
        setStudentMinors: (state, action) => {
            state.student.minors = action.payload;
        },
        setStudentGPA: (state, action) => {
            state.student.GPA = action.payload;
        },
        setStudentHonors: (state, action) => {
            state.student.honors = action.payload;
        },
        setStudentYear: (state, action) => {
            state.student.year = action.payload;
        },
        setProfessorAcademicTitle: (state, action) => {
            state.professor.academicTitle = action.payload;
        },
        setProfessorCollege: (state, action) => {
            state.professor.colleges = (action.payload);
        },
        setProfessorDepartment: (state, action) => {
            state.professor.departments = (action.payload);
        },
    },
});

export const { 
    setFirstName, 
    setLastName, 
    setFileName, 
    setRole, 
    setDisplayName, 
    editDisplayName, 
    setEditingDisplayName, 
    setIsOtherSelected,
    setRoleAndInitialize,
    setStudentMajors,
    setStudentMinors,
    setStudentGPA,
    setStudentHonors,
    setStudentYear,
    setProfessorAcademicTitle,
    setProfessorCollege,
    setProfessorDepartment,
    setEmail,
    setCuid,
} = userSlice.actions;

export default userSlice.reducer;
