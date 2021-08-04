export const initialState = {
    spotifyuser: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo4LCJ1c2VybmFtZSI6IkZyaWRheVRlc3QiLCJlbWFpbCI6ImZyaWRheUBnbWFpbC5jb20ifSwiaWF0IjoxNjI4MDM5NzIyLCJleHAiOjE2Mjg2NDQyMjJ9.UN05TWg_I9Y4ragiF4BFzKn95qjEv_qqU68gEKT9J74",
}

const reducer = (state, action) => {
console.log(action);

// Action -> type, [payload]

switch(action.type) {
    case 'SET_SPOTIFY_USER':
        return {
            ...state,
            spotifyuser: action.spotifyuser,
        };
    case 'SET_PLAYING':
        return {
            ...state,
            playing: action.playing,
        };
    case 'SET_ITEM':
        return {
            ...state,
            item: action.item,
        };
    case 'SET_TOP_ARTISTS':
        return {
            ...state,
            top_artists: action.top_artists,
        }
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token,
        };
    case 'SET_SPOTIFY':
        return {
            ...state,
            spotify: action.spotify
        }
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        };
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        };
        default:
             return state;
}
}

export default reducer;
