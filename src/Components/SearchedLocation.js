import React from "react";
import { Input, Menu } from 'semantic-ui-react'

function SearchedLocation({locationSearched, setLocationSearched}) {

    
  return (
        <div>   
            <br></br><br></br>
            <label htmlFor="search"><h5><strong>Search By Location</strong></h5></label><br></br>
            <Input icon='search' placeholder='Search...' 
                type="text"
                id="location-search"
                placeholder="Type a city to search..."
                value={locationSearched}
                onChange={(e) => setLocationSearched(e.target.value)}
            />
           
        </div>

  );
}

export default SearchedLocation;

