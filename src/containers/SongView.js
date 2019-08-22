import React from 'react';
import PropTypes from 'prop-types';

import { getLyrics } from '../services/musicApi';

const style = {
  whiteSpace: 'pre'
};

class SongView extends React.Component {
  _isMounted = false;
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
    this._isMounted = true;
    const { artist, song } = this.props.match.params;
    getLyrics(artist, song)
      .then(res => {
        if(this._isMounted)
          this.setState({ 
            artist, 
            song, 
            lyrics: res.lyrics ? res.lyrics : 'There are no lyrics for this song.'
          });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <h1>Song</h1>
        <p style={style}>{this.state.lyrics}</p>
      </>
    );
  }
}

export default SongView;
