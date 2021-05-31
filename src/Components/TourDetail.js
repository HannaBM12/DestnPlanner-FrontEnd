import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Card, Icon, Rating, Form, Image, Container, Button, Label, TextArea, Grid, Search} from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  paperStyle: {padding: 10, height:'40Vh', width:'280', margin: "15px auto", backgroundColor: 'none'},
  
}))


function TourDetail({traveler}) {
    const [tour, setTour] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [date, setDate]= useState('')
    const [quantity, setQuantity]= useState('')
   
    
    const history = useHistory();

    const { id } = useParams()

    const classes = useStyles();
    
    useEffect(() => {
        fetch(`http://localhost:3000/tours/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setTour(data)
            setIsLoaded(true)
        })
        
    }, [id])
    
    if (!isLoaded) return <h2>Loading...</h2>
    
    const { name, description, location, timage, tprice, video } = tour
    
  
    const traveler_id = traveler.id
    const total = quantity * tprice

    function handleSubmit(e){
        e.preventDefault()

        const tourObj = {
        
            date,
            quantity,
            tour_total: total,
            tour_id: id,
            traveler_id
        }
        console.log(tourObj)
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/tour_reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(tourObj)
            })
            .then(res => res.json())
            .then(tourData => {
                console.log(tourData)
                history.push(`/reservations`)
            })

    }

    return (
        <>

        <div className="sidebar">
            <br></br> <br></br>
            
        </div>
      
  
      <Container>
        <div className='tour-detail box'>

      <Grid>
        <Grid.Row>
          <Grid.Column width={12}><br></br>
            <Image src={timage} alt={name} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={14}><br></br>
            <h2 style={{ color: 'teal'}}><strong>{name}</strong></h2><br/>
            <p><h5>{description}</h5></p>
            <h5><p><strong>Location:</strong> {location}</p></h5>
            <h5><p style={{ color: 'red'}}><strong>Price:</strong> ${tprice}</p></h5>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
          <h3 style={{ color: 'teal'}}><strong>Explore More</strong> </h3><br/>
          <iframe width="430" height="275" src={video}>
              </iframe>
          </Grid.Column>
          <Grid.Column width={6} className={classes.paperStyle}> <br/><br/>
             <Form onSubmit={handleSubmit}>
                    <label >Tour Date:</label>
                    <input type="date" name="date" min="2021-05-27" max="2022-12-31" placeholder="Tour date"value={date} onChange={(e)=>setDate(e.target.value)}/><br></br>
                    <input type="number" name="quantity" min="1" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(parseInt((e.target.value)))} /><br></br>
                    <Label.Group color='pink' tag>
                    <Label as='a'>
                     Price
                      <Label.Detail>{total}</Label.Detail>
                    </Label>
                    </Label.Group><br></br>
                    <Button color='teal'><h3>Purchase Tour</h3></Button>
                 </Form>
              </Grid.Column>

          </Grid.Row>
      </Grid>
      </div>
      </Container>
      </>

    
      );
    

}

export default TourDetail;