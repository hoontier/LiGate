// operatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const operatorSlice = createSlice({
    name: 'operator',
    initialState: {
        isCenterPopupOpen: false,
        centerPopupContent: "", /* can be "edit-professor-profile", "edit-student-profile", or "edit-project-info" */
    },
    reducers: {
        setIsCenterPopupOpen: (state, action) => {
            state.isCenterPopupOpen = action.payload;
        },
        setCenterPopupContent: (state, action) => {
            state.centerPopupContent = action.payload;
        },
    },
});

export const { setIsCenterPopupOpen, setCenterPopupContent } = operatorSlice.actions;

export default operatorSlice.reducer;