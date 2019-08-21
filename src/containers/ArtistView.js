import React from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../services/musicApi';

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
    return <h1>Artist View</h1>;
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
