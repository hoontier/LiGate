// selectSlice.js
import { createSlice } from '@reduxjs/toolkit';
import collegesAndDepartments from '../../combinedData.json';

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
            console.log("Payload: ", action.payload);
            state.selectedColleges.push(action.payload);
            // If a college is selected, filter its departments
            const selected = collegesAndDepartments.colleges.find(
                college => college.name === action.payload.name
            );            

            console.log("Selected: ", selected); 

            state.departments = selected 
                ? selected.departments.map(department => ({
                    value: department.name,
                    label: department.name
                }))
                : []; 
            console.log("Departments: ", state.departments); 
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
            
            console.log('Action payload:', action.payload);
            console.log('Current department query:', state.departmentQuery);
            
            if(state.selectedColleges.length > 0 && state.departmentQuery) {
                console.log('Entering filtering logic.');
                
                state.filteredDepartments = [];
                state.selectedColleges.forEach(selectedCollege => {
                    console.log('Iterating through selectedCollege:', selectedCollege);
        
                    const selected = collegesAndDepartments.colleges.find(
                        college => college.name === selectedCollege.name // Modified line
                    );
                    
                    console.log('Found selected college:', selected);
        
                    if(selected) {
                        const filtered = selected.departments.filter(department => {
                            console.log('Department:', department); // Log each department object
                            
                            // Safely check if label matches the query
                            return department?.name?.toLowerCase().includes(state.departmentQuery.toLowerCase()) ?? false;
                        });
                        
                        console.log('Filtered departments:', filtered);
                        state.filteredDepartments.push(...filtered);
                    }                    
                });
                
                // Ensuring unique values – note: using Set with objects might not work as intended due to reference differences.
                state.filteredDepartments = Array.from(new Set(state.filteredDepartments.map(JSON.stringify))).map(JSON.parse);
                console.log('Final filteredDepartments:', state.filteredDepartments);
            } else {
                console.log('No colleges selected or department query not set.');
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
