import React, { Component } from 'react'


export default class CartSample  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goods: [
        {id: 1, text: 'hah', price: 1},
        {id: 2, text: 'yay', price: 2},
      ]
    }
  }
  render () {
    return (
      <div>
        { this.props.title && <h1>{this.props.title}</h1> }
      </div>
    )
  }
}