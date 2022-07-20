import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../Components/Missions/Mission';
import getMissionsData from '../Redux/Missions/missionsAPI';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  console.log('missions', missions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(getMissionsData()));
  }, []);

  const missionsKeys = Object.keys(missions);
  console.log('missionkey', missionsKeys);
  return (
    <div>
      <h2>
        Missions
      </h2>
      <Mission />
    </div>
  );
};

export default Missions;
