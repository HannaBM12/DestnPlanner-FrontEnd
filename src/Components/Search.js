import React from "react";
import { Input, Menu } from 'semantic-ui-react'

function Search({searchItem, setSearchItem}) {

    
  return (
        <div>   
            <label htmlFor="search"><h5><strong>Search By Name</strong></h5></label>
            <Input fluid icon='search' placeholder='Search...' 
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
           
        </div>

  );
}

export default Search;