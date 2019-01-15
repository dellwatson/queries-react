const initState = {
    faved:[],
    loading: true,
}

const fav = ( state = initState, action ) => {
    switch(action.type){
        case 'REMOVE_LIKE':
            const removeGif = action.gif
            const faved = state.faved;
            const updatedFav = faved.filter(val => removeGif !== val)
            return {
                ...state,
                faved: [...updatedFav]
            }
        case 'LIKED':
            const newGif = action.gif
            return {
                ...state,
                faved: [...state.faved, newGif]
            };
        default:
            return state;
    }
}

export default fav;