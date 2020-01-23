import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import './style.scss';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css';

class Filter extends Component {

    constructor(props) {
      super(props);

      this.state = {
          value: 0
      }
    }

    componentDidMount() {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = value => {
        this.setState({
          value: value
        })

        if (this.selectedCheckboxes.has(value)) {
          this.selectedCheckboxes.delete(value);
        } else {
          this.selectedCheckboxes.add(value);
        }
        this.props.updateFilters(Array.from(this.selectedCheckboxes));
    };


  render() {
    const horizontalLabels = {
      0: '0',
      1000: '1000'
    }
    const { value } = this.state;
    return (
        <div className="filters">
        <h4 className="title">Price:</h4>
            <div className='slider'>
              <Slider
                  min={0}
                  max={1000}
                  labels={horizontalLabels}
                  value={value}
                  onChange={this.toggleCheckbox}
              />
                <div className='rangeValueFilter'>{value}</div>
            </div>
        </div>
    );
  }
}


export default connect(
  null,
  { updateFilters }
)(Filter);
