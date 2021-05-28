import React, { useEffect, useState } from "react";
import ReservationList from "./ReservationList";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";



function ReservationContainer({traveler}) {

    const[reservations, setReservations] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    const token = localStorage.getItem("token")
    useEffect(()=>{

        fetch(`http://localhost:3000/travelers/${traveler.id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        })
        .then(res => res.json())
        .then(travelerData => {
          console.log(travelerData)
            setReservations(travelerData.reservations)
            setIsLoaded(true)
        })
    }, [])

    // console.log(reservations[0].hotel)
    if (!isLoaded) return <h2>Loading...</h2>


    function removeReservation(resId){
       const afterRemove = reservations.filter(reservation => 
        reservation.id !== resId)
        setReservations(afterRemove)
    }

    function handleUpdateReservation(updatedRes){
      const afterUpdate = reservations.map(reservation =>
        reservation.id === updatedRes.id ? updatedRes : reservation)
        setReservations(afterUpdate)
    }
    
   const hotelReservation = reservations.map(res=>
        <ReservationList key={res.id} {...res} onRemoveReservation={removeReservation} onHandleUpdate={handleUpdateReservation}/> )

        // console.log(hotelReservation)


  return (
    <>
        <div className="sidebar">
                <p>Explore The City</p>
                <Link to="/tours"><Button className ="city-tour-btn" color='pink'><p>Add City tour</p></Button></Link>
         
        </div>
      
        <div>
            <h1><strong><u><em>Reservations Summary</em></u></strong></h1><br></br>
            {hotelReservation}
        </div>
    </>
  );
}

export default ReservationContainer;