import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    <label>Sort By:</label>
      <ul className="sortFilter">
          <li><a href="javascript:void(0);" onClick={() => updateSort('')}>Default</a></li>
          <li><a href="javascript:void(0);" onClick={() => updateSort('lowestprice')}>Lowest to highest</a></li>
          <li><a href="javascript:void(0);" onClick={() => updateSort('highestprice')}>Highest to lowest</a></li>
          <li><a href="javascript:void(0);" onClick={() => updateSort('discount')}>Discount</a></li>
      </ul>
  </div>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
