import React, { useEffect, useState } from "react";
import ReservationList from "./ReservationList";
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Reservation from "./ReservationForm";



function CartDisplay({tour, res, traveler}) {
    console.log(tour)
    console.log(res)
    const {date, quantity, timage, tourTotal} = tour
   
   

  return (
    
        <div className="tour-image">
            <div className ="tour-detail box">
                <img src={timage} />
            </div>
     
            <div className="details">
                <p>Tour Date:- {date}</p>
                <p>Quantity:- {quantity} </p>
                <p>Total:- ${tourTotal}</p> 
                <Button color='pink'  onClick><h3>Delete Trip</h3></Button>
            </div>
        </div> 
    
  );
}

export default CartDisplay;