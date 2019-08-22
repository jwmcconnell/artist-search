import React from 'react';

import SearchField from '../components/SearchField';
import ArtistList from '../components/ArtistList';

import { getArtists } from '../services/musicApi';
import PageControls from '../components/PageControls';

class SearchView extends React.PureComponent {
  state = {
    searchInput: '',
    currentSearch: '',
    artistsData: [],
    currentPage: 0,
    pages: 0
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => ({ currentSearch: state.searchInput }), () => {
      getArtists(this.state.currentSearch)
        .then(res => {
          this.setState({ 
            artistsData: res.artists, 
            currentPage: 1, 
            pages: Math.ceil(res.count / 25) 
          });
        });
    });
  }

  handlePageChange = (type) => {
    this.setState(state => ({ 
      currentPage: type === 'increment' 
        ? state.currentPage + 1 
        : state.currentPage - 1 
    }), () => {
      const { currentSearch, currentPage } = this.state;
      getArtists(currentSearch, currentPage)
        .then(res => {
          this.setState({ artistsData: res.artists });
        });
    });
  }

  render() {
    const { searchInput, artistsData, currentPage, pages } = this.state;
    return (
      <>
        <SearchField 
          searchInput={searchInput} 
          handleUpdate={this.handleUpdate}
          handleSubmit={this.handleSubmit}
        />
        <PageControls 
          currentPage={currentPage} 
          pages={pages} 
          handlePageChange={this.handlePageChange} 
        />
        <ArtistList artistsData={artistsData} />
      </>
    );
  }
}

export default SearchView;
