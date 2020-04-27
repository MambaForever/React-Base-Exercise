import React, { Component } from 'react'
// 从react路由组件库按需引入组件标签
import {Link,Route} from 'react-router-dom'

// 引入三级子路由
import MsgDetail from './MsgDetail/MsgDetail'

export default class Message extends Component {
  state = {
    msgs: [
      {id:'8',title:'信息01'},
      {id:'24',title:'信息02'},
      {id:'81',title:'信息03'},
    ]
  }

  render() {
    let {msgs} = this.state
    return (
      <div>
        <ul>
          {msgs.map(msg => {
            return (
              <li key={msg.id} >
                <Link to={`/home/message/${msg.id}`} replace >{msg.title}</Link>&nbsp;&nbsp;
              </li>
            )
          })}
        </ul>
        <hr />
        <Route path='/home/message/:msgId' component={MsgDetail} />
      </div>
    )
  }
}
