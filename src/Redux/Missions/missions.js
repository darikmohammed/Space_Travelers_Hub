import { createSlice } from '@reduxjs/toolkit';
import getMissionsData from './missionsAPI';

const initialState = {
  missions: [],
  status: 'loading',
};

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    memberMission: (state, action) => {
      const missionUpdate = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, member: true };
      });
      return {
        ...state,
        missions: [...missionUpdate],
      };
    },
    memberLeaveMission: (state, action) => {
      const missionUpdate = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, member: false };
      });
      return {
        ...state,
        missions: [...missionUpdate],
      };
    },
  },
  extraReducers: {
    [getMissionsData.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getMissionsData.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      status: 'uploaded',
    }),
    [getMissionsData.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { memberMission, memberLeaveMission } = missionSlice.actions;

export default missionSlice.reducer;
