import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Card, Image, Container, Dropdown, Button, Menu } from 'semantic-ui-react'
import HotelDetail from './HotelDetail';


function HotelList({hotel}) {
    const [amenities, setAmenities] = useState([])
    const [isData, setIsData] = useState(false)

    const {id, name, image, location, address, price, avgScore, propid} = hotel
    // console.log(propid)
    const avgScores = Math.floor(avgScore)


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
                <Link  to={`/hotels/${id}/${propid}`}><Button floated='left' color='teal' ><p>More Info</p></Button> </Link> <span></span>
                <Link  to={`/hotels/${id}`}><Button floated='right' color='teal'><p>Book</p></Button> </Link> <span></span>
            </Card.Description>
            </Card.Content>
        </Card>
     
               
        </>
   
    );
  }
  
  export default HotelList;
