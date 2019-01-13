const initState = {
    faved:[],
    loading: true,
    url: []
}

const fav = ( state = initState, action ) => {
    switch(action.type){
        case 'LIKED':
            const newGif = action.gif
            // console.log(newGif);
            return {
                // ...state, json:action.json, loading: false
                ...state, faved:[...state.faved, newGif]
            };

        default:
            return state;
    }
}

export default fav;