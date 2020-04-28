import {combineReducers} from 'redux';
import todoReducer from './todoReducer';

//takes different reducers and combine into one, for seperations of concerns
export default combineREducers ({
    todoReducer
})