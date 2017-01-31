/**
 * Created by Bambi on 31.01.2017.
 */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        )
    ),
    persistState(['favourites'])
);

export default store