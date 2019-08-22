import React from 'react';
import PropTypes from 'prop-types';

import SearchField from '../components/searchView/SearchField';
import ArtistList from '../components/searchView/ArtistList';
import PageControls from '../components/PageControls';

import { getArtists } from '../services/musicApi';

class SearchView extends React.PureComponent {
  _isMounted = false;
  state = {
    searchInput: '',
    currentSearch: '',
    artistsData: [],
    currentPage: 0,
    pages: 0,
    disableControls: false
  }

  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    })
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadFromParams();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  loadFromParams = () => {
    const searchParams = new URLSearchParams(this.props.location.search);
    const searchInput = searchParams.get('searchInput');
    if(searchInput) {
      this.setState({ searchInput: searchInput, currentSearch: searchInput }, () => {
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
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.name === 'searchInput') {
      this.props.history.replace(`/?searchInput=${e.target.value}`);
    }
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
