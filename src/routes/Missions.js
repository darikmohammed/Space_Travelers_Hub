import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../Components/Missions/Mission';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  console.log(missions)

  return (
    <div className="mission__container">
      <ul className="mission__table">
        <li className="mission__table-header">
          <div className="col col-1">Mission</div>
          <div className="col col-2">Description</div>
          <div className="col col-3">Status</div>
          <div className="col col-4"> </div>
        </li>

        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            member={mission.member}
          />
        ))}

      </ul>
    </div>
  );
};

export default Missions;
