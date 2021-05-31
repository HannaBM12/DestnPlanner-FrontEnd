
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import BottomBar from './BottomBar';
// import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {

    margin: '0px',
    width:  '1800px',
    minHeight: '100vh',
    minWidth: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hotel1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
          <div className={classes.root}>
             <Header />
            
        </div>
        

    </>
  );
}







// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import { Button, Form } from 'semantic-ui-react'
// import HotelContainer from './HotelContainer';
// import HotelDetail from './HotelDetail';
// import HomeSearch from './HomeSearch';



// function Home() {
             
//     // const classNames = require('classnames');
//     return (
//         <div >
//         {/* className='bg_image'> */}
//                {/* <h1>Welcome to Destination Planner</h1> */}
//                <br></br><br></br><br></br>

//         </div>
//         // <>
//         // </div> 
         
//         // </>
//     );
//   }
  
//   export default Home;