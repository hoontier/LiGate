// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        fileName: 'Add Profile Photo (optional)',
        role: 'neutral',
        displayName: '',
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
        }
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
    setIsOtherSelected 
} = userSlice.actions;

export default userSlice.reducer;
