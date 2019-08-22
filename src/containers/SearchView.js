import React from 'react';

import SearchField from '../components/searchView/SearchField';
import ArtistList from '../components/searchView/ArtistList';
import PageControls from '../components/PageControls';

import { getArtists } from '../services/musicApi';

class SearchView extends React.PureComponent {
  state = {
    searchInput: '',
    currentSearch: '',
    artistsData: [],
    currentPage: 0,
    pages: 0,
    disableControls: false
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
    const { currentPage, currentSearch } = this.state;
    const nextPage = type === 'increment' ? currentPage + 1 : currentPage - 1;
    this.setState({ disableControls: true }, () => {
      getArtists(currentSearch, nextPage)
        .then(res => {
          this.setState({ 
            artistsData: res.artists, 
            currentPage: (res.offset / 25) + 1,
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
    const { searchInput, artistsData, currentPage, pages, disableControls } = this.state;
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
          disableControls={disableControls}
        />
        <ArtistList artistsData={artistsData} />
      </>
    );
  }
}

export default SearchView;
