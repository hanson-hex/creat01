import React, { Component } from 'react'
import { add, minus, asyncAdd } from "../store/counter.redux"
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
  state => ({ num: state.couter }),
  {
    add,
    minus,
    asyncAdd
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
          <button onClick={() => this.props.asyncAdd() }>asyncAdd</button>
        </div>
      </div>
    )
  }
}
//
// const mapStateToProps = state => ({ num: state })
// const mapDispatchToProps = dispatch => ({
//   add: () => dispatch({ type: 'add' }),
//   minus: () => dispatch({ type: 'minus' })
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReduxTest)


export default ReduxTest