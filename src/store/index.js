import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import couter from './counter.redux'
import user from './user.redux'

export default createStore(
  combineReducers({couter, user}),
  applyMiddleware(logger, thunk)
)