import React, { useEffect, useState } from "react";
import ReservationList from "./ReservationList";



function ReservationContainer() {

    const[reservations, setReservations] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{

        fetch('http://localhost:3000/travelers')
        .then(res => res.json())
        .then(travelerData => {
          // console.log(travelerData[0].reservations)
            setReservations(travelerData[0].reservations)
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
                  <br></br> <br></br><br></br><br></br>
         
        </div>
      
        <div>
            <h1><strong><u><em>Reservations Summary</em></u></strong></h1><br></br>
            {hotelReservation}
        </div>
    </>
  );
}

export default ReservationContainer;