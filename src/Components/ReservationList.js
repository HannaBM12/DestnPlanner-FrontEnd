import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';
import ReservationForm from './ReservationForm'


function ReservationList({id, hotelName, avgScore, checkIn, checkOut, noOfNight, noOfRoom, total, image, price, onRemoveReservation, onHandleUpdate}){ 
   
    const [isClicked, setIsClicked] = useState(true)
    const [newCheckIn, setNewCheckIn] = useState(checkIn)
    const [newCheckOut, setNewCheckOut] = useState(checkOut)
    const [newNight, setNewNight] = useState(noOfNight)
    const [newRoom, setNewRoom] = useState(noOfRoom)
    
    const updatedTotal = newRoom * newNight * price

    function handleClick(){
        setIsClicked((isClicked) => !isClicked)
    }


    function updateReservation(e){
        e.preventDefault()

        const newRes = {
            check_in: newCheckIn,
            check_out: newCheckOut,
            no_of_night: newNight,
            no_of_room: newRoom,
            total: updatedTotal
        }
        console.log(newRes)
               
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/reservations/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newRes)
        })
        .then(res => res.json())
        .then(updatedRes => {
            onHandleUpdate(updatedRes)
            setIsClicked(!isClicked)
        })

    }
   
    function deleteReservation(){
        onRemoveReservation(id)

        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/reservations/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
              },
        })
        .then(res => res.json())
        
    }
    const avgRoundedScore = Math.floor(avgScore*100)/100
    console.log(avgRoundedScore)
         
    return (
        <>
            
       <div >
            <img src={image} alt={hotelName} />
       </div>
       <div >
         
            <p>Hotel:- {hotelName}</p>
            <p>{avgRoundedScore} out of 5</p>
            <p>Check-In:- {checkIn}</p>
            <p>Check-Out:- {checkOut}</p>
            <p>No Of Night:- {noOfNight}</p>
            <p>No Of Rooms:- {noOfRoom}</p>
            <p>total:- ${total}</p>

            {/* {link ? (
              <p>
                <a target="_blank" rel="noreferrer" href={link}>
                  Project Homepage
                </a>
              </p>
            ) : null} */}

        <Button color='pink' onClick={deleteReservation} ><h5>Cancel Reservation</h5></Button>
        <>
        {isClicked ? (
            <Button color='teal' floated='right' onClick={handleClick}><h5>Update Reservation</h5></Button>
        ):
        <Form  onSubmit={updateReservation}>
            <Form.Group unstackable widths={2}>
                <Form.Input label='Check-In' placeholder='Check-In' type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-In"value={newCheckIn} onChange={(e)=>setNewCheckIn(e.target.value)}/>
                <Form.Input label='Check-Out' placeholder='Check-Out' type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-Out"value={newCheckOut} onChange={(e)=>setNewCheckOut(e.target.value)}/>
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Input label='Night' placeholder='No of Night' type="number" name="night" min="1" placeholder="nights" value={newNight} onChange={(e)=>setNewNight(parseInt((e.target.value)))}/>
                <Form.Input label='Room' placeholder='No of Room' type="number" name="room" min="1" placeholder="rooms" value={newRoom} onChange={(e)=>setNewRoom(parseInt((e.target.value)))}/>
            </Form.Group>

            {/* <label >Check-In Date:</label>
                <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-In"value={newCheckIn} onChange={(e)=>setNewCheckIn(e.target.value)}/><br></br>
            <label> Check-Out Date:</label>
                <input type="date" name="date" min="2021-05-19" max="2022-12-31" placeholder="Check-Out"value={newCheckOut} onChange={(e)=>setNewCheckOut(e.target.value)}/><br></br>
            <label>Nights:</label>
                <input type="number" name="night" min="1" placeholder="nights" value={newNight} onChange={(e)=>setNewNight(parseInt((e.target.value)))} /><br></br>
            <label>No. Rooms:</label>
                <input type="number" name="room" min="1" placeholder="rooms" value={newRoom} onChange={(e)=>setNewRoom(parseInt((e.target.value)))} /><br></br>      */}
            <Button type ='submit' color='teal' floated='left'><h3>Update</h3></Button>
        </Form>
        }
       
        </>
          </div>
     </>

    );
  }
  
  export default ReservationList;

  