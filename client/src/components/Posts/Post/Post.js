import React from 'react'
import useStyles from './style'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from "moment";
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Delete from '@material-ui/icons/Delete';
import Tags from '@material-ui/icons/TagFacesOutlined'
import { dPost,lPost } from '../../../actions/posts';
import {useDispatch} from 'react-redux';
const Post = ({post, setCurrentId}) => {
const classes = useStyles();
const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size='small' style={{color: 'white'}} onClick={() => {setCurrentId(post._id); console.log(post._id);}}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color="textSecondary" component="h2">{post.tags.map((tag) => ` #${tag}`)}</Typography>
      </div>
        <Typography variant='h5' component="h2" className={classes.title} gutterBottom>{post.title}</Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size='small' color="primary" onClick = {() => dispatch(lPost(post._id))}>
            <ThumbUpAlt fontSize='default'/> Liked {post.likeCount}
          </Button>
          <Button size='small' color="primary" onClick = {() => dispatch(dPost(post._id))}>
            <Delete fontSize='default'/> Delete
          </Button>
        </CardActions>
    </Card>
  )
}

export default Post
