import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HotelContainer from "./HotelContainer"
import HotelDetail from "./HotelDetail";
import ReservationContainer from "./ReservationContainer"

function App() {
  return (
      <>
        <NavBar />
        <main>
            <Switch>
                <Route exact path="/">
                    <h1><strong>Welcome to Destination Planner</strong></h1><br></br>
                    <Home />
                </Route>

                <Route exact path="/hotels">
                    <HotelContainer/>
                </Route>
                <Route exact path="/hotels/:id">
                    <HotelDetail />
                </Route>
                <Route exact path="/reservations">
                    <ReservationContainer />
                </Route>
            </Switch>
        </main>
    </>
  );
}

export default App;