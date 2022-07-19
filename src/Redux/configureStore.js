import { configureStore } from '@reduxjs/toolkit';
import { missionsReducer } from './Missions/missions';
import fetchRockets from './Rockets/rocket';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: fetchRockets,
  },
});

export default store;
