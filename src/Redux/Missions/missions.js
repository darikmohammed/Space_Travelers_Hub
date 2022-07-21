import { createSlice } from '@reduxjs/toolkit';
import getMissionsData from './missionsAPI';

const initialState = {
  missions: [],
  status: 'loading',
};

const missionSlice = createSlice({
  name: 'Missions',
  initialState,

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

export const { getMissions } = missionSlice.actions;

export default missionSlice.reducer;
