import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_MISSIONS = 'https://api.spacexdata.com/v3/missions';

const getMissionsData = createAsyncThunk('Missions/getMissionsData',
  async () => {
    const response = await axios.get(URL_MISSIONS);
    const dataMissions = response.data.map((mission) => (
      {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }
    ));
    return dataMissions;
  });

export default getMissionsData;
