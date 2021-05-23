import React, { useEffect, useState } from "react";
import { Input, Menu } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Form, Image, Container, Button, Label, TextArea, Grid } from 'semantic-ui-react'
import ReservationForm from "./ReservationForm";

function HotelDetail() {

  const[hotelDetail, setHotelDetail] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

    const [dateIn, setDateIn] = useState('')
    const [dateOut, setDateOut] = useState('')
    const [night, setNight] = useState('')
    const [room, setRoom] = useState('')
  
  
    const { id } = useParams();
    const history = useHistory()

    useEffect(()=> {
     fetch(`http://localhost:3000/hotels/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setHotelDetail(data)
        setIsLoaded(true)
      })
    }, [id])
    if (!isLoaded) return <h6>Loading...</h6>

    const { name, image, propid, price, avgScore, address, neighbourhood, distance } = hotelDetail

    const travelerName = "Hanna Mulugeta"
    const travelerId = 1
    const total = price * room * night

    function handleSubmit(e){
        e.preventDefault()
        
        const bookingObj = {
          check_in: dateIn,
          check_out: dateOut,
          no_of_night: night,
          no_of_room: room,
          cancelation_policy: `24 Hr before ${dateIn}`,
          traveler_id: travelerId,
          hotel_id: id,
          total
        }

        console.log(bookingObj)
        
        fetch('http://localhost:3000/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingObj)
        })
        .then(res => res.json())
        .then(reservationData => {
          console.log(reservationData)
          history.push('/reservations')
        })
    }

  return (
    <>
        <div className="sidebar">
  
        </div>

        <Container>
                <div className ='hotel-detail box'>

                  <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}><br></br>
                          <Image src={image} alt={name} size='large' rounded/>
                        </Grid.Column>
                        <Grid.Column width={6}><br></br>
                          <div>
                          <h3>{name}</h3> <br></br>
                          <p><strong>Rating:</strong> {avgScore} Star</p>
                          <p><strong>Address:-</strong>{address}</p>
                          <p><strong>Distance to City Center:-</strong> {distance}</p>
                          <p><strong>Neighborhood:-</strong> {neighbourhood}</p>
                          <p><strong>Price</strong> ${price}</p>
                          <p><strong>Cancellation Policy: </strong> 24 hr Before {dateIn}</p>
                          </div>
                      </Grid.Column>
                    </Grid.Row>
                

                  <Grid.Column width={12}><br></br>
                      <ReservationForm dateIn={dateIn} setDateIn={setDateIn} dateOut={dateOut} setDateOut={setDateOut} 
                    night={night} setNight={setNight} room={room} setRoom={setRoom} onHandleSubmit={handleSubmit}/>
                  </Grid.Column>
                  </Grid>
              </div>
          </Container>

          
    </>
  );
}

export default HotelDetail;