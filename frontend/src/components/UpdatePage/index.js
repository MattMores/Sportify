import React from 'react'
import "./UpdatePage.css"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets, betCreate, betUpdate } from "../../store/bets";
import { Grid } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';



function UpdatePage({setShowModal , bet}) {

    const history = useHistory();
    const [betTeam, setBetTeam] = useState(bet.betTeam);
    const [opposingTeam, setOpposingTeam] = useState(bet.opposingTeam);
    const [betType, setBetType] = useState(bet.betType);
    const [line, setLine] = useState(bet.line);
    const [amount, setAmount] = useState(bet.amount);
    const [reason, setReason] = useState(bet.reason);
    const dispatch = useDispatch();
    // const allBets = useSelector(state => Object.values(state.bets));
    // const userId = useSelector(state => state.session.user?.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateOneBet = {userId:bet.userId, betTeam, opposingTeam, betType, line, amount, reason, id:bet.id }
        dispatch(betUpdate(updateOneBet))
        // dispatch(getAllBets())
        setShowModal(false)
      }

    return (
        <div className="body-modal">
        <div className="body__info">
        {/* <tr key={bet.id}></tr> */}
        <form action="">
          <Grid container spacing={2}>
          <Grid item>
            <input value={betTeam} onChange={e => setBetTeam(e.target.value)} type = "text" className="input" placeholder="Team #1"/>
          </Grid>
          <Grid item>
            <input value={amount} onChange={e => setAmount(e.target.value)} type = "text" className="input" placeholder="$$ Amount $$"/>
          </Grid>
          <Grid item>
            <input value={line} onChange={e => setLine(e.target.value)} type = "text" className="input" placeholder="Line"/>
          </Grid>
            <Grid item>
            <input value={opposingTeam} onChange={e => setOpposingTeam(e.target.value)} className="input" type="text" placeholder="Team #2"/>
            </Grid>
            <Grid item>
            <input value={reason} onChange={e => setReason(e.target.value)} className="input" type="text" placeholder="Reason"/>
            </Grid>
            <Grid item>
            <select value={betType} onChange={e => setBetType (e.target.value)} className="input">
              <option disabled>Bet Type</option>
              <option value="Straight">Straight</option>
              <option value="Spread">Spread</option>
              <option value="Over">Over</option>
              <option value="Under">Under</option>
              <option value="Parlay">Parlay</option>
            </select>
            </Grid>
            <Grid item>
              <button onClick={handleSubmit} type="submit" className="auth-btn">Update Bet</button>
            </Grid>
          </Grid>
        </form>
    </div>
    </div>
    )
}

export default UpdatePage
