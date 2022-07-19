import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './Missions/missions';

const store = configureStore({
  reducer: {
    missions: missionSlice,
  },
});

export default store;
