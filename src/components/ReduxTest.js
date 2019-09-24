import React, { Component } from 'react'
// import store from '../store'
// export default class ReduxTest extends Component {
//   render () {
//     return (
//       <div>
//         <p>{ store.getState() }</p>
//         <div>
//           <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
//           <button onClick={() => store.dispatch({type: 'add'})}>+</button>
//         </div>
//       </div>
//     )
//   }
// }

import { connect } from 'react-redux'

@connect(
  state => ({ num: state }),
  {
    add: () => ({ type: 'add' }),
    minus: () => ({ type: 'minus' })
  }
)
class ReduxTest extends Component {
  render () {
    return (
      <div>
        <p>{ this.props.num }</p>
        <div>
          <button onClick={() => this.props.minus() }>-</button>
          <button onClick={() => this.props.add() }>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ num: state })
const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'add' }),
  minus: () => dispatch({ type: 'minus' })
})
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReduxTest)


export default ReduxTest