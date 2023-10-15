// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

function createInitialState(role) {
    let stateObject = {
      common: {
        firstName: '',
        lastName: '',
        fileName: 'Add Profile Photo (optional)',
        role: 'professor',
        displayName: '',
        email: '',
        cuid: '',
        editingDisplayName: false,
        isOtherSelected: false,
      }
    };
  
    if (role === 'student') {
      stateObject.student = {
        majors: '',
        minors: '',
        GPA: null,
        honors: false,
        year: '',
      };
    } else if (role === 'professor') {
      stateObject.professor = {
        academicTitle: '',
        colleges: '',
        departments: '',
      };
    }
  
    return stateObject;
  }

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        fileName: 'Add Profile Photo (optional)',
        role: 'neutral',
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
        setEditingDisplayName: (state, action) => {
            state.editingDisplayName = action.payload;
        },
        setIsOtherSelected: (state, action) => {
            state.isOtherSelected = action.payload;
        },
        setRoleAndInitialize: (state) => {
            if (state.role === 'student') {
                state.student = {
                    majors: '',
                    minors: '',
                    GPA: null,
                    honors: false,
                    year: '',
                };
            } else if (state.role === 'professor') {
                state.professor = {
                    academicTitle: '',
                    colleges: '',
                    departments: '',
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
        setProfessorColleges: (state, action) => {
            state.professor.colleges = action.payload;
        },
        setProfessorDepartments: (state, action) => {
            state.professor.departments = action.payload;
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
    setProfessorColleges,
    setProfessorDepartments,
} = userSlice.actions;

export default userSlice.reducer;
