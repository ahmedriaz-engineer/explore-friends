import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Friends = (props) => {
    const cart = props.cart;
    
    const totalEarning= cart.reduce((total, friend)=> total + friend.salary,0)
    return (
        <div>
            <h2><FontAwesomeIcon icon={faUserFriends} /> Friends: </h2>
            <h4>Total added: {cart.length}</h4>
            <h4>Total Annual Earnings: ${totalEarning}</h4>
        </div>
    );
};

export default Friends;