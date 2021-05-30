import React from "react";
import { Input, Menu } from 'semantic-ui-react'

function TourSearch({searchItem, setSearchItem}) {

    
  return (
        <div>   
            <br></br><br></br>
            <label htmlFor="search"><h5><strong>Search By Location</strong></h5></label><br></br><br></br>
            <Input icon='search' placeholder='Search...' 
                type="text"
                id="tour-search"
                placeholder="Type a location ..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
           
        </div>

  );
}

export default TourSearch;