import React, { Component } from 'react'

function Cart(props) {
  return (
    <table>
      <tbody>
      {props.data.map(d => <tr key={d.text}>
        <td>{d.text}</td>
        <td>
          <button>-</button>
          {d.count}
          <button onClick={() => props.addCount(d)}>+</button>
          </td>
        <td>${d.price * d.count}</td>
      </tr>)}
      </tbody>
    </table>
  )
}

export default class CartSample  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goods: [
        {id: 1, text: 'hah', price: 1},
        {id: 2, text: 'yay', price: 2},
      ],
      cart: [],
      text: ''
    }
    // 回调写法1
    // this.addGood = this.addGood.bind(this)
  }
  addToCart (good) {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === good.text)
    const item = newCart[idx]
    if (item) {
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    } else {
      newCart.push({...good, count: 1})
    }
    this.setState({
      cart: newCart
    })
  }
  // 回调写法2
  addGood = (e) => {
    this.setState(prevState => ({
      goods: [...prevState.goods, {text: prevState.text, price: 666}]
    }))
  }
  addCount = (good) => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === good.text)
    const item = newCart[idx]
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({
      cart: newCart
    })
  }
  textChange (e) {
    console.log('textChangee:', e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  render () {
    const title = this.props.title ?  <h1>{this.props.title}</h1> : null
    const goods = this.state.goods.map(good => <li key={good.text}>{good.text} <button onClick={() => this.addToCart(good)}>加购</button></li>)
    return (
      <div>
        {  title }
        <div>
          <input type="text" value={this.state.text} onChange={(e) => this.textChange(e)} />
          <button onClick={(e) => this.addGood(e)}>添加商品</button>
        </div>
        <ul>
          {goods}
        </ul>
        <Cart addCount={this.addCount} data={this.state.cart}></Cart>
      </div>
    )
  }
}