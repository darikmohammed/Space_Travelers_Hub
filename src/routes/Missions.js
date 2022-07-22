import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../Components/Missions/Mission';
import './Missions.css';
import getMissionsData from '../Redux/Missions/missionsAPI';

const Missions = () => {
  const fetched = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetched !== 'uploaded') {
      dispatch(getMissionsData());
    }
  }, []);

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
