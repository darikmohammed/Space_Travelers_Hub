import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

function Rocket({
  name, description, reserved, image, id,
}) {
  console.log(id);
  const hundleReserve = (id) => {
    console.log(id);
  };
  return (
    <div className="rocket">
      <img src={image} alt="name" />
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>
          {reserved ? <span className="reserved-span">Reserved</span> : ''}
          {description}
        </p>
        <button type="button" onClick={hundleReserve(id)}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
