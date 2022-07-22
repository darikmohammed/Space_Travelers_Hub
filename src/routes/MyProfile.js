import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketsKey = Object.entries(rockets);
  const reservedRocket = rocketsKey.filter((rockets) => rockets[1].reserved);
  const missions = useSelector((state) => state.missions.missions);
  const missionJoined = missions.filter((mission) => {
    if (mission.member !== true) {
      return null;
    }
    return { mission };
  });

  return (
    <div className="profile-display">
      <div className="my-mission">
        <h2>My Missions</h2>
        <ul className="view-missions">
          {missionJoined.length ? (
            missionJoined.map((missions) => (
              <li className="reserved-p" key={missions.mission_id}>
                {missions.mission_name}
              </li>
            ))
          ) : (
            <li>No Missions Joinned</li>
          )}
        </ul>
      </div>
      <div className="my-rocket">
        <h2>My Rockets</h2>
        <div className="view-rockets">
          {reservedRocket.length ? (
            reservedRocket.map((rocket) => (
              <p className="reserved-p" key={rocket[0]}>
                {rocket[1].name}
              </p>
            ))
          ) : (
            <p className="no-reserved">No Rockets Reserved</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
