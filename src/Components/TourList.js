import React from "react";
import { Link } from "react-router-dom"
import { Card, Segment, Icon, Image, Container, Button, Divider } from 'semantic-ui-react'


function TourList({tour}){ 
  
        console.log(tour)
        const {id, name, description, location, image, price} = tour


    return (
        <Card  color = 'violet'>
       
        <Image className ='card-img' src={image}  wrapped ui={false} size='small' />
    
        <Card.Content>
          <Card.Header>{name}</Card.Header><br></br>
          <Card.Meta>
            <span className='date'>Location - {location}</span><br></br>
          </Card.Meta><br></br>

          <Card.Description>
          <Container textAlign='justified'>
            <strong>Description</strong><br></br><br></br>
            {description} <br></br><br></br>
           </Container>
          <strong>Price</strong> ${price}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

          {/* <>
        if (currentUser) {
          // history.push("/attractions"); */}
          <Link  to={`/tours/${id}`}><Button color='teal'><h3>Book Now</h3></Button> </Link> <span></span>
          {/* } else {
              history.push("/attractions");
             }
          </> */}
        </Card.Content>
      </Card>
  
    );
  }
  
  export default TourList;