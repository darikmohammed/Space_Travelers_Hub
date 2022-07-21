import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketsKey = Object.keys(rockets);
  const reservedRocket = [];
  rocketsKey.forEach((rocketId) => {
    if (rockets[rocketId].reserved) {
      reservedRocket.push({
        id: rocketId,
        name: rockets[rocketId].name,
      });
    }
  });
  return (
    <div className="profile-display">
      <div className="my-mission">
        <h2>My Missions</h2>
      </div>
      <div className="my-rocket">
        <h2>My Rockets</h2>
        <div className="view-rockets">
          {reservedRocket.length ? (
            reservedRocket.map((rocket) => (
              <p className="reserved-p" key={rocket.id}>
                {rocket.name}
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
