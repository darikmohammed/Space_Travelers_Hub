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
    getMissions: (state, action) => ({
      missions: [...state.missions, ...action.payload],
    }),
  },
  extraReducers: {
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
