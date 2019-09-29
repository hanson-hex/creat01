import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { login } from '../store/user.redux'
import store from '../store'
function App(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/foo">foo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/*<Route path="/about" component={About}></Route>*/}
        <Route exact path="/login" component={Login}></Route>
        <PrivateRoute path="/about" component={About}></PrivateRoute>
        <Route exact path="/detail/:course" component={Detail}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  )
}

function Home({ location }) {
  console.log('接收参数:', location.state)
  return (<div>
    <ul>
      <li>
        <Link to="/detail/web">Web</Link>
      </li>
      <li>
        <Link to="/detail/Python">Python</Link>
      </li>
      <li>
        <Link to="/detail/Java">Java</Link>
      </li>
    </ul>
  </div>)
}

function Detail({ match, history, location }) {
  // match - 参数获取等路由信息
  // history - 导航
  // location - url定位
  console.log(match, history, location)
  return (<div>
    { match.params.course }
    <button onClick={history.goBack}>后退</button>
    <button onClick={() => history.push({pathname:'/', state: {foo: 'bar'}})}>到首页</button>
  </div>)
}

@connect(
  state => ({ isLogin: state.user.isLogin })
)
class PrivateRoute extends Component{

  render () {
    console.log('this.props.isLogin:', this.props.isLogin)
    return (<Route {...this.props} render={
      (props) => this.props.isLogin ? (<Component {...props} />) : (<Redirect to={{
        pathname: '/login', state: { from: props.location.pathname }
      }} />)
    }></Route>)
  }
}

// const auth = {
//   isLogin: false,
//   login(cb) {
//     this.isLogin = true
//     setTimeout(cb, 300)
// }
// }

@connect(
  state => ({ isLogin: state.user.isLogin }),
  {
    login
  }
)
class Login extends Component {
  render () {
    const from = this.props.location.state.from || '/'
    console.log('this.props:', this.props)
    console.log('from:', from)
    if (this.props.isLogin) {
      return <Redirect to={from}></Redirect>
    }
    return (
      <div>
        <p>请先登录</p>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

function NoMatch(props) {
  return <div>404</div>
}

function About() {
  return <div>
    <h2>用户中心</h2>
    <div>
      <Link to="/about/me"> 个人信息</Link>
      <Link to="/about/order"> 订单</Link>
    </div>
    <Switch>
      <Route path="/about/me"  component={Me}></Route>
      <Route path="/about/order"  component={Order}></Route>
      <Redirect to="/about/me"></Redirect>
    </Switch>
  </div>
}
function Me(props) {
  return <div>
    Me
  </div>
}

function Order(props) {
  return <div>
    Order
  </div>
}

export default class RouterSample extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <App></App>
        </Provider>
      </BrowserRouter>
    )
  }
}