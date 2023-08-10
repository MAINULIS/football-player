import React from 'react';
import './Players.css'

const Players = (props) => {
    const {img, name, price, age,country, ratings} =props.player
    return (
        <div className='players'>
            <img src={img} alt="" />
            <div className='player-info'>
                <h5 className='players-name'>Name: {props.player.name}</h5>
                <h6>Price: ${price}</h6>
                <p>Country: {country}</p>
                <p>Ratings: {ratings}star</p>


            </div>
        </div>
    );
};

export default Players;