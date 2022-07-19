import { createSlice } from '@reduxjs/toolkit';
import getRocketDatas from './rocketAPI';

const initialState = {
  rockets: [],
  status: 'waiting',
};

const fetchRockets = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    getRockets: (state, action) => ({
      ...state,
      rockets: [...state.rockets, ...action.payload],
    }),
  },
  extraReducers: {
    [getRocketDatas.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      status: 'uploaded',
    }),
    [getRocketDatas.rejected]: (state, action) => ({
      ...state,
      rockets: action.payload,
      status: 'rejected',
    }),
  },
});

export const { getRockets } = fetchRockets.actions;

export default fetchRockets.reducer;
