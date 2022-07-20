import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    getMissions: (state, action) => ({
      missions: [...state.missions, ...action.payload],
    }),
  },
});

export const { getMissions } = missionSlice.actions;

export default missionSlice.reducer;
