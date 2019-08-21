import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ searchInput, handleUpdate }) => {
  return (
    <label>Artist: 
      <input type="text" name="searchInput" value={searchInput} onChange={handleUpdate} />
    </label>
  );
};

SearchField.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default SearchField;
