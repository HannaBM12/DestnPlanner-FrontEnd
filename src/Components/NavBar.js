import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Checkbox, Button } from 'semantic-ui-react'
import Search from './Search'
import { Jumbotron } from './Jumbotron';

function NavBar({ traveler, setTraveler, isDarkMode, setIsDarkMode}) {

  const history = useHistory()

  function handleClick(event){
    setIsDarkMode(!isDarkMode)
}


  function logout(){
    localStorage.removeItem("token")
    setTraveler(null)
    history.push('/')
  }
  
  return (
    
    <header>
    
          <div>
            <Link to="/"><Button color='teal' size= "large">Home</Button></Link>
          </div>
       
         <div>
           { traveler ? (
             <>
                <Link to="/hotels"><Button color='teal' size= "large">Hotels</Button></Link> 
                <Link to="/tours"><Button color='teal' size= "large">Tours</Button></Link> 
                <Link to="/reservations"><Button color='teal' size= "large">Reservation</Button></Link>
                <Link to="/profile"><Button color='teal' size= "large">Profile</Button></Link>
                <Button color='teal' size= "large" onClick={logout}>Logout</Button>
            </>
           ):(
             <>
                <Link to="/hotels"><Button color='teal' size= "large">Hotels</Button></Link> 
                {/* <Link to="/tours">Tours</Link>  */}
                <Link to="/login"><Button color='teal' size= "large">Login</Button></Link>
                <Link to="/signup"><Button color='teal' size= "large">SignUp</Button></Link>
             </>
           )
           }
            <span></span><span></span>   
            <Checkbox toggle onClick={handleClick}/>
            
        </div>        
     
        </header>
     
  );
}

export default NavBar;