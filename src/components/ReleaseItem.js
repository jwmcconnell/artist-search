import React from 'react';
import PropTypes from 'prop-types';

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

const ReleaseItem = ({ release }) => {
  const image = release['cover-art-archive'].front 
    ? `http://coverartarchive.org/release/${release.id}/front` 
    : '/src/assets/placeholder.jpg';
  return (
    <li style={styles.item}>
      <h3>{release.title}</h3>
      <img src={image} style={styles.image}/>
    </li>
  );
};

ReleaseItem.propTypes = {
  release: PropTypes.object.isRequired
};

export default ReleaseItem;
