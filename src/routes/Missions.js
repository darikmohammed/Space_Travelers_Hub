import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../Components/Missions/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default Missions;
