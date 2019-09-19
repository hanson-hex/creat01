import React, { Component } from 'react'

function Dialog(props) {
  return (
    <div style={{border: `4px solid ${props.color || 'blue'}`}}> {props.children}
    <div className="footer">
      { props.foot }
    </div>
    </div>
  )
}

function WelcomeDialog() {
  const confirmButton = <button onClick={() => alert('react 大法好')}>确定</button>
  return (
    <Dialog color="green" foot={confirmButton}>
      <h1>欢迎光临</h1>
      <p>感谢使用react</p>
    </Dialog>
  )
}

export default class Compostions extends Component {
  render () {
    return (
      <div>
        <WelcomeDialog/>
      </div>
    )
  }
}