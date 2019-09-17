import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import  "./App.css"
import LifeCycle from "./LifeCycle";
import CarSample from './CartSample'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <LifeCycle />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <CarSample title="react shop"/>,
  document.getElementById('root')
)
// function tick() {
//   ReactDOM.render(
//     <h1>{new Date().toLocaleString()}</h1>,
//     document.getElementById('root')
//   )
// }
//
// setInterval(tick, 1000)
