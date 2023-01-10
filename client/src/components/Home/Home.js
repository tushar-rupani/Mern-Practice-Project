import React, {useState, useEffect} from 'react'
import {Grow, Grid, Container} from '@material-ui/core'
import Posts from '../Posts/Posts'
import {useDispatch} from 'react-redux'
import { getPosts } from '../../actions/posts'
import useStyles from '../../styles'
import Form from '../Form/Form'
const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
  
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home
