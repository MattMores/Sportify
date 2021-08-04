import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import { useDispatch, useSelector } from 'react-redux';
import UpdateReviewsModal from '../UpdateReviewsModal/UpdateReviewsModal';
import { useEffect } from 'react';
import { getAllBets } from "../../store/bets";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function Reviews( {review}) {
    const { id } = useSelector(state => state.session.user);
    const classes = useStyles();
    console.log("9999999", review);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <StarRating />
            <div className="review_name">{review.name}</div>
            <Typography>{review.answer}</Typography>
          </Grid>
          <Grid item>
              {review?.userId === id ? <UpdateReviewsModal review={review} /> : null}
              </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
