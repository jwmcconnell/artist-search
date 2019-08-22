import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingItem = ({ recording }) => {
  return (
    <Link to={`/song/${recording.title}/${recording.id}`}>
      <li>
        <h3>{recording.title}</h3>
      </li>
    </Link>
  );
};

RecordingItem.propTypes = {
  recording: PropTypes.object.isRequired
};

export default RecordingItem;
