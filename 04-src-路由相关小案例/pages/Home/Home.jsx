import React, { Component } from 'react'
// 从react路由组件库按需引入组件标签
import {Route,Switch,NavLink,Redirect} from 'react-router-dom'
// 引入二级子路由
import Message from './Message/Message'
import News from './News/News'

export default class Home extends Component {
  
  render() {
    return (
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <div><h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="/home/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                  </li>
                </ul>
                {/* 注册二级路由 */}
                <Switch>
                  <Route path='/home/news' component={News} />
                  <Route path='/home/message' component={Message} />
                  <Redirect to='/home/news' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
