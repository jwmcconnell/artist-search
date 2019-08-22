import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  item: {
    textAlign: 'center',
    width: '300px',
    height: '300px',
    margin: '5px'
  },
  image: {
    width: '250px',
    height: '250px'
  }
};

const ReleaseItem = ({ release, artist }) => {
  const image = release['cover-art-archive'].front 
    ? `http://coverartarchive.org/release/${release.id}/front` 
    : '/src/assets/placeholder.jpg';
  return (
    <Link to={`/release/${artist}/${release.title}/${release.id}`} >
      <li style={styles.item}>
        <h3>{release.title}</h3>
        <img src={image} style={styles.image}/>
      </li>
    </Link>
  );
};

ReleaseItem.propTypes = {
  release: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};

export default ReleaseItem;
