import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const factorResponse = (datas) => {
  const arr = [];
  datas.forEach((data) => {
    arr.push({
      id: data.id,
      name: data.rocket_name,
      description: data.description,
      image: data.flickr_images[0],
      reserved: false,
    });
  });
  return arr;
};

const getRocketDatas = createAsyncThunk('rockets/getRocketDatas', async () => {
  const result = await axios
    .get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const data = factorResponse(response.data);
      return data;
    });
  return result;
});

export default getRocketDatas;
