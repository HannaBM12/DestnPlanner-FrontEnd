import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';


function HomeSearch({destination, setDestination, checkIn, setCheckIn, checkOut, setCheckOut, nights, setNights, rooms, setRooms, onHandleSubmit}){ 
    
        
    return (
        <>
            <Form  onSubmit={onHandleSubmit}>
                <Form.Field>
                    <label>Destination City</label>
                    <input placeholder='Location' type="text" name="location" placeholder="Enter Destination" value={destination} onChange={(e)=>setDestination((e.target.value))}/><br></br>
                </Form.Field>
                <Form.Group unstackable widths={2}>
                    <Form.Input label='Check-In Date' placeholder='Check-In' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-In"value={checkIn} onChange={(e)=>setCheckIn(e.target.value)}/><br></br>
                    <Form.Input label='Check-Out Date' placeholder='Check-Out' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-Out"value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/><br></br>
                </Form.Group><br></br>
                <Form.Group widths={2}>
                    <Form.Input label='Nights' placeholder='No of nights' type="number" name="night" min="1" placeholder="nights" value={nights} onChange={(e)=>setNights(parseInt((e.target.value)))}/>
                    <Form.Input label='Rooms' placeholder='No of Rooms' type="number" name="room" min="1" placeholder="rooms" value={rooms} onChange={(e)=>setRooms(parseInt((e.target.value)))} /><br></br>
                </Form.Group> <br></br><br></br> <br></br>                                             
                  <Button color='teal'><h3>Search Hotels</h3></Button>
              </Form>
        </>
    );
}
  
  export default HomeSearch;


    
//   <Form  onSubmit={onHandleSubmit}><br></br>
//   <div><strong><h5>Check Availability</h5></strong></div><br></br>
// <Button color='teal'><h3>Reserve Hotel</h3></Button>
// </Form>
{/* <label> Destination City:</label>
    <input type="text" name="location" placeholder="Enter Destination" value={destination} onChange={(e)=>setDestination((e.target.value))} />
<label >Check-In Date:</label>
    <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-In"value={checkIn} onChange={(e)=>setCheckIn(e.target.value)}/><br></br>
<label> Check-Out Date:</label>
    <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-Out"value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/><br></br>
<label>Nights:</label>
    <input type="number" name="night" min="1" placeholder="nights" value={nights} onChange={(e)=>setNights(parseInt((e.target.value)))} /><br></br>
<label>No. Rooms:</label>
    <input type="number" name="room" min="1" placeholder="rooms" value={rooms} onChange={(e)=>setRooms(parseInt((e.target.value)))} /><br></br> */}