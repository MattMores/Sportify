export const initialState = {
    spotifyuser: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    // "BQDexqm2juHl8cB9kgGn8NRuyyqMlEXBv3nLoPHxRiCVqsoIHPFE52aWEwfZuEWh1pBGUEGIX-HfvGloap4_VyelhzHP5RTncLFAEs1IuvsZG1h-ORjHPu9PAnuUbPlv3bV-hlDzDGP84S1GjNk7ww6fhKaIdoC8",
}

const reducer = (state, action) => {
console.log(action);

// Action -> type, [payload]

switch(action.type) {
    case 'SET_SPOTIFY_USER':
        return {
            ...state,
            spotifyuser: action.spotifyuser
        }
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
        default:
             return state;
}
}

export default reducer;
