import React, { useEffect, useState } from 'react'
import {AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core'
import useStyles from './style'
import memories from '../../images/memories.png'
import {json, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const classes = useStyles();
  // const user = null;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [])

  const logOut = () => {
    setUser(null);
    dispatch({type: "LOGOUT"});
    navigate("/");
  }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading}  variant='h2' align='center'>Memories
          <img className={classes.image} srcSet={memories} alt="memories" height="60"  />
          </Typography> 
        </div>
        <Toolbar className={classes.toolbar}>
          {
            user? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.name} src={user.picture}>{user.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logOut}>Logout</Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant='contained' color="primary">Sign In</Button>
            )
          }

        </Toolbar>

    </AppBar>
  )
}

export default Navbar
