import React, { useState } from "react";
import { Input, Form } from 'semantic-ui-react'
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import { green } from "@material-ui/core/colors";
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

   paperStyle: {padding:15, height:'60Vh', width:'280', margin: "20px auto", backgroundColor: 'none'},
   avatarStyle: {backgroundColor: '#17a2b8'},
   styleBtn: {margin: '8px 0'}
}))

function Login({ setTraveler}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const history = useHistory()
  // console.log(errors)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        return res.json().then(data => {
            if(res.ok){
                return data
            } else{
                throw data
            }
        })
    })
    .then(data => {
      console.log(data)
        const { traveler, token } = data
        localStorage.setItem("token", token);
            setTraveler(traveler)
            history.push('/hotels')
        })
        .catch(error => {
            setErrors(error.errors)
        })
  } 
  
    const classes = useStyles();
  return (
    <>
    <Grid className={classes.paperStyle}>
        <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
          <Avatar className={classes.avatarStyle}><LockRoundedIcon/></Avatar><br></br>
            </Grid>
          <form id="login" onSubmit={handleSubmit}>
            <br></br>
            <h1>Login</h1>

            {/* <label>Email</label> */}<br></br>
            <TextField
              id="filled-multiline-flexible"
              name="email"
              label="Email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              variant="filled"

            />
            <br></br>
            {/* <label>Password</label> */}
            <TextField
              id="filled-multiline-flexible"
              rowsMax={1}
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              variant="filled"
            />
            <br></br>
             <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
               }
            label="Remember me"
            />


            {errors.map(error => <p style={{ color: 'red'}} key={error}>
                {error}
            </p>)}
            <Button type='submit' color='primary' variant='contained' fullWidth className={classes.styleBtn}>Login</Button>
          </form> 
          <br></br> <br></br>
          <Typography className={classes.styleBtn}> <h5>Do you have an account?
            <Link to="/signup"> Sign Up 
            </Link> </h5>
          </Typography>
      </Paper>
    </Grid>
    </>
  );
}

export default Login;