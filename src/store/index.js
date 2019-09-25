import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import couter from './counter.redux'


export default createStore(
  combineReducers({couter}), applyMiddleware(logger, thunk))