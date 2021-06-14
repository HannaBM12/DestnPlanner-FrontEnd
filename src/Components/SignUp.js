import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green } from "@material-ui/core/colors";
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme) => ({

  paperStyle: {padding:25, height:'65Vh', width:'280', margin: "20px auto", backgroundColor: 'none'},
  avatarStyle: {backgroundColor: '#17a2b8'},
  styleBtn: {margin: '12px 0'}
}))


function SignUp( {setTraveler} ) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const history = useHistory()
  console.log(errors)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  console.log(formData)
  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/signup', {
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
            history.push('/login')
        })
        .catch(error => {
            setErrors(error.errors)
        })
  }

  const { name, email, age, password } = formData;
  const classes = useStyles();

  return (
    <Grid className={classes.paperStyle}>
      <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
          <Avatar className={classes.avatarStyle}><AssignmentIcon/></Avatar><br></br>
            </Grid>

        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>

          
          <TextField className={classes.styleBtn}
           id="name"
           label="Full Name"
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            variant="filled"
          />
          
          
          
          <TextField className={classes.styleBtn}
           id="email"
           label="Email"
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleChange}
            variant="filled"
          />

          
          <TextField className={classes.styleBtn}
           id="age"
           label="Age"
            type="text"
            name="age"
            autoComplete="off"
            value={age}
            onChange={handleChange}
            variant="filled"
          />
        
          
          <TextField className={classes.styleBtn}
           id="password"
           label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
            variant="filled"
          />
            {errors.map(error => <p style={{ color: 'red'}} key={error}>
                {error}
            </p>)}
            <Button type='submit' color='primary' variant='contained' fullWidth className={classes.styleBtn}>Sign Up</Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default SignUp;