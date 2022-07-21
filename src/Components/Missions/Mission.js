import React from 'react';
import PropTypes from 'prop-types';
import './Mission.css';
import { useDispatch } from 'react-redux';
import { memberMission } from '../../Redux/Missions/missions';

const Missions = ({
  id, name, description, member,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="mission__table-row">
      <div className="col col-1 table-name">{name}</div>
      <div className="col col-2 table-description">{description}</div>
      <div className="col col-3">
        {
          member ? <span className="badge badge-active">Active Member</span>
            : <span className="badge badge-inactive">NOT A MEMBER</span>
        }
      </div>
      <div className="col col-4">

        <button
          onClick={() => dispatch(memberMission(id))}
          className="button button-primary"
          type="button"
        >
          Join Mission
        </button>

      </div>
    </li>
  );
};

export default Missions;

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
};
