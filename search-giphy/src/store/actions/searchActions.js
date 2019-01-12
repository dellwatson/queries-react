// import axios from 'axios';
// import apiKey from '../../apiKey';
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=5TUqp9G5hAZiuT7QPGfVHdMJ2hntCN6Z&limit=5

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getInfo = (info) => {

    const apiKey = '5TUqp9G5hAZiuT7QPGfVHdMJ2hntCN6Z';

    return (dispatch, getState) => {
        // ...info send state(..info ?)search
        dispatch({ type: 'GET_INFO', info});
        fetch(`http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${apiKey}&limit=3`)
            .then(res => res.json())
            .then((json) => dispatch(receivedPosts(json)))
            .catch(err => dispatch())
    }
}

export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json
})