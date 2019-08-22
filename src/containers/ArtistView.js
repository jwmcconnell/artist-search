import React from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../services/musicApi';

import ReleasesList from '../components/artistView/ReleaseList';

class ArtistView extends React.Component {
  state = {
    artist: '',
    releases: []
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    const { id, artist } = this.props.match.params;
    getReleases(id)
      .then(res => {
        this.setState({ releases: res.releases, artist });
      });
  }

  render() {
    const { releases, artist } = this.state;
    return (
      <>
        <h1>Artist View</h1>
        <ReleasesList releasesData={releases} artist={artist} />
      </>
    );
  }
}

export default ArtistView;
