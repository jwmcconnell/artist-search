import React from 'react';

import SearchField from '../components/SearchField';

class SearchView extends React.Component {
  state = {
    searchInput: ''
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { searchInput } = this.state;
    return <SearchField searchInput={searchInput} handleUpdate={this.handleUpdate} />;
  }
}

export default SearchView;
