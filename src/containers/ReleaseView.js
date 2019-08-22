import React from 'react';
import PropTypes from 'prop-types';

import RecordingList from '../components/releaseView/RecordingList';

import { getRecordings } from '../services/musicApi';

class ReleaseView extends React.Component {
  _isMounted = false;
  state = {
    artist: '',
    release: '',
    recordings: []
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    this._isMounted = true;
    const { id, release, artist } = this.props.match.params;
    getRecordings(id)
      .then(res => {
        this.setState({ recordings: res.recordings, release, artist });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    const { recordings, artist } = this.state;
    return (
      <>
        <h1>Release</h1>
        <RecordingList recordingsData={recordings} artist={artist} />
      </>
    );
  }
}

export default ReleaseView;
