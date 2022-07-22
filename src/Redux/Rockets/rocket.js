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
    updateRocketReservation: (state, action) => ({
      ...state,
      rockets: {
        ...state.rockets,
        [action.payload]: {
          ...state.rockets[action.payload],
          reserved: !state.rockets[action.payload].reserved,
        },
      },
    }),
  },
  extraReducers: {
    [getRocketDatas.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getRocketDatas.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      status: 'uploaded',
    }),
    [getRocketDatas.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
  },
});

export const { updateRocketReservation } = fetchRockets.actions;

export default fetchRockets.reducer;
