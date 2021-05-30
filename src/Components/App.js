import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HotelContainer from "./HotelContainer";
import HotelDetail from "./HotelDetail";
import ReservationContainer from "./ReservationContainer";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import HomeSearch from './HomeSearch';
import Cart from "./Cart";
import TourContainer from "./TourContainer";
import TourDetail from "./TourDetail";
import ReservationList from "./ReservationList";



function App() {
    const [traveler, setTraveler] = useState(null)

    const [destination, setDestination] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [nights, setNights] = useState('')
    const [rooms, setRooms] = useState('')

    console.log(traveler)
    const history = useHistory()

    const token = localStorage.getItem("token")
    useEffect(()=> {
        fetch('http://localhost:3000/me', {
        headers: {
                "Authorization": `Bearer ${token}`
              },
        })
        .then(res => {
            return res.json().then(data => {
                if(res.ok){
                    return data
                } else{
                    throw data
                }
            })
        })

        .then( traveler => {
            setTraveler(traveler)
        })
        .catch()
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        history.push('/hotels')  

    }  

  return (
      <>
        <NavBar traveler={traveler} setTraveler={setTraveler}/>
        <main>
            <Switch>
                <Route path="/signup">
                    <SignUp setTraveler={setTraveler} />
                </Route>
                <Route path="/login">
                    <Login setTraveler={setTraveler}/>
                </Route>
                <Route path="/profile">
                    {traveler ? (
                        <Profile traveler={traveler} setTraveler={setTraveler}/>
                    ) : (
                    
                        <h2>You must login to see this page!</h2>
                        
                    )}
                    
                </Route>
                <Route exact path="/hotels">
                    <HotelContainer destination={destination}/>
                </Route>
                <Route exact path="/hotels/:id/:propid">
                    {traveler ? (
                        <HotelDetail traveler={traveler} checkIn={checkIn} checkOut={checkOut} nights={nights} rooms={rooms}/>
                    ) : (
                        <h2 style={{ color:'teal'}}><strong>Please login/SingUp, to see this page!</strong></h2>
                    )}
                </Route>
                <Route exact path="/hotelReservations">
                        <ReservationContainer traveler={traveler} />
                </Route>

                <Route exact path="/reservations">
                        <Cart traveler={traveler} />
                        {/* <ReservationList traveler={traveler} /> */}
                </Route>
                <Route exact path="/tours">
                        <TourContainer traveler={traveler} />
                </Route>
                <Route exact path="/tours/:id">
                        <TourDetail traveler={traveler}/>
                </Route>
                <Route exact path="/">
                    <Home />
                
                    <HomeSearch destination={destination} setDestination={setDestination} checkIn={checkIn} setCheckIn={setCheckIn}
                    checkOut={checkOut} setCheckOut={setCheckOut} nights={nights} setNights={setNights} rooms={rooms} setRooms={setRooms} onHandleSubmit={handleSubmit}/> 
                </Route>
            </Switch>
        </main>
    </>
  );
}

export default App;