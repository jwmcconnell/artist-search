import React from 'react';
import PropTypes from 'prop-types';

const RecordingItem = ({ recording }) => {
  return (
    <li>
      <h3>{recording.title}</h3>
    </li>
  );
};

RecordingItem.propTypes = {
  recording: PropTypes.object.isRequired
};

export default RecordingItem;
