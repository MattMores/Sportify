import React from 'react'
import "./UpdateReviewsModal.css"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets, betCreate, betUpdate } from "../../store/bets";
import { reviewUpdate, deleteReview } from '../../store/reviews';
import { Grid } from "@material-ui/core";
import { useParams, useHistory } from 'react-router-dom';



function UpdateReview({setShowModal , review}) {

    const { id } = useParams();
    const history = useHistory();
    const [name, setName] = useState(review.name);
    const [rating, setRating] = useState(review.rating);
    const [answer, setAnswer] = useState(review.answer);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState("");
    // const allBets = useSelector(state => Object.values(state.bets));
    // const userId = useSelector(state => state.session.user?.id);

    useEffect(() => {
    }, [dispatch]);

    const handleCancel = (e) => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && answer) {
        setErrors("")
        const updateOneReview = {userId:review.userId, betId:review.betId, name, rating, answer, id:review.id }
        let updatedReview = await dispatch(reviewUpdate(updateOneReview))
        dispatch(getAllBets())
        setShowModal(false)
        // history.push('/')
        // history.push(`/bets/${id}`)
        }
        else {
          setErrors("All fields must be filled")
        }
      }

    return (
        <div className="body-modal">
        <div className="body__info">
        {/* <tr key={bet.id}></tr> */}
        <form action="">
        <div className="error__bets">
                        {/* {errors.map((error, idx) => <div key={idx}>{error}</div>)} */}
            <div>{errors}</div>
          </div>
          <Grid container spacing={2}>
          <Grid item>
            <input value={name} onChange={e => setName(e.target.value)} type = "text" className="input" placeholder="Name/Nickname"/>
          </Grid>
          <Grid item>
            <textarea rows="5" cols="30" value={answer} onChange={e => setAnswer(e.target.value)} type = "text" className="input__Comment__Update" placeholder="Comment"/>
          </Grid>
            <Grid item>
            <select value={rating} onChange={e => setRating (e.target.value)} className="input">
              <option disabled>{rating}</option>
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
              <button onClick={handleSubmit} type="submit" className="auth-btn_">Update Comment</button>
            </Grid>
            <Grid item>
            <button onClick={handleCancel} type="submit" className="auth-btn_">Cancel</button>
            </Grid>
          </Grid>
        </form>
    </div>
    </div>
    )
}

export default UpdateReview
