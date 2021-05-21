import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <header>
      
        <Link to="/">Home</Link>
             
        <Link to="/hotels">Hotels</Link>
                 
                 
    </header>
  );
}

export default NavBar;