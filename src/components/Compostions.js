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

const api = {
  getUser: () => ({
    name: 'hex',
    age: 20
  })
}

function Fetcher(props) {
  let user = api[props.name]()
  return props.children(user)
}

function FilterP(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          if (child.type !== 'p') {
            return
          }
          return child
        })
      }
    </div>
  )
}

function RadioGroup(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, { name: props.name})
        })
      }
    </div>
  )
}

function Radio({ children, ...rest }) {
  return (
    <label>
      <input type="radio"  {...rest} /> {children}
    </label>
  )
}

export default class Compostions extends Component {
  render () {
    return (
      <div>
        <WelcomeDialog/>
        <Fetcher name="getUser">
          { ({name, age}) => (<p>{name} - {age}</p>) }
        </Fetcher>
        <FilterP>
          <h3>react</h3>
          <p>vue</p>
        </FilterP>
        <RadioGroup>
          <Radio value="vue">vue</Radio>
          <Radio value="Angluar">Angluar</Radio>
          <Radio value="React">React</Radio>
        </RadioGroup>
      </div>
    )
  }
}