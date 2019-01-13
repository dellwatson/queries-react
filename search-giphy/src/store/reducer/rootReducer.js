import { combineReducers } from 'redux';
import show from './showReducer';
import fav from './favouriteReducer';

const rootReducer = combineReducers({
    show,
    fav
})

export default rootReducer;