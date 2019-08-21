import React from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';

const Artists = ({ artistsData }) => {
  console.log(artistsData);
  const artists = artistsData.map(artist => (
    <Artist key={artist.id} artist={artist} />
  ));
  return (
    <ul>
      {artists}
    </ul>
  );
};

Artists.propTypes = {
  artistsData: PropTypes.array.isRequired
};

export default React.memo(Artists);
