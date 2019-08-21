import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './ReleaseItem';

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};

const ReleaseList = ({ releasesData }) => {
  console.log(releasesData);
  const releases = releasesData.map(release => (
    <ReleaseItem key={release.id} release={release} />
  ));
  return (
    <ul style={styles.list}>{releases}</ul>
  );
};

ReleaseList.propTypes = {
  releasesData: PropTypes.array.isRequired
};

export default ReleaseList;
