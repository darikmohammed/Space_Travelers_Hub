import { createSlice } from '@reduxjs/toolkit/dist/createSlice';

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
