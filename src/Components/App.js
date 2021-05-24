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


function App() {
    const [traveler, setTraveler] = useState(null)

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
                    <HotelContainer/>
                </Route>
                <Route exact path="/hotels/:id">
                    {traveler ? (
                        <HotelDetail traveler={traveler}/>
                    ) : (
                        <h2>Please login/SingUp, to see this page!</h2>
                    )}
                </Route>
                <Route exact path="/reservations">
                        <ReservationContainer traveler={traveler} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    </>
  );
}

export default App;