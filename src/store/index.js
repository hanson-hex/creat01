import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import couter from './counter.redux'
import user from './user.redux'
// import createSagaMiddleware from 'redux-saga'
// import saga from './sagas'
// // 创建中间件
// const mid = createSagaMiddleware()
//
// // 应用中间件
// const store = createStore(
//   combineReducers({couter, user}),
//   applyMiddleware(logger, mid)
// )
//
// mid.run(saga)
//
// export default store

export default createStore(
  combineReducers({couter, user}),
  applyMiddleware(logger, thunk)
)