const iniState = {
    json :null,
    loading: true
}

const show = ( state = {}, action ) => {
    // return state;
    switch(action.type){
        case 'GET_INFO':
            console.log('here the info', action.info);
            return state;
        case 'FIND_ERROR':
            console.log('info error', action.err);
            return state;
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