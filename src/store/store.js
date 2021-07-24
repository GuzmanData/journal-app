import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducers } from '../reducers/authReducers';
import thunk from 'redux-thunk';


// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composeEnhancers =  (window && (window ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']  || compose;

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducers
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);