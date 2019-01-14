const initState = {
    faved:[],
    loading: true,
    url: []
}

const fav = ( state = initState, action ) => {
    switch(action.type){
        case 'REMOVE_LIKE':
            // console.log(action.gif)
            const removeGif = action.gif
            const faved = state.faved;
            // console.log("removed")
            const updatedFav = faved.filter((val) =>{
                // console.log(val)
                return removeGif !== val
            })

            return {
             ...state
             , faved:[...updatedFav]
            }

        case 'LIKED':
            const newGif = action.gif
            // console.log("gif baru "+newGif);
            return {
                // ...state, json:action.json, loading: false
                ...state, faved:[...state.faved, newGif]
            };
        

        default:
            return state;
    }
}

export default fav;