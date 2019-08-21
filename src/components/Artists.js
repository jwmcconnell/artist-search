import React from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

const Artists = ({ artistsData }) => {
  const artists = artistsData.map(artist => (
    <Artist key={artist.id} artist={artist} />
  ));
  return (
    <ul style={styles.list}>
      {artists}
    </ul>
  );
};

Artists.propTypes = {
  artistsData: PropTypes.array.isRequired
};

export default React.memo(Artists);
