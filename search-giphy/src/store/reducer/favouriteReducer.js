const initState = {
    faved:[],
    loading: true,
    url: []
}

const fav = ( state = initState, action ) => {
    switch(action.type){
        case 'LIKED':
            const newGif = action.gif
            // console.log("gif baru "+newGif);
            return {
                // ...state, json:action.json, loading: false
                ...state, faved:[...state.faved, newGif]
            };
        
        case 'REMOVE_LIKE':
            // console.log(action.gif)
            const removeGif = action.gif
            const faved = state.faved;

            const updatedFav = faved.filter((val) =>{
                console.log(val)
                return removeGif !== val
            })

            return {
             ...state
             , faved:[...updatedFav]
            }

        default:
            return state;
    }
}

export default fav;