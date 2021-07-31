import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducers } from '../reducers/authReducers';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducers,
    ui: uiReducer,
    notes: notesReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);