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
import { deleteReview } from '../../store/reviews';
import { useParams, useHistory, useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 500,
      minWidth: 500,
      minHeight: 100,
      maxHeight: 200,
      margin: `${theme.spacing(3)}px auto`,
      padding: theme.spacing(2),
    },
  }));

export default function Reviews( {review}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useSelector(state => state.session.user);
    const classes = useStyles();
    // const currentBet = useSelector(state => state.bets[review.betId])

    const handleDelete = async (id) => {
        // e.stopPropagation()
        let deletedBet = await dispatch(deleteReview(id))
        dispatch(getAllBets())
        if(deletedBet){
            history.push("/")
            history.push(`/bets/${id}`)
    }
}

    useEffect(() => {
    }, [dispatch]);

  return (
    // <Grid
    // container spacing={0}
    // direction="row"
    // justifyContent="center"
    // alignItems="center"
    // >
    <div className="body__info__reviews">
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{review.rating}</Avatar>
          </Grid>
          <Grid item xs>
            {/* <StarRating /> */}
            <div className="review_name">Name: {review.name}</div>
            <br></br>
            <Typography>Comment: {review.answer}</Typography>
          </Grid>
          <Grid item>
              {review?.userId === id ? <UpdateReviewsModal review={review} /> : null}
              {review?.userId === id ? <button onClick={() => handleDelete(review?.id)} className="auth-btn_row">Delete</button> : null}
            </Grid>
        </Grid>
      </Paper>
      </div>
    </div>

  );
}
