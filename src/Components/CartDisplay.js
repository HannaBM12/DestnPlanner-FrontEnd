import React, { useEffect, useState } from "react";
import ReservationList from "./ReservationList";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Reservation from "./ReservationForm";



function CartDisplay({tour, hotel, traveler, onDeleteTour}) {
    // console.log(hotel)
    
    const {id, date, quantity, timage, tourTotal, location} = tour
    console.log(id)
   
   
    function removeTour(){
        onDeleteTour(id)

        const token = localStorage.getItem("token")
        
        fetch(`http://localhost:3000/tour_reservations/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
              },
        })
        .then(res => res.json())
        .then(console.log)
        
    }
    

  return (
    
        <div className="tour-image">
            <div className ="tour-detail box">
                <img src={timage} />
            </div>
     
            <div className="details">
                <p>Tour Date:- {date}</p>
                <p>City:- {location}</p>
                <p>Quantity:- {quantity} </p>
                <p>Total:- ${tourTotal}</p> 
                <Button color='pink'  onClick={removeTour}><h3>Delete Trip</h3></Button>
            </div>
        </div> 
    
  );
}

export default CartDisplay;
