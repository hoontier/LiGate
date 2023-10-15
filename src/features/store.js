// store.js
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';
import userReducer from './userSlice';
import selectReducer from './selectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: userReducer,
    select: selectReducer,
  },
});

export default store;
