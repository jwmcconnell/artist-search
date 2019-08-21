import React from 'react';
import PropTypes from 'prop-types';

import ArtistItem from './ArtistItem';

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

const ArtistList = ({ artistsData }) => {
  const artists = artistsData.map(artist => (
    <ArtistItem key={artist.id} artist={artist} />
  ));
  return (
    <ul style={styles.list}>
      {artists}
    </ul>
  );
};

ArtistList.propTypes = {
  artistsData: PropTypes.array.isRequired
};

export default React.memo(ArtistList);
