import {createStore, combineReducers, applyMidleware} from 'redux';
import crudReducer from './reducers/CrudReducer'

export default createStore(crudReducer)