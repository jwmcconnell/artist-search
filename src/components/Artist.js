import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  return (
    <li>
      <h6>{artist.name}</h6>
    </li>
  );
};

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
