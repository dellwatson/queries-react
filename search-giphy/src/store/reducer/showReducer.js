const show = ( state = {}, action ) => {
    // return state;
    switch(action.type){
        case 'GET_INFO':
            console.log('here the info', action.info);
            return state;
        case 'FIND_ERROR':
            console.log('info error', action.err);
            return state;
        default:
            return state;
    }
}

export default show;