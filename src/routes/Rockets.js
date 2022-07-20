import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Rocket from '../Components/Rocket/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketKeys = Object.keys(rockets);
  return (
    <div className="rokets">
      {rocketKeys.map((rocket) => (
        <Rocket
          key={rocket}
          id={rocket}
          name={rockets[rocket].name}
          description={rockets[rocket].description}
          reserved={rockets[rocket].reserved}
          image={rockets[rocket].image}
        />
      ))}
    </div>
  );
}

export default Rockets;
