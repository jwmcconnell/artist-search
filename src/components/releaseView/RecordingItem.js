import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingItem = ({ recording, artist }) => {
  return (
    <Link to={`/song/${artist}/${recording.title}/${recording.id}`}>
      <li>
        <h3>{recording.title}</h3>
      </li>
    </Link>
  );
};

RecordingItem.propTypes = {
  recording: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};

export default RecordingItem;
