import React, { Component } from 'react'

const Context = React.createContext()
const store = {
  name: 'hex',
  sayHi () {
    console.log(this.name)
  }
}

const withProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props} />
  </Context.Provider>
)

const withConsumer = Comp => props => (
  <Context.Consumer>
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
)

@withConsumer
class Inner extends Component {
  render () {
    return (
      <div>{this.props.value.name}</div>
    )
  }
}

@withProvider
class ContextSample extends Component {
  render () {
    return <div><Inner/></div>
  }
}

export default ContextSample
// export default class ContextSample extends Component {
//   render () {
//     return <Context.Provider value={store}>
//       <div>
//         <Context.Consumer>
//           {value => <div onClick={() => value.sayHi()}>{value.name}</div>}
//         </Context.Consumer>
//       </div>
//     </Context.Provider>
//   }
// }
