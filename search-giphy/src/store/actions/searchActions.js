import { apiKey } from '../../apiKey';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const GET_INFO = 'GET_INFO';


export const getInfo = (info, add) => {
    const apiKeyy = apiKey;
    return (dispatch, getState) => {
        dispatch({ type: GET_INFO, info });
        dispatch({ type: 'LOADING'})
        fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${apiKeyy}&limit=${add}`)
            .then(res => res.json())
            .then((json) => dispatch({ type: RECEIVE_POSTS, json }))
            .catch(err => dispatch({ type: 'ERRORS', err}))
    }
}

