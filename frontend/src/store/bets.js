import { csrfFetch } from "./csrf";

// Define Action TYpes as Constants
const SET_BETS = "bets/GET_ALL_BETS";

// Define Action Creators
const setBets = (bets) => ({
    type: SET_BETS,
    bets, // payload
})

// Define Thunks
export const getAllBets = () => async (dispatch) => {
    const res = await csrfFetch('/api/bets');
    const bets = await res.json();
    dispatch(setBets(bets));
}

// Define an initial state
const initialState = {};

//Define a Reducer
const betsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BETS:
            const allBets = {};
            action.bets.forEach((bet) => {
                allBets[bet.id] = bet;
            })
            return {
                ...state,
                ...allBets,
            }
        default:
            return state;
    }
}

export default betsReducer;
