import React, { Component } from 'react'
// 从路由库中引入所需组件标签
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

// 引入一级路由组件
import Home from './pages/Home/Home'
import About from './pages/About/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
            </div>
          </div>
          {/* 注册路由 */}
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
            {/* 路由路径重定向(配置默认路由) */}
            <Redirect to='/about' />
            
          </Switch>

        </div>
      </div>
    )
  }
}
