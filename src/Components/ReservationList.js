import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import HotelContainer from './HotelContainer';
import HotelDetail from './HotelDetail';
import ReservationForm from './ReservationForm'


function ReservationList({id, room, hotelName, avgScore, checkIn, checkOut, noOfNight, noOfRoom, total, image, price, onRemoveReservation, onHandleUpdate, tour}){ 
   
    const [isClicked, setIsClicked] = useState(true)
    const [newCheckIn, setNewCheckIn] = useState(checkIn)
    const [newCheckOut, setNewCheckOut] = useState(checkOut)
    const [newNight, setNewNight] = useState(noOfNight)
    const [newRoom, setNewRoom] = useState(noOfRoom)
    
    const updatedTotal = newRoom * newNight * price
    total = Math.floor(total)

   
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
    console.log(tour)
    // const {date, quantity, timage, tourTotal} = tour
         
    return (
        <>
            <br></br>
       <div >
            <img src={image} alt={hotelName} />
       </div>
       <div >
            <br></br>
            <strong><h4><p>Hotel:- {hotelName}</p></h4></strong>
            <strong><p style={{ color: 'darkorange'}}><h6>{avgRoundedScore} out of 5</h6></p></strong><br></br>
            <p>Check-In:- {checkIn}</p>
            <p>Check-Out:- {checkOut}</p>
            <p>No Of Night:- {noOfNight}</p>
            <p>No Of Rooms:- {noOfRoom}</p>
            <strong><p style={{ color: 'red'}}>Total:- ${total}</p></strong><br></br>


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
            <Button type ='submit' color='teal' floated='left'><h3>Update</h3></Button>
        </Form>
        }
       
        </>
          </div>
     </>

    );
  }
  
  export default ReservationList;

  