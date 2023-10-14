// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
