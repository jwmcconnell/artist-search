import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  controls: {
    textAlign: 'center',
    margin: '10px'
  },
  button: {
    margin: '5px'
  }
};

const PageControls = ({ currentPage, pages, handlePageChange, disableControls }) => {
  return (
    <section style={styles.controls}>
      <button 
        style={styles.button} 
        onClick={() => handlePageChange('decrement')}
        disabled={currentPage <= 1 || disableControls}
      >←</button>
      <span>Page: {currentPage} of: {pages}</span>
      <button 
        style={styles.button} 
        onClick={() => handlePageChange('increment')}
        disabled={currentPage === pages || disableControls}
      >→</button>
    </section>
  );
};

PageControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  disableControls: PropTypes.bool.isRequired
};

export default PageControls; 
