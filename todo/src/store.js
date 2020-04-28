import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redusers';

export default createStore(rootReducer, applyMiddleware(thunk))