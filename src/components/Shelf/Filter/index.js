import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import './style.scss';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
class Filter extends Component {

    constructor(props) {
      super(props);

    
      this.state = {
        value: { min: 100, max: 10000 }, 
      };
    }

    componentDidMount() {
        this.selectedCheckboxes = new Set();
    }

    toggleState = value => {
        this.setState({
          value: value
        })
    };

    toggleCheckbox = () => {
        if (this.selectedCheckboxes.has(this.state.value)) {
          this.selectedCheckboxes.delete(this.state.value);
        } else {
          this.selectedCheckboxes.add(this.state.value);
        }
        this.props.updateFilters(Array.from(this.selectedCheckboxes));
    };


  render() {
    const { value } = this.state;
    return (
        <div className="filters">
        <h4 className="title">Price:</h4>
            <div className='slider'>
              <form className="form">
                <InputRange
                    maxValue={10000}
                    minValue={100}
                    value={this.state.value}
                    onChange={value => this.toggleState(value)} />
                <button type="button" onClick={this.toggleCheckbox} className="filter-btn">Apply</button>
                <div className="selected-filter">{`Rs.${value.min}  -  Rs.${value.max}`}</div>
              </form>
            </div>
        </div>
    );
  }
}


export default connect(
  null,
  { updateFilters }
)(Filter);
