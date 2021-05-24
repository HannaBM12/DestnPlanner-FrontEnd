import React, { useEffect, useState }  from 'react';
import { Input, Menu, Card, Button, Divider, Form, Dropdown, Grid, Segment } from 'semantic-ui-react'
import HotelList from './HotelList'
import Sort from './Sort.js'
import Search from './Search.js'

function HotelContainer({destination}) {
    const [hotels, setHotels] = useState([])
    const [sortRating, setSortRating] = useState('All')
    const [sortPrice, setSortPrice] = useState('All')
    const [searchItem, setSearchItem] = useState('')
    
  
    console.log(destination)
   

    useEffect(()=> {
        fetch('http://localhost:3000/hotels')
        .then(res => res.json())
        .then(hotelData => {
            // console.log(hotelData)
            setHotels(hotelData)
        })

    }, [])

        const searchedItem = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(searchItem.toLowerCase()))

        const ratingSort = searchedItem.filter(hotel =>{
            if(sortRating === 'All'){
                return hotel
            } else{
                return hotel.rating === Math.floor((sortRating).split(' ')[0])
            }
        } )

        const priceSort = ratingSort.sort((hotel1, hotel2) => {
            if(sortPrice === 'Highest'){
                return hotel2.price - hotel1.price
            } else {
                return hotel1.price - hotel2.price
            }
            
        })
        
        const listHotels= priceSort.map(hotel =>
            < HotelList key={hotel.id} hotel={hotel} />)
            
            return (
                <>
                <div className="sidebar">
                    <Sort setSortPrice={setSortPrice} setSortRating={setSortRating}/>
                </div>

            
                <div>
                    <Search  searchItem={searchItem} setSearchItem={setSearchItem}/><br></br><br></br>
                
                    <Card.Group itemsPerRow={3}>
                        {listHotels}
                    </Card.Group>

                </div>
              
                
            </>
    );
}
  
  export default HotelContainer;