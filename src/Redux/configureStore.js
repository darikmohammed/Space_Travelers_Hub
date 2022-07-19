import { configureStore } from '@reduxjs/toolkit';
import fetchRockets from './Rockets/rocket';
import missionSlice from './Missions/missions';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: fetchRockets,
  },
});

export default store;
