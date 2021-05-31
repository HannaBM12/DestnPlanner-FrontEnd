import React from 'react'
import styled from 'styled-components'
import { Fragment } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  paperStyle: {padding:15, height:'45Vh', width:'280', margin: "10px auto", backgroundColor: 'none'},
  
}))


const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size:20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding:20px;
  background: #fff;
`

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input { display: none; }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
  }
  input:checked ~ label, input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`
const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`


function ReviewForm ({setRating, onHandleSubmit, onHandleChange, name, title, description, setDescription, setTitle, score, setScore}){

  const classes = useStyles();
    const ratingOptions = [5,4,3,2,1].map((rate, index) => {
        return (
          <>
            <input type="radio" value={rate} checked={score == rate.index} name ='rating' onChange={(e)=>console.log('selected:', rate)} id={`rating-${rate}`} />
            <label onClick= {setRating.bind(this, rate)}></label>
          </>
        )
      })

    return (
        
        <div className = 'wrapper'>
            <Form onSubmit = {onHandleSubmit} className={classes.paperStyle}> <br></br>
            <div><h5> Review <strong style={{ color:'teal'}}>{name}</strong></h5></div> <br></br>
            <Form.Group unstackable widths={2}>
              <Form.Input label='Title' placeholder='Title' type='text' onChange={(e)=>setTitle(e.target.value)} type='text' name="title" value={title} placeholder="Review Title"/>
              <Form.Input label='Description' placeholder='Write Your Review' type='text' onChange={(e)=>setDescription(e.target.value)} type='text' name="description" value={description} placeholder="Review Description" />
            </Form.Group>
           
                    <RatingContainer>
                          <RatingBoxTitle>Rate This Hotel</RatingBoxTitle>
                                <RatingBox>
                                    {ratingOptions}
                                </RatingBox>
                      </RatingContainer>
                               
            <Button color='teal' type='submit'><h3>Submit Your Review</h3></Button> 
            </Form>
        </div>
        
    )
}

export default ReviewForm;



                // <div className='field'>
                //     <input onChange={(e)=>setTitle(e.target.value)} type='text' name="title" value={title} placeholder="Review Title" />
                // </div>
                // <div className='field'>
                //     <input onChange={(e)=>setDescription(e.target.value)} type='text' name="description" value={description} placeholder="Review Description" />
                // </div>
                // <div className='field'>
                //     <RatingContainer>
                //         <RatingBoxTitle>Rate This Hotel</RatingBoxTitle>
                //             <RatingBox>
                //                 {ratingOptions}
                //             </RatingBox>
                //     </RatingContainer>
                //     <button type='submit'>Submit Your Review</button> 
                // </div>