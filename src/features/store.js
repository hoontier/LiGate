// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import userReducer from './userSlice';
import selectReducer from './selectSlice';
import operatorReducer from './operatorSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    select: selectReducer,
    operator: operatorReducer,
  },
});

export default store;
