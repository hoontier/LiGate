// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
  },
});

export default store;
