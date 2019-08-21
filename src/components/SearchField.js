import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ searchInput, handleUpdate, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Artist: 
        <input type="text" name="searchInput" value={searchInput} onChange={handleUpdate} />
      </label>
      <button>Submit</button>
    </form>
  );
};

SearchField.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchField;
