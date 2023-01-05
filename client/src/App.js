import React, {useEffect} from 'react'
import memories from './images/memories.png'
import {Container, Typography, AppBar, Grow, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import useStyles from './styles'
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h2' align='center'>Memories
        <img className={classes.image} src={memories} alt="memories" height="60"  />
        </Typography>
        
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App