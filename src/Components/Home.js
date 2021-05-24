import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';
import HomeSearch from './HomeSearch';



function Home() {
         
    const [destination, setDestination] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [night, setNight] = useState('')
    const [room, setRoom] = useState('')
    
    const history = useHistory()

    function handleDestination(e){
        setDestination(e.target.value)
    }

    function handleCheckIn(e){
        setCheckIn(e.target.value)
    }

    function handleCheckOut(e){
        setCheckOut(e.target.value)
    }


    
    function handleSubmit(e){
        e.preventDefault()
        console.log(destination)
        history.push('/hotels', night)  

    }  
    // console.log(destination)
    // <HotelContainer destination={destination}/>
    const classNames = require('classnames');
    return (
        <>
        <div className={ classNames('bg_image', 'main-home')}> 
            <h1><strong>Welcome to Destination Planner</strong></h1>
        </div>
         <div>   

        <HomeSearch destination = {destination} onHandleDestination={handleDestination} checkIn={checkIn} onHandleCheckIn={handleCheckIn} checkOut={checkOut} 
           onHandleCheckOut={handleCheckOut} onHandleSubmit={handleSubmit} night={night} setNight={setNight} room={room} setRoom={setRoom}/>
          
        </div>    
         
        </>
    );
  }
  
  export default Home;