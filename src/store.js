import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(
    rootReducer,
    composeEnhancers(
         applyMiddleware(
        thunkMiddleware
    ))

);


export default store;