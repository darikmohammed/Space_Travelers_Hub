import React from 'react';
import PropTypes from 'prop-types';

const Missions = ({ name, description }) => (
  <div>
    <p>{name}</p>
    <p>{description}</p>
  </div>
);

export default Missions;

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
