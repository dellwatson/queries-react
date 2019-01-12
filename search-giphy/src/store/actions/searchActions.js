import axios from 'axios';
// import apiKey from '../../apiKey';
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=5TUqp9G5hAZiuT7QPGfVHdMJ2hntCN6Z&limit=5


export const getInfo = (info) => {

    const apiKey = '5TUqp9G5hAZiuT7QPGfVHdMJ2hntCN6Z';
    
    return (dispatch, getState) => {
        // ...info send state(..info ?)search
        dispatch({ type: 'GET_INFO', info});
        axios.get(`${info}&api_key=${apiKey}&limit=3`)
            .then(data => console.log(data))
    }
}