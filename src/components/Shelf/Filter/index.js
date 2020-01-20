import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';
import './style.scss';

const availablePrices = [100, 200, 300, 400, 500, 600, 700, 800];

class Filter extends Component {
  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    console.log(this.selectedCheckboxes);
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => availablePrices.map(this.createCheckbox);

  render() {
    return (
      <div className="filters">
        <h4 className="title">Price:</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}


export default connect(
  null,
  { updateFilters }
)(Filter);
