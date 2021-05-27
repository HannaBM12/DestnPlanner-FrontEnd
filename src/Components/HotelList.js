import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Card, Image, Container, Dropdown, Button, Menu } from 'semantic-ui-react'
import HotelDetail from './HotelDetail';


function HotelList({hotel}) {
    const [roomInfo, setRoomInfo] = useState([])
    const [isData, setIsData] = useState(false)

    const {id, name, image, location, address, price, avgScore, propid} = hotel
    // console.log(propid)
    const avgScores = Math.floor(avgScore)
    function handleClick(){
        fetch(`http://localhost:3000/search/${propid}`)
        .then(res => res.json())
        .then(hotelDetail => {
            console.log(hotelDetail.data.body.amenities)
            const roomType = (hotelDetail.data.body.amenities)
            setRoomInfo(roomType)
            setIsData(true)
        })
    }
    console.log(roomInfo)
  
        const roomTypes = roomInfo.map(roomType => 
             <HotelDetail key={roomType.name} roomType={roomType} />)

    return (
        <>
   
     
        <Card  color = 'violet'>
            <Image className ='card-img' src={image}  wrapped ui={false} size='medium' />
            <Card.Header><strong><h5><span>{name}</span></h5></strong></Card.Header><br></br>
    
            <Card.Content>
            <Card.Meta>
                <span className='date'>Location - {location}</span><br></br>
                <span className='date'>address - {address}</span>
             </Card.Meta><br></br>

            <Card.Description>
                <strong style={{ color: 'darkorange'}}> {avgScores} out of 5</strong> <br></br>
                <strong style={{ color: 'red'}}>Price:   ${price} </strong><br></br><br></br>
                <Link  to={`/hotels/${id}`}><Button floated='left' color='teal' onClick={handleClick}><p>More Info</p></Button> </Link> <span></span>
                <Link  to={`/hotels/${id}`}><Button floated='right' color='teal'><p>Book</p></Button> </Link> <span></span>
            </Card.Description>
            </Card.Content>
        </Card>
     
               
        </>
   
    );
  }
  
  export default HotelList;
