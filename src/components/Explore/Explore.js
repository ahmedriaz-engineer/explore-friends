import React, { useState } from 'react';
import './Explore.css';
import fakeData from '../../fakeData/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Friends from '../Friends/Friends';


const Explore = () => {
    const data = fakeData
    const [friends, setfriend] = useState(data);
    const [cart, setCart] = useState([]);
    const addCart = (friend)=>{
        const newCart = [...cart, friend];
        setCart(newCart);
    }
    // console.log(friends);


    return (

        <div className= "container">
            <div className = "explore">
                <h2><FontAwesomeIcon icon={faSearch} /> Find Friends: </h2>
                <br />
                {
                    friends.map(friend => {
                        return <div className="details">
                            <img src={friend.image} alt="" />
                            <div className="info">
                                <h3>{friend.name}</h3>
                                <p>E-mail: {friend.email}</p>
                                <p>Tel: {friend.phone}</p>
                                <p>Annual Income: ${friend.salary}</p>
                                <button onClick = {()=>addCart(friend)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
                            </div>
                        </div>
                    })
                }
            </div>

            <div>
                
                <Friends cart = {cart}></Friends>
            </div>
        </div>
    )

};

export default Explore;