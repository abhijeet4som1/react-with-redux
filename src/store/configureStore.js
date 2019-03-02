import { createStore, compose, applyMiddleware } from "redux";
import {rootReducer} from './rootReducer';

import thunk from 'redux-thunk';


const configureStore = (initialState) => {
    let midleware = [thunk];
    return createStore(rootReducer, initialState,compose(applyMiddleware(...midleware)));
}

export {
    configureStore
}