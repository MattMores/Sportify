import { csrfFetch } from "./csrf";

// Define Action TYpes as Constants
// const SET_BETS = "bets/GET_ALL_BETS";
const ADD_REVIEW = "reviews/ADD_REVIEW"
// const DELETE_BET = "bets/DELETE_BET"
// const UPDATE_BET = "bets/UPDATE_BET"

// Define Action Creators
// const setBets = (bets) => ({
//     type: SET_BETS,
//     bets, // payload
// })

const addReview = (review) => ({
    type: ADD_REVIEW,
    review,
  });

// const del = (betId) => ({
//     type: DELETE_BET,
//     betId,
// });

// const updateBet = (bet) => ({
//     type: UPDATE_BET,
//     bet
// })

// Define Thunks
// export const getAllBets = () => async (dispatch) => {
//     const res = await csrfFetch('/api/bets');
//     const bets = await res.json();
//     dispatch(setBets(bets));
// }

export const reviewCreate = (review) => async (dispatch) => {
    console.log("RRRRRRRR", review)
    // const { userId, title, content, notebookId } = note; //notebookId
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(review),
    });
    if (res.ok) {
        const review = await res.json();
        console.log("REVIEWIWIWIWIWIW", review)
        dispatch(addReview(review))
        return res;
    }
    // const newNote = await response.json();
    // console.log(newNote)
    // dispatch(addNote(newNote));
    // return response;
};

// export const deleteBet = (id) => async (dispatch) => {
//     await csrfFetch('/api/bets', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     });

//     dispatch(del(id));
//   };

// export const betUpdate = (bet) => async (dispatch) => {
//     const res = await csrfFetch('/api/bets', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(bet),
// });
// if (res.ok) {
//     const updatedBet = await res.json();
//     console.log("upppppppppp", updatedBet)
//     dispatch(updateBet(updatedBet))
// }
// };

// Define an initial state
const initialState = {};

//Define a Reducer
const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // case SET_BETS:
        //     console.log("999999999999999", action.bets)
        //     const allBets = {};
        //     action.bets.forEach((bet) => {
        //         allBets[bet.id] = bet;
        //     })
        //     return {
        //         ...state,
        //         ...allBets,
        //     }
        case ADD_REVIEW: {
            return {
                ...state,
                [action.review.id]: action.review,
              };
            }
        // case UPDATE_BET:
        //     const { bet } = action
        //     newState = {...state, [bet.id] : bet}
        //     return newState;
        // case DELETE_BET:
        //     console.log("ppppppp", action)
        //     newState = {...state}
        //     delete newState[action.betId]
        //     return newState
        default:
            return state;
    }
}

export default reviewsReducer;
