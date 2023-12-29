import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';




const Results = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div className="results">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

Results.propTypes = {};

Results.defaultProps = {};

export default Results;
