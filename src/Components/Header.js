import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';






const useStyles = makeStyles((theme) => ({
    
          colorText: {
            color: 'teal',
          },

          root:{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '70vh',
              textAlign: 'center',
          },

          title: {
            color: '#ffz',
            fontSize: "4rem"
          },

          goDown: {
              color: 'teal',
              fontSize: '5rem',
          }
}));
    
export default function Header(){
    
    const classes = useStyles();
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(true)
        // setChecked(!checked)
    }, [])

  

    return (
        <div className={classes.root}>
            <AppBar className = {classes.appbar} elevation={0}>
               
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})} 
            collapsedHeight={50}>
            <div>
                <h1 className = {classes.title}>Welcome to <br />Destination
                <span className={classes.colorText}> Planner.</span></h1>
                <Scroll to="bottom-bar" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className ={classes.goDown}/>
                </IconButton>
                </Scroll>
            </div>
            </Collapse>

        </div>
    )
}












