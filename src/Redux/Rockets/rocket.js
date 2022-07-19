import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'waiting',
};

const fetchRockets = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    getRockets: (state, action) => ({
      rockets: [...state.rockets, ...action.payload],
    }),
  },
});

export const { getRockets } = fetchRockets.actions;

export default fetchRockets.reducer;
