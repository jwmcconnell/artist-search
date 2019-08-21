import React from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../services/musicApi';

import ReleasesList from '../components/ReleaseList';

class ArtistView extends React.Component {
  state = {
    artist: {},
    releases: []
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getReleases(id)
      .then(res => {
        this.setState({ releases: res.releases });
      });
  }

  render() {
    const { releases } = this.state;
    return (
      <>
        <h1>Artist View</h1>
        <ReleasesList releasesData={releases} />
      </>
    );
  }
}

ArtistView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArtistView;
