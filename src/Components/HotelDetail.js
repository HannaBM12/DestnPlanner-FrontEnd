import React, { useEffect, useState } from "react";
import { Input, Menu, List } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Form, Image, Container, Button, Label, TextArea, Grid } from 'semantic-ui-react'
import ReservationForm from "./ReservationForm";
import ReviewForm from './ReviewForm'
import GuestReviews from "./GuestReviews";
import MapGl from "./MapGl";
import ReservationList from "./ReservationList";


function HotelDetail({traveler, checkIn, checkOut, nights, rooms, roomType }) {

  const[hotelDetail, setHotelDetail] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [score, setScore] = useState('')
  const [hotelReview, setHotelReview] = useState([])
  
 

    const [dateIn, setDateIn] = useState(checkIn)
    const [dateOut, setDateOut] = useState(checkOut)
    const [night, setNight] = useState(nights)
    const [room, setRoom] = useState(rooms)
    const [amenities, setAmenities] = useState([])
    const [roomTypes, setRoomTypes] = useState([])
    const [transport, setTransport] = useState([])
    const [cleanliness, setCleanliness] = useState([])
    const [hotelSize, setHotelSize] = useState('')
    const [pets, setPets] = useState('')
    const [requiredDocs, setRequiredDocs] = useState([])
  
  
    const { id } = useParams();
    const history = useHistory()

    const token = localStorage.getItem("token")
    useEffect(()=> {

      const hotelApiId = parseInt(history.location.pathname.split("/")[3])
      console.log(hotelApiId)

      fetch(`http://localhost:3000/search/${hotelApiId}`)
      .then(res => res.json())
      .then(hotelDetail => {
          console.log(hotelDetail.data.body.atAGlance.keyFacts.arrivingLeaving)
          setRequiredDocs(hotelDetail.data.body.atAGlance.keyFacts.arrivingLeaving)
          setPets(hotelDetail.data.body.atAGlance.travellingOrInternet.travelling.pets[0])
          setHotelSize(hotelDetail.data.body.atAGlance.keyFacts.hotelSize[0])
          setAmenities(hotelDetail.data.body.overview.overviewSections[0].content)
          setRoomTypes(hotelDetail.data.body.propertyDescription.roomTypeNames)
          setCleanliness(hotelDetail.data.body.hygieneAndCleanliness.healthAndSafetyMeasures.measures)
          setTransport(hotelDetail.transportation.transportLocations[0].locations)
          setIsLoaded(true)
      }).then(console.log(cleanliness))
  
   

     fetch(`http://localhost:3000/hotels/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
     })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setHotelDetail(data)
        setIsLoaded(true)
      })
    }, [id])
    if (!isLoaded) return <h6>Loading...</h6>

   
    const hotelAminity = amenities.map(amenity =>
      <li>{amenity}</li>)

    const checkInDocs = requiredDocs.map(doc =>
      <li>{doc}</li>)
    
    const covid = cleanliness.map(clean =>
      <li>{clean}</li>)

    const typeRooms = roomTypes.map(room =>
      <li>{room}</li>)

    const airportNearby = transport.map(airport =>
           airport.name)


    console.log(hotelDetail)
    const { name, image, propid, price, avgScore, location, address, neighbourhood, distance, guestReviews, guestRating} = hotelDetail

    const avgRoundedScore = Math.floor(avgScore*100)/100
    const avg =  (avgRoundedScore + score)/2
    
    console.log(avg)
    const total = price * room * night
    // setGrandTotal(total)

    function handleSubmit(e){
        e.preventDefault()
        
        const bookingObj = {
          check_in: dateIn,
          check_out: dateOut,
          no_of_night: night,
          no_of_room: room,
          cancelation_policy: `24 Hr before ${dateIn}`,
          traveler_id: traveler.id,
          hotel_id: id,
          total
        }

        // console.log(bookingObj)
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(bookingObj)
        })
        .then(res => res.json())
        .then(reservationData => {
          console.log(reservationData)
          history.push('/hotelReservations', location)
        })
    }


    
    function handleReviewSubmit(e){
      e.preventDefault()
      
      const reviewObj = {
        title,
        description,
        score,
        hotel_id: id,
        traveler_id: traveler.id
      }

      const token = localStorage.getItem("token")
      fetch('http://localhost:3000/reviews', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(reviewObj)
      })
      .then(res => res.json())
      .then(reviewData => {
        console.log(reviewData)
        setHotelReview([...hotelDetail.reviews, reviewData])
        setTitle('')
        setDescription('')
        setScore(0)
      })
      
    }

    function setRating(score, e){
      e.preventDefault()
      setScore(score)
     
    }
  
    const reviews = hotelReview.map(review =>
      <GuestReviews key={review.id} review={review} />)
     
    
  return (
    <>
    
        <div className="sidebar">
            <br></br> <br></br>
          <MapGl hotelDetail={hotelDetail} />
            <br></br>  <br></br>  <br></br>
          <List>
            <List.Item>
              <List.Icon name='hotel'/>
              <List.Content><strong>Room Types</strong></List.Content>
            </List.Item>
          </List>
              {typeRooms}
             <br></br><br></br>

            <List>
              <List.Item>
                <List.Icon name='plane'/>
                <List.Content><strong>Nearby Airports</strong></List.Content>
              </List.Item>
          </List>

             <ul>
               <li>
              {airportNearby}
               </li>
              </ul>
                    <br></br><br></br>
          <List>
          <List.Item>
            <List.Icon name='wifi'/>
              <List.Content><strong>Amenities</strong></List.Content>
            </List.Item>
          </List>
              <ul>
                <li>
              {hotelAminity}
                </li>
              </ul>
        </div>

        <Container>
                <div className ='hotel-detail box'>

                  <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}><br></br>
                          <Image fluid src={image} alt={name} size='large' rounded verticalAlign='middle'/><br></br><br></br>
                          <strong><p>Covid-19 Measures</p></strong>
                          <ul>{covid}</ul>
                          <p><strong>Hotel Size:</strong> {hotelSize}</p>
                          <p><strong>Pets:</strong> {pets}</p>
                        </Grid.Column>
                        <Grid.Column width={6}><br></br>
                          <div>
                          <h3 style={{ color:'teal'}}><strong>{name}</strong></h3> <br></br>
                          <p><strong>Guest Reviews: <span style={{ color: 'darkorange'}}>#{guestReviews}</span>,<span></span>  Rating: <span style={{ color: 'darkorange'}}>{guestRating}/10</span></strong> </p>
                          { score ? (
                            <p><strong>Star:</strong> <strong style={{ color: 'darkorange'}}>{avg} out of 5</strong> </p>
                            ):(
                              <p><strong>Star:</strong> <strong style={{ color: 'darkorange'}}>{avgRoundedScore} out of 5</strong> </p>
                          )

                          }
                          <p><strong>Location:-</strong>{location}</p>
                          <p><strong>Address:-</strong>{address}</p>
                          <p><strong>Distance to City Center:-</strong> {distance}</p>
                          <p><strong>Neighborhood:-</strong> {neighbourhood}</p>
                          <p style={{ color: 'red'}}><strong>Price</strong> ${price}</p>
                          <p><strong>Cancellation Policy: </strong> 24 Hr Before {dateIn}</p>
                          </div>
                      </Grid.Column>
                    </Grid.Row>
                

                  <Grid.Column width={8}><br></br>
                      <ReservationForm dateIn={dateIn} setDateIn={setDateIn} dateOut={dateOut} setDateOut={setDateOut} 
                    night={night} setNight={setNight} room={room} setRoom={setRoom} onHandleSubmit={handleSubmit}/>

                  </Grid.Column>
                  <Grid.Column width={8}><br></br>
                      <ReviewForm setRating={setRating} onHandleSubmit={handleReviewSubmit} score={score} setScore={setScore} setDescription={setDescription} 
                      setTitle={setTitle} name={name} title={title} description={description} total={total}/>

                  </Grid.Column>
                  </Grid>

              </div>
          <div>
                      <strong>Check-In Time</strong>
                      <ul>{checkInDocs}</ul>
                      <h5><strong>Guest Reviews</strong></h5>
                      <ul>
                       {reviews}
                      </ul>

          </div>
          </Container>

          
    </>
  );
}

export default HotelDetail;