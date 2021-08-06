import { csrfFetch } from "./csrf";

// Define Action TYpes as Constants
const SET_BETS = "bets/GET_ALL_BETS";
const ADD_BET = "bets/ADD_BET"
const DELETE_BET = "bets/DELETE_BET"
const UPDATE_BET = "bets/UPDATE_BET"

// Define Action Creators
const setBets = (bets) => ({
    type: SET_BETS,
    bets, // payload
})

const addBet = (bet) => ({
    type: ADD_BET,
    bet,
  });

const del = (betId) => ({
    type: DELETE_BET,
    betId,
});

const updateBet = (bet) => ({
    type: UPDATE_BET,
    bet
})

// Define Thunks
export const getAllBets = () => async (dispatch) => {
    const res = await csrfFetch('/api/bets');
    const bets = await res.json();
    dispatch(setBets(bets));
}

export const betCreate = (bet) => async (dispatch) => {
    // const { userId, title, content, notebookId } = note; //notebookId
    const res = await csrfFetch("/api/bets", {
        method: "POST",
        body: JSON.stringify(bet),
    });
    if (res.ok) {
        const bet = await res.json();
        dispatch(addBet(bet))
        return res;
    }
    // const newNote = await response.json();
    // console.log(newNote)
    // dispatch(addNote(newNote));
    // return response;
};

export const deleteBet = (id) => async (dispatch) => {
    await csrfFetch('/api/bets', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    dispatch(del(id));
  };

export const betUpdate = (bet) => async (dispatch) => {
    const res = await csrfFetch('/api/bets', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bet),
});
if (res.ok) {
    const updatedBet = await res.json();
    console.log("upppppppppp", updatedBet)
    dispatch(updateBet(updatedBet))
}
};

// Define an initial state
const initialState = {};

//Define a Reducer
const betsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_BETS:
            console.log("999999999999999", action.bets)
            const allBets = {};
            action.bets.forEach((bet) => {
                allBets[bet.id] = bet;
            })
            return {
                ...state,
                ...allBets,
            }
        case ADD_BET: {
            return {
                ...state,
                [action.bet.id]: action.bet,
              };
            }
        case UPDATE_BET:
            const { bet } = action
            newState = {...state, [bet.id] : bet}
            return newState;
        case DELETE_BET:
            console.log("ppppppp", action)
            newState = {...state}
            delete newState[action.betId]
            return newState;
        default:
            return state;
    }
}

export default betsReducer;
