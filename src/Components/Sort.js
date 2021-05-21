import React from "react";
import { Input, Menu, Select} from 'semantic-ui-react'

function Sort({setSortPrice, setSortRating}) {

    const priceOptions = [
  
        { key: 'All', value: "All", text: 'All'},
        { key: 'Highest', value: "Highest", text: 'Highest'},
        { key: 'Lowest', value: "Lowest", text: 'Lowest'},
        
    ]

    const starRating = [
  
        { key: 'All', value: "All", text: 'All'},
        { key: '5 Star', value: "5 Star", text: '5 Star'},
        { key: '4 Star', value: "4 Star", text: '4 Star'},
        { key: '3 Star', value: "3 Star", text: '3 Star'},
     
    ]

    function HandleSortPrice(e){
        setSortPrice(e.target.textContent)
    }
    

    function HandleSortRating(e){
        setSortRating(e.target.textContent)
    }
    
    
  return (
    <div>

    <Menu text vertical>
        <Menu.Item>
            <label htmlFor="sort"><p>Price</p></label>
            <Select name="filter" onChange={HandleSortPrice} options={priceOptions}/>
        </Menu.Item>

        <Menu.Item >
            <label htmlFor="sort"><p>Star Rating</p></label>
            <Select name="filter" onChange={HandleSortRating} options={starRating}/>       
        </Menu.Item>
    </Menu>

    </div>

  );
}

export default Sort;