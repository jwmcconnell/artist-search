import React from 'react';
import PropTypes from 'prop-types';

import RecordingList from '../components/releaseView/RecordingList';

import { getRecordings } from '../services/musicApi';

class ReleaseView extends React.Component {
  state = {
    release: '',
    recordings: []
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getRecordings(id)
      .then(res => {
        this.setState({ recordings: res.recordings });
      });
  }
  
  render() {
    const { recordings } = this.state;
    return (
      <>
        <h1>Release</h1>
        <RecordingList recordingsData={recordings} />
      </>
    );
  }
}

export default ReleaseView;
