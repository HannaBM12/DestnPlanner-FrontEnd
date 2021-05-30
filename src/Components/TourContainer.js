import React, { useEffect, useState } from "react";
import TourList from "./TourList"
import { Card } from 'semantic-ui-react'
import Search from './Search'
import TourSearch from "./TourSearch.js";

function TourContainer({review, traveler}){ 
  
    const[tours, setTours] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)


    const token = localStorage.getItem("token")
    useEffect(()=>{

        fetch("http://localhost:3000/tours", {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        })
        .then(res => res.json())
        .then(toursData => {
          console.log(toursData)
            setTours(toursData)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>

    const filterByLocation = tours.filter(tour =>
        tour.location.toLowerCase().includes(searchItem.toLowerCase()))

    const tourDetail = filterByLocation.map(tour =>
        <TourList  key={tour.id} tour = {tour} />)


    return (
        <>
        <div className="sidebar">
        <TourSearch searchItem ={searchItem} setSearchItem={setSearchItem}/>
        </div>
            <div>
                <br></br> <br></br>
                <Card.Group itemsPerRow={3}>
 
                     {tourDetail}   
    
                </Card.Group>

                 <div className="tour-container">
                </div>
            </div>
        </>
    );
  }
  
  export default TourContainer;