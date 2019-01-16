const initState = {
    json :null,
    loading: true,
    info:null,
    error:null,
    errorState:false
}

const show = ( state = initState, action ) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading:true
            }
        case 'ERRORS':
            return {
                ...state,
                errorState:true,
                error: action.err
            }
        case 'GET_INFO':
            return {
                ...state,
                loading:true,
                info: action.info,
            }
        case 'RECEIVE_POSTS':
            return {
                ...state,
                json:action.json,
                loading: false
            };
        default:
            return state;
    }
}

export default show;