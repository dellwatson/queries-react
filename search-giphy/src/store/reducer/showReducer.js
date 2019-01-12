const initState = {
    json :null,
    loading: true
}

const show = ( state = initState, action ) => {
    switch(action.type){
        case 'RECEIVE_POSTS':
            // console.log(action.json);
            // console.log(state);
            return {
                ...state, json:action.json, loading: false
            };
        default:
            return state;
    }
}

export default show;