import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import  "./App.css"
import LifeCycle from "./LifeCycle";
import CarSample from './CartSample'
import CommentList from './components/CommentList'
import Compostions from "./components/Compostions";
import HOC from "./components/HOC";
import ContextSample from "./components/ContextSample"
import FormSample from "./components/FormSample"
import store from './store'
import ReduxTest from "./components/ReduxTest";

import { Provider } from 'react-redux'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <CommentList />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <HOC stage="1" />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <FormSample />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <ContextSample />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <Compostions />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <LifeCycle />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <CarSample title="react shop"/>,
//   document.getElementById('root')
// )
// function tick() {
//   ReactDOM.render(
//     <h1>{new Date().toLocaleString()}</h1>,
//     document.getElementById('root')
//   )
// }
//
// setInterval(tick, 1000)

function render () {
  ReactDOM.render((
    <Provider store={store}>
      <ReduxTest/>
    </Provider>
    ), document.getElementById('root'))
  // ReactDOM.render((
  //   <Provider store={store}>
  //     <ReduxTest/>
  //   </Provider>)
  //   , document.getElementById('root'))
}
render()
// store.subscribe(() => {
//   render()
// })
