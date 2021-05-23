import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';


function HomeSearch({destination, onHandleDestination, checkIn, onHandleCheckIn, checkOut, onHandleCheckOut, onHandleSubmit}){ 
    //  night, setNight, room, setRoom}) {
         
       
    const history = useHistory()
    
    // function handleSubmit(e){
    //     e.preventDefault()
    //     history.push('/hotels')  
    // }  
         
    return (
        <>
              <Form  onSubmit={onHandleSubmit}>
                  <label> Destination City:</label>
                      <input type="text" name="location" placeholder="Enter Destination" value={destination} onChange={onHandleDestination} />
                  <label >Check-In Date:</label>
                      <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-In"value={checkIn} onChange={onHandleCheckIn}/><br></br>
                  <label> Check-Out Date:</label>
                      <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-Out"value={checkOut} onChange={onHandleCheckOut}/><br></br>
                  {/* <label>Nights:</label>
                      <input type="number" name="night" min="1" placeholder="nights" value={night} onChange={(e)=>setNight(parseInt((e.target.value)))} /><br></br>
                  <label>No. Rooms:</label>
                      <input type="number" name="room" min="1" placeholder="rooms" value={room} onChange={(e)=>setRoom(parseInt((e.target.value)))} /><br></br> */}
                                        
                  <Button color='teal'><h3>Search Hotels</h3></Button>
              </Form>
        

        </>
    );
  }
  
  export default HomeSearch;


            // <Form  onSubmit={handleSubmit}>
            //       <label> Destination City:</label>
            //           <input type="text" name="location" placeholder="Enter Destination" value={destination} onChange={(e)=>setDestination((e.target.value))} />
            //       <label >Check-In Date:</label>
            //           <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-In"value={checkIn} onChange={(e)=>setCheckIn(e.target.value)}/><br></br>
            //       <label> Check-Out Date:</label>
            //           <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-Out"value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/><br></br>
            //       <label>Nights:</label>
            //           <input type="number" name="night" min="1" placeholder="nights" value={night} onChange={(e)=>setNight(parseInt((e.target.value)))} /><br></br>
            //       <label>No. Rooms:</label>
            //           <input type="number" name="room" min="1" placeholder="rooms" value={room} onChange={(e)=>setRoom(parseInt((e.target.value)))} /><br></br>
                                        
            //       <Button color='teal'><h3>Search Hotels</h3></Button>
            //   </Form>