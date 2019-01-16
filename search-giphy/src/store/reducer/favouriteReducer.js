const initState = {
    faved:[],
    loading: true,
    error:null
}

const fav = ( state = initState, action ) => {
    switch(action.type){
        case 'ERRORS':
            return {
                ...state,
                error: action.err
            }
        case 'REMOVE_LIKE':
            const removeGif = action.gif
            const faved = state.faved;
            const updatedFav = faved.filter(val => removeGif !== val)
            return {
                ...state,
                loading:false,
                faved: [...updatedFav]
            }
        case 'LIKED':
            const newGif = action.gif
            return {
                ...state,
                loading:false,
                faved: [...state.faved, newGif]
            };
        default:
            return state;
    }
}

export default fav;