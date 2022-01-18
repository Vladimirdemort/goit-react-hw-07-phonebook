import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'store/contacts/contacts-selector';
import { changeFilter } from 'store/contacts/contacts-action';

import React from 'react';
import PropTypes from 'prop-types';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        {' '}
        Find contact by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => {
            dispatch(changeFilter(e.target.value));
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
