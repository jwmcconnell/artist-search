import React from 'react';
import PropTypes from 'prop-types';

class SongView extends React.Component {
  state = {

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
    // const { id, song } = this.props.match.params;
    // getLyrics(id)
    //   .then(res => {
    //     this.setState({ lyrics: res.recordings, release });
    //   });
  }

  render() {
    return (
      <>
        <h1>Song</h1>
      </>
    );
  }
}

export default SongView;
