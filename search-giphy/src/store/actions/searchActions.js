import { apiKey } from '../../apiKey';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getInfo = (info, add) => {
    const apiKeyy = apiKey;
    return (dispatch, getState) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${apiKeyy}&limit=${add}`)
            .then(res => res.json())
            .then((json) => dispatch(receivedPosts(json)))
            .catch(err => dispatch())
    }
}

export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json
})