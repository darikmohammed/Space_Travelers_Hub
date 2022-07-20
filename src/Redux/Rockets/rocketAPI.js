import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const factorResponse = (datas) => {
  const arr = [];
  datas.forEach((data) => {
    arr.push({
      id: data.id,
      name: data.rocket_name,
      type: data.rocket_type,
      flickr_image: data.flickr_images[0],
    });
  });
  return arr;
};

const getRocketDatas = createAsyncThunk(
  'rockets/getRocketDatas',
  axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
    const data = factorResponse(response.data);
    console.log(data);
    return data;
  }),
);

export default getRocketDatas;
