import React, { useEffect, useState } from "react";
import { Input, Menu } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Form, Image, Container, Button, Label, TextArea, Grid } from 'semantic-ui-react'
import ReservationForm from "./ReservationForm";
import ReviewForm from './ReviewForm'
import GuestReviews from "./GuestReviews";

function HotelDetail({traveler}) {

  const[hotelDetail, setHotelDetail] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [score, setScore] = useState('')
  const [hotelReview, setHotelReview] = useState([])

    const [dateIn, setDateIn] = useState('')
    const [dateOut, setDateOut] = useState('')
    const [night, setNight] = useState('')
    const [room, setRoom] = useState('')
    const [grandTotal, setGrandTotal] = useState('')
  
  
    const { id } = useParams();
    const history = useHistory()

    const token = localStorage.getItem("token")
    useEffect(()=> {
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

    const { name, image, propid, price, avgScore, address, neighbourhood, distance } = hotelDetail

    const avgRoundedScore = Math.floor(avgScore*100)/100
    // const travelerName = "Hanna Mulugeta"
    // const travelerId = 1
    const total = price * room * night

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
          history.push('/reservations')
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
        // const review = hotelDetial.reviews
        setHotelReview([...hotelDetail.reviews, reviewData])
        setTitle('')
        setDescription('')
        setScore(0)
      })
      
    }

    function setRating(score, e){
      e.preventDefault()
      setScore(score)
      console.log(score)
      // setHotelReview([...hotelReview, score])
    }
    console.log(hotelDetail.reviews)
    console.log(hotelReview)
    // console.log(hotelReview.hotel.reviews)
    const guestReviews = hotelReview.map(review =>
      <GuestReviews key={review.id} review={review} />)
    
  return (
    <>
        <div className="sidebar">
              <p>Add More Content</p>
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
                          <p><strong># User Reviews</strong> </p>
                          <p><strong>{avgRoundedScore} out of 5</strong> </p>
                          <p><strong>Address:-</strong>{address}</p>
                          <p><strong>Distance to City Center:-</strong> {distance}</p>
                          <p><strong>Neighborhood:-</strong> {neighbourhood}</p>
                          <p><strong>Price</strong> ${price}</p>
                          <p><strong>Cancellation Policy: </strong> 24 hr Before {dateIn}</p>
                          </div>
                      </Grid.Column>
                    </Grid.Row>
                

                  <Grid.Column width={8}><br></br>
                      <ReservationForm dateIn={dateIn} setDateIn={setDateIn} dateOut={dateOut} setDateOut={setDateOut} 
                    night={night} setNight={setNight} room={room} setRoom={setRoom} onHandleSubmit={handleSubmit}/>

                  </Grid.Column>
                  <Grid.Column width={8}><br></br>
                      <ReviewForm setRating={setRating} onHandleSubmit={handleReviewSubmit} score={score} setScore={setScore} setDescription={setDescription} setTitle={setTitle} name={name} title={title} description={description} />

                  </Grid.Column>

                  <Grid.Column width={8}><br></br>
                      <h5><strong>Guest Reviews</strong></h5>
                      <ul>
                       {guestReviews}
                      </ul>

                  </Grid.Column>
                  </Grid>
              </div>
          </Container>

          
    </>
  );
}

export default HotelDetail;