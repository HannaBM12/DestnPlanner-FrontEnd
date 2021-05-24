import react from 'react';


function GuestReviews({review}){ 
  
        //  console.log(review)
    return (
            <li>
                <p>{review.title}</p>
                <p>{review.description}</p>
                {/* <p>{review.score}</p> */}
            </li>
        
    );
  }
  
  export default GuestReviews;