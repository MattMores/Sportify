import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useState, useEffect } from 'react';
import { reviewCreate } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets, betCreate, deleteBet } from "../../store/bets";
import { useParams, useHistory, useLocation } from 'react-router';
import { Grid, lighten } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import "./AddReview.css"


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
  const classes = useStyles();
//   const [currency, setCurrency] = React.useState('EUR');
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [answer, setAnswer] = useState("");
  const userId = useSelector(state => state.session.user?.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState("");

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

useEffect(() => {
}, [dispatch]);


const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (name && answer) {
    setErrors("")
    const newReview = {userId, betId, name, rating, answer}
    // console.log("newReview", newReview)
    let createdReview = await dispatch(reviewCreate(newReview))
    // dispatch(getAllBets())
    if (createdReview) {
    //   setBetTeam("")
        history.push('/')
        history.push(`/bets/${id}`)
    }
  } else {
    setErrors("All fields must be filled")
  }
  }

//   history.push("/")
//   history.push(location.pathname) - useLocation

  return (
    <div className="body__Review">
    <div className="body__info__AddReview">
    <form action="">
    <div className="error__bets">
                        {/* {errors.map((error, idx) => <div key={idx}>{error}</div>)} */}
          <div>{errors}</div>
    </div>
      <Grid container spacing={1}>
      <Grid item>
      <input value={name}
      onChange={e => setName(e.target.value)}
      type = "text"
      className="input__Review"
      placeholder="Name/Nickname"/>
      </Grid>
      <Grid item>
        <textarea rows="5" cols="40" value={answer} onChange={e => setAnswer(e.target.value)} type = "text" className="input__Comment" placeholder="Comment (Include your Name/Nickname)"/>
      </Grid>
      <Grid item>
            <select value={rating} onChange={e => setRating (e.target.value)} placeHolder="Rating" className="input__Review">
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
      </Grid>
      <Grid item>
      <button onClick={handleSubmitReview} type="submit" className="auth-btn">Add Comment</button>
      </Grid>
      <Grid item>
      <NavLink to="/bets" exact={true} style={{ color: "inherit", textDecoration: 'inherit'}}>
      <button className="auth-btn_back">Back To Bets</button>
      </NavLink>
      </Grid>
      </Grid>
    </form>
    </div>
    <br></br>
    </div>
  );
}
