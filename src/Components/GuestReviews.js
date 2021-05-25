import react from 'react';


function GuestReviews({review}){ 
  
        //  console.log(review)
    return (
            <li>
                <p><strong>{review.title}</strong></p>
                <p>{review.description}</p>
            </li>
        
    );
  }
  
  export default GuestReviews;