import React from 'react';
import PropTypes from 'prop-types';

import RecordingItem from './RecordingItem';

const styles = {
  list: {
    listStyle: 'none'
  }
};

const RecordingList = ({ recordingsData, artist }) => {
  const recordings = recordingsData.map(recording => (
    <RecordingItem key={recording.id} recording={recording} artist={artist} />
  ));
  return (
    <ul style={styles.list}>{recordings}</ul>
  );
};

RecordingList.propTypes = {
  recordingsData: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default RecordingList;
