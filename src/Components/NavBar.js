import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from 'semantic-ui-react'
import Search from './Search'

function NavBar() {
  
  return (
      <>
        <header>
            <Link to="/">Home</Link>
        
        <div>
                
        </div>
         <div>
            <Link to="/hotels">Hotels</Link> 
            <Link to="/reservations">Reservation</Link>
            <span></span><span></span>   
            <Checkbox toggle/>
            
        </div>        
        </header>
        </>
  );
}

export default NavBar;