import { configureStore } from '@reduxjs/toolkit';
import { missionsReducer } from './Missions/missions';
import fetchRockets from './Rockets/rocket';
import missionSlice from './Missions/missions'

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: fetchRockets,
  },
});

export default store;
