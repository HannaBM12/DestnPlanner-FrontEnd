import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HotelContainer from "./HotelContainer"

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

                <Route path="/hotels">
                    <HotelContainer/>
                </Route>
            </Switch>
        </main>
    </>
  );
}

export default App;