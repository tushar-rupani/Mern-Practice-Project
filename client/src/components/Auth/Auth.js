import React, { useState } from 'react'
import {Avatar, Grid, Paper, Typography, Container, Button} from '@material-ui/core'
import useStyles from './style'
import LockedIcon from '@material-ui/icons/LockOpenOutlined'
import Input from './Input'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    alert("called")
    
  }
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const handleState = () => {
    setIsSignUp((prevState) => !prevState )
    setShowPassword(false)
  }
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword )
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword} />
            {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword} />} 
          </Grid>
          <Button className={classes.submit} fullWidth variant="contained" color='primary' > 
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={handleState}>{isSignUp ? 'Already have an account? Sign In' : 'Do not have an account? Sign Up'}</Button>
            </Grid>
            <Grid item>
              <GoogleLogin
                onSuccess={(res) => console.log(res)}
                onError={() => console.log("Something went wrong")}
              />
            </Grid>
          </Grid>
          
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
