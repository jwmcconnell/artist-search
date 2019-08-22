import React from 'react';
import PropTypes from 'prop-types';

import { getLyrics } from '../services/musicApi';

class SongView extends React.Component {
  state = {
    artist: '',
    song: '',
    lyrics: ''
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        song: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    const { artist, song } = this.props.match.params;
    getLyrics(artist, song)
      .then(res => {
        this.setState({ artist, song, lyrics: res.lyrics });
      });
  }

  render() {
    return (
      <>
        <h1>Song</h1>
        <p>{this.state.lyrics}</p>
      </>
    );
  }
}

export default SongView;
