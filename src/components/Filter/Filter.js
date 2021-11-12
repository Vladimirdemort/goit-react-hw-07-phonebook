import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filterValue, filter }) {
  return (
    <div>
      <label>
        {' '}
        Find contact by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => {
            filter(e.target);
          }}
        />
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string,
  filter: PropTypes.func,
};
