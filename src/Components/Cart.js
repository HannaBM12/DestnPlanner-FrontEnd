import React, { useEffect, useState } from "react";
import ReservationList from "./ReservationList";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Reservation from "./ReservationForm";
import CartDisplay from "./CartDisplay";



function TotalReservation({traveler}) {

    const[hotelReservations, setHotelReservations] = useState([])
    const[tourReservations, setTourReservations] = useState([])
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
            setHotelReservations(travelerData.reservations)
            setTourReservations(travelerData.tourReservations)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>
       
   
    
   function deleteTour(tourId){
       console.log(tourId)
        const tourData = tourReservations.filter(tour =>
            tour.id !== tourId)
            setTourReservations(tourData)
   }


   const tourRes = tourReservations.map(tour=>
        <CartDisplay key={tour.id} tour = {tour} onDeleteTour={deleteTour}/>)
  
  // const hotelRes = hotelReservations.map(hotel=>
  //         <CartDisplay  hotel = {hotel} />)
  //         // console.log(hotelRes)

    
  return (
    <>
        <div className="sidebar">
         
        </div>
      
        <div className = "tour-container">
            {/* {hotelRes} */}
            {tourRes}
        </div>
    </>
  );
}

export default TotalReservation;