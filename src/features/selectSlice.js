// selectSlice.js
import { createSlice } from '@reduxjs/toolkit';
import collegesAndDepartments from '../../collegesAndDepartments.json';

const initialState = {
    colleges: collegesAndDepartments.colleges.map(college => ({
        value: college.name,
        label: college.name
    })),
    selectedColleges: [],
    departments: [],
    selectedDepartments: [],
    collegeQuery: '',
    filteredColleges: [],
    departmentQuery: '',
    filteredDepartments: [],
};

export const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectedCollege: (state, action) => {
            state.selectedColleges.push(action.payload);
            // If a college is selected, filter its departments
            const selected = collegesAndDepartments.colleges.find(
                college => college.name === action.payload.value
            );

            state.departments = selected 
                ? selected.departments.map(department => ({
                    value: department,
                    label: department
                }))
                : []; 
        },
        removeSelectedCollege: (state, action) => {
            console.log(action.payload);
            state.selectedColleges = (action.payload)
        },                   
        setSelectedDepartment: (state, action) => {
            state.selectedDepartments.push(action.payload);
        },        
        removeSelectedDepartment: (state, action) => {
            state.selectedDepartments = state.selectedDepartments.filter(
                department => department !== action.payload.value
            );
        },        
        setCollegeQuery: (state, action) => {
            state.collegeQuery = action.payload;
            
            // Filtering colleges based on the user's input
            state.filteredColleges = state.collegeQuery 
                ? collegesAndDepartments.colleges.filter(college => 
                    college.name.toLowerCase().includes(state.collegeQuery.toLowerCase())
                )
                : [];
        },
        setDepartmentQuery: (state, action) => {
            state.departmentQuery = action.payload;
        
            // Filtering departments based on the user's input
            if(state.selectedColleges.length > 0 && state.departmentQuery) {
                state.filteredDepartments = [];
        
                state.selectedColleges.forEach(selectedCollege => {
                    const selected = collegesAndDepartments.colleges.find(
                        college => college.name === selectedCollege.value
                    );
                    
                    if(selected) {
                        const filtered = selected.departments.filter(department =>
                            department.toLowerCase().includes(state.departmentQuery.toLowerCase())
                        );
                        
                        state.filteredDepartments.push(...filtered);
                    }
                });
                
                // Removing duplicates from filteredDepartments, if any
                state.filteredDepartments = [...new Set(state.filteredDepartments)];
            } else {
                state.filteredDepartments = [];
            }
        },                 
        setFilteredColleges: (state, action) => {
            state.filteredColleges = action.payload;
        },
        setFilteredDepartments: (state, action) => {
            state.filteredDepartments = action.payload;
        },
    },
});

export const { 
    setSelectedCollege, 
    setSelectedDepartment, 
    setCollegeQuery, 
    setDepartmentQuery,
    setFilteredColleges,
    setFilteredDepartments,
    removeSelectedCollege,
    removeSelectedDepartment,
} = selectSlice.actions;

export default selectSlice.reducer;
