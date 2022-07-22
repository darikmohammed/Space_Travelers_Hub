import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { updateRocketReservation } from '../../Redux/Rockets/rocket';

function Rocket({
  name, description, reserved, image, id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <img src={image} alt="name" />
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>
          {reserved ? <span className="reserved-span">Reserved</span> : ''}
          {description}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(updateRocketReservation(id));
          }}
          className={reserved ? 'cancle-btn' : 'btn'}
        >
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
