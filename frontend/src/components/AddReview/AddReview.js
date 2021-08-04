import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useEffect } from 'react';
import { reviewCreate } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets, betCreate, deleteBet } from "../../store/bets";
import { useParams, useHistory, useLocation } from 'react-router';

const betTypes = [
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '4',
    },
    {
        value: '5',
      },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddReview( {betId}) {
  const { id } = useParams();
  console.log("matthew", id)
  const classes = useStyles();
//   const [currency, setCurrency] = React.useState('EUR');
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [answer, setAnswer] = useState("");
  const userId = useSelector(state => state.session.user?.id);
  const dispatch = useDispatch();
  const history = useHistory();

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

useEffect(() => {
}, [dispatch]);

const handleSubmitReview = async (e) => {
    e.preventDefault();
    const newReview = {userId, betId, name, rating, answer}
    console.log("newReview", newReview)
    let createdReview = await dispatch(reviewCreate(newReview))
    // dispatch(getAllBets())
    if (createdReview) {
    //   setBetTeam("")
        history.push('/')
        history.push(`/bets/${id}`)
    }
  }

//   history.push("/")
//   history.push(location.pathname) - useLocation

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      /> */}
      <TextField
        id="name"
        value={name}
        onChange = {e => setName(e.target.value)}
        label="Outlined secondary"
        variant="outlined"
        color="primary"
      />
      <TextField
      id="rating"
      select
      label="Pick"
      value={rating}
      onChange={e => setRating(e.target.value)}
    //   onChange={handleChange}
      helperText="Please select your currency"
      >
          {betTypes.map((option) => (
               <MenuItem key={option.value} value={option.value}>
                   {option.value}
                   </MenuItem>
                   ))}
        {/* <option value="1">1</option>
        <option value="2">2</option> */}
    </TextField>
    <TextField
          id="answer"
          label="Review"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          multiline
          rows={4}
        //   defaultValue="Comment"
          variant="outlined"
        />
    <button onClick={handleSubmitReview} type="submit" className="auth-btn">Add Comment</button>
    </form>
  );
}
