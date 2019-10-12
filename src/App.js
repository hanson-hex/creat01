import React, { Component } from 'react'
import { Button } from 'antd'
import logo from './logo.png'


function Welcome(props) {
 return (
   <div> {props.name}</div>
 )
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0,
      date: new Date()
    }
  }
  formatName (user) {
    return user.firstName + ' ' + user.lastName
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      })
    }, 1000)
    // this.setState({
    //   date: new Date(),
    //   count: this.state.count + 1
    // })
    this.setState((preState, prevProps) => {
      return {
        count: preState.count + 1
      }
    },() => {
      console.log('this.state.count:', this.state.count)
    })
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render() {
    const name = 'hex'
    const jsx = <p>hello ,everyOne</p>
    return (
      <div className="App">
        App组件
        <Button type="primary">点击</Button>
        {/*{ 表达式}*/}
        <h1>{ name } </h1>
        <p>{ this.formatName({firstName: 'tom', lastName: 'hex'}) } </p>
        <img src={logo} alt=""  style={{width: '100px'}} className="img" />
        <Button type="primary">Primary</Button>
        {jsx}
        <Welcome name="hah"></Welcome>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default App
