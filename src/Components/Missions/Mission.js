import React from 'react';
import PropTypes from 'prop-types';
import './Mission.css';

const Missions = ({ name, description }) => (

  <li className="mission__table-row">
    <div className="col col-1 table-name">{name}</div>
    <div className="col col-2 table-description">{description}</div>
    <div className="col col-3">
      {' '}
      <span className="badge badge-inactive">NOT A MEMBER</span>
    </div>
    <div className="col col-4"><button className="button button-primary" type="button">Join Mission</button></div>
  </li>
);

export default Missions;

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
