import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Players from '../Players/Players';


const Shop = () => {
    const [players, setPlayers] = useState([])

    useEffect( ()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='food-container'>
                {
                  players.map(player => <Players
                   key={player.id}
                   player = {player}
                  ></Players>)
                }
                
            </div>
        </div>
    );
};

export default Shop;