import React from 'react';

import SearchField from '../components/SearchField';
import Artists from '../components/Artists';

import { getArtists } from '../services/musicApi';

class SearchView extends React.PureComponent {
  state = {
    searchInput: '',
    currentSearch: '',
    artistsData: []
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => ({ currentSearch: state.searchInput }), () => {
      getArtists(this.state.currentSearch)
        .then(artists => {
          this.setState({ artistsData: artists.artists });
        });
    });
  }

  render() {
    const { searchInput, artistsData } = this.state;
    return (
      <>
        <SearchField 
          searchInput={searchInput} 
          handleUpdate={this.handleUpdate}
          handleSubmit={this.handleSubmit}
        />
        <Artists artistsData={artistsData} />
      </>
    );
  }
}

export default SearchView;
