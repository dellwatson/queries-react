import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer/rootReducer';

const middleware = [thunk]
const enhancer = compose(applyMiddleware(...middleware));


// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
