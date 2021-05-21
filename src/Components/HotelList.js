import React from 'react';
import { Card, Image, Container, Dropdown, Menu } from 'semantic-ui-react'


function HotelList({hotel}) {


    // console.log(hotel)
    const {id, name, image, location, address, price, rating } = hotel

    return (
     
        <Card  color = 'violet'>
            <Card.Header><strong><h5>{name}</h5></strong></Card.Header><br></br>
            <Image className ='card-img' src={image}  wrapped ui={false} size='large' />
    
            <Card.Content>
            <Card.Meta>
                <span className='date'>Location - {location}</span><br></br>
                <span className='date'>address - {address}</span>
             </Card.Meta><br></br>

            <Card.Description>
                <strong>Rating: {rating}</strong> <br></br>
                <strong>Price: </strong> ${price}
            </Card.Description>
            </Card.Content>
        </Card>
   
    );
  }
  
  export default HotelList;