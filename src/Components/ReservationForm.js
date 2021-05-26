import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';


function Reservation({dateIn, setDateIn, dateOut, setDateOut, night, setNight, room, setRoom, onHandleSubmit}){ 

         
    return (
        <>
              <Form  onSubmit={onHandleSubmit}><br></br>
                    <div><strong><h5>Check Availability</h5></strong></div><br></br>
                    <Form.Group unstackable widths={2}>
                      <Form.Input label='Check-In Date' placeholder='Check-In' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-In"value={dateIn} onChange={(e)=>setDateIn(e.target.value)}/><br></br>
                      <Form.Input label='Check-Out Date' placeholder='Check-Out' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-Out"value={dateOut} onChange={(e)=>setDateOut(e.target.value)}/><br></br><br></br>
                    </Form.Group><br></br>
                    <Form.Group widths={2}>
                      <Form.Input label='Nights' placeholder='No of nights' type="number" name="night" min="1" placeholder="nights" value={night} onChange={(e)=>setNight(parseInt((e.target.value)))}/>
                      <Form.Input label='Rooms' placeholder='No of Rooms' type="number" name="room" min="1" placeholder="rooms" value={room} onChange={(e)=>setRoom(parseInt((e.target.value)))} /><br></br>
                    </Form.Group> <br></br><br></br> <br></br>                   
                  <Button color='teal'><h3>Reserve Hotel</h3></Button>
              </Form>
        

        </>
    );
  }
  
  export default Reservation;
  
  // <Form>
  //   <Form.Checkbox label='I agree to the Terms and Conditions' />
  //   <Button type='submit'>Submit</Button>
  // </Form>
  //   // <label >Check-In Date</label>
    // <input type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-In"value={dateIn} onChange={(e)=>setDateIn(e.target.value)}/><br></br>
    // <label> Check-Out Date</label>
    // <input type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-Out"value={dateOut} onChange={(e)=>setDateOut(e.target.value)}/><br></br>
    // <label>Nights</label>
    // <input type="number" name="night" min="1" placeholder="nights" value={night} onChange={(e)=>setNight(parseInt((e.target.value)))} /><br></br>
    // <label>No. Rooms</label>
    // <input type="number" name="room" min="1" placeholder="rooms" value={room} onChange={(e)=>setRoom(parseInt((e.target.value)))} /><br></br>