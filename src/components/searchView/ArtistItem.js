import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

const ArtistItem = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.name}/${artist.id}`}>
      <li style={styles.item}>
        <h4>{artist.name}</h4>
        <p>{artist.disambiguation}</p>
      </li>
    </Link>
    
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    disambiguation: PropTypes.string
  }).isRequired
};

export default ArtistItem;
