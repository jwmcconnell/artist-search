import React from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../services/musicApi';

import ReleasesList from '../components/artistView/ReleaseList';
import PageControls from '../components/PageControls';

class ArtistView extends React.Component {
  _isMounted = false;

  state = {
    artist: '',
    artistId: '',
    releases: [],
    currentPage: 0,
    pages: 0,
    disableControls: false
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
    this._isMounted = true;
    const { id, artist } = this.props.match.params;
    getReleases(id)
      .then(res => {
        if(this._isMounted) {
          this.setState({ 
            releases: res.releases, 
            artist, 
            artistId: id,
            currentPage: 1,
            pages: Math.ceil(res['release-count'] / 25)
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handlePageChange = (type) => {
    const { currentPage, artistId } = this.state;
    const nextPage = type === 'increment' ? currentPage + 1 : currentPage - 1;
    this.setState({ disableControls: true }, () => {
      getReleases(artistId, nextPage)
        .then(res => {
          this.setState({ 
            releases: res.releases, 
            currentPage: (res['release-offset'] / 25) + 1,
            disableControls: false
          });
        })
        .catch(() => {
          this.setState({
            disableControls: false
          });
        });
    });
  }

  render() {
    const { releases, artist, currentPage, pages, disableControls } = this.state;
    return (
      <>
        <h1>Artist View</h1>
        <PageControls 
          currentPage={currentPage} 
          pages={pages} 
          handlePageChange={this.handlePageChange} 
          disableControls={disableControls}
        />
        <ReleasesList releasesData={releases} artist={artist} />
      </>
    );
  }
}

export default ArtistView;
