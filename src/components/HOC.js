import React, { Component } from 'react'

//
// function Course(props) {
//   return (
//     <div>{props.stage} - {props.name}</div>
//   )
// }


// 高阶组件获取赋予组件其他能力
const withName = Comp => {
  // 甚至重写组件生命周期
  class NewComponent extends Component {
    componentDidMount () {
      console.log('do some thing')
    }
    render () {
      return <Comp  {...this.props} name="高阶组件"/>
    }
  }
  return NewComponent
}

const withLog = Comp => {
  console.log(Comp.name + '渲染了')
  return props => <Comp  {...props}/>
}


@withName
@withLog
class Course extends Component {
  render () {
    return (
      <div>{this.props.stage} - {this.props.name}</div>
    )
  }
}

export default Course
// export default  withLog(withName(Course))
// export default  withLog(withName(Course))
// export default class HOC extends Component {
//   render () {
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }