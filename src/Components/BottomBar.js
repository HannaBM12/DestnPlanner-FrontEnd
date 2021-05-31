import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeSearch from './HomeSearch';
import { Button, Form } from 'semantic-ui-react'
import BottomBarSlider from './BottomBarSlider';




const useStyles = makeStyles((theme) => ({

          root:{
              Height: '70vh',
              textAlign: 'center',
              display: 'flex',
          },

          homeSearch: {
            maxWidth: 742,
            marginBottom: '0',
            background: 'rgba(0, 0, 0, 0.2)',
          }


}));
    
export default function BottomBar({destination, setDestination, checkIn, setCheckIn, checkOut, setCheckOut, nights, setNights, rooms, setRooms, onHandleSubmit}){
    
    const classes = useStyles();
  

    return (
        <div className={classes.root} id="bottom-bar">
            <BottomBarSlider />
            <Form  className={classes.homeSearch} onSubmit={onHandleSubmit}>
                <Form.Field>
                <label><h3 style={{ color: 'teal'}}><strong>Find Your Next Hotel</strong></h3></label>
                <br></br>
                    <label>Destination City</label>
                    <input placeholder='Location' type="text" name="location" placeholder="Enter Destination" value={destination} onChange={(e)=>setDestination((e.target.value))}/><br></br><br></br>
                </Form.Field>
                <Form.Group unstackable widths={2}>
                    <Form.Input label='Check-In Date' placeholder='Check-In' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-In"value={checkIn} onChange={(e)=>setCheckIn(e.target.value)}/><br></br><br></br>
                    <Form.Input label='Check-Out Date' placeholder='Check-Out' type="date" name="date" min="2021-05-25" max="2022-12-31" placeholder="Check-Out"value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/><br></br><br></br>
                </Form.Group><br></br>
                <Form.Group widths={2}>
                    <Form.Input label='Nights' placeholder='No of nights' type="number" name="night" min="1" placeholder="nights" value={nights} onChange={(e)=>setNights(parseInt((e.target.value)))}/>
                    <Form.Input label='Rooms' placeholder='No of Rooms' type="number" name="room" min="1" placeholder="rooms" value={rooms} onChange={(e)=>setRooms(parseInt((e.target.value)))} /><br></br>
                </Form.Group> <br></br> <br></br>                                            
                  <Button color='teal'><h3>Search</h3></Button>
              </Form>
              <BottomBarSlider />

        </div>
    )
}
