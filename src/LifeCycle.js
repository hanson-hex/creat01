import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor (props) {
    super(props)
    console.log('构造函数')
  }
  componentWillMount  () {
    // 此时可以访问属性和状态，可以进行api调用，没办法做dom操作
    console.log('组件将要挂载')
  }
  componentDidMount () {
    // 组件已挂载， 可以进行更新操作
    console.log('组件已经挂载')
  }
  componentWillReceiveProps  () {
    // 父组件传递的属性变化，做相应的响应
    console.log('组件属性更新了')
  }
  shouldComponentUpdate () {
    console.log('组件是是否应该更新')
    return true
  }
  componentWillUpdate  () {
    console.log('组件将要更新')
  }
  componentDidUpdate () {
    console.log('组件已经更新')
  }
  render () {
    console.log('组件渲染')
    return <div>生命周期</div>
  }
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      someProp: 'some prop'
    }
    setTimeout(() => {
      this.setState({
        someProp: 'a new prop'
      })
    }, 1000)
  }
  render () {
    return <LifeCycle prop={this.state.someProp}/>
  }
}