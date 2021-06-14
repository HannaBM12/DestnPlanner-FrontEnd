import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({

  paperStyle: {padding:15, height:'45Vh', width:'280', margin: "20px auto", backgroundColor: 'none'},
  avatarStyle: {backgroundColor: '#17a2b8'},
  styleBtn: {margin: '15px 0'}
}))

function Profile( {traveler, setTraveler} ) {
  const [formData, setFormData] = useState({
    email: traveler.email,
    age: traveler.age,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const token = localStorage.getItem("token")
    fetch("http://localhost:3000/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(traveler => {
        console.log(traveler.name)
        setTraveler(traveler)
    })
  }

  const { email, age } = formData;

  const classes = useStyles();

  return (

    <Grid className={classes.paperStyle}>
        <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
          <Avatar className={classes.avatarStyle}><EditIcon/></Avatar><br></br>
            </Grid>
                  <form onSubmit={handleSubmit}>
                        <h2>{traveler.name}'s Profile</h2>

                      <TextField  className={classes.styleBtn}
                          id="profile-email"
                          type="text"
                          name="email"
                          label="Email"
                          autoComplete="off"
                          value={email}
                          onChange={handleChange}
                          variant="filled"
                        />
                        
                      <TextField className={classes.styleBtn}
                        id="profile-age"
                        label="Age"
                        name="age" 
                        value={age} 
                        onChange={handleChange}
                        variant="filled"
                        />

                      <Button type='submit' color='primary' variant='contained' fullWidth className={classes.styleBtn}>Update</Button>
                  </form>
              </Paper>
            </Grid>
  );
}

export default Profile;