import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  item: {
    border: '1px solid black',
    textAlign: 'center',
    width: '300px',
    height: '200px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

const Artist = ({ artist }) => {
  return (
    <li style={styles.item}>
      <h4>{artist.name}</h4>
      <p>{artist.disambiguation}</p>
    </li>
  );
};

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
