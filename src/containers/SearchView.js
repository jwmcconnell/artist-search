import React from 'react';

import SearchField from '../components/SearchField';

class SearchView extends React.Component {
  state = {
    searchInput: '',
    currentSearch: ''
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => ({ currentSearch: state.searchInput }));
  }

  render() {
    const { searchInput } = this.state;
    return <SearchField 
      searchInput={searchInput} 
      handleUpdate={this.handleUpdate}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default SearchView;
