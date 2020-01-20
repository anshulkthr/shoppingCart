import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Sort from '../Shelf/Sort';

export default (props) => (
    <div className="topHeader"><a href="/shoppingCart"><FontAwesomeIcon icon={faStar} /></a><Sort/></div>
);
