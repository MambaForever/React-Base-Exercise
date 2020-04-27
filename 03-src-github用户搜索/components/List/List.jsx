import React, { Component } from 'react'
// 引入pubsub库
import PubSub from 'pubsub-js'
// 引入样式文件
import './list.css'

export default class List extends Component {
  state = {
    users: [],  // 请求得到的用户列表
    isFirst: true,  // 首次访问页面并没有进行搜索操作
    isLoading: false,  // 是否正在加载
    error: ''  // 是否请求出错
  }

  // 在此生命周期钩子中通过pubsub订阅事件
  componentDidMount(){
    // 参数为订阅消息的消息名和回调函数
    PubSub.subscribe('updateState',(msg,state) => {  // 回调函数的参数为: 1是固定的订阅发布的消息名 2才是组件间通信携带的数据
      this.setState(state)
    })
  }

  render() {
    let {users,isFirst,isLoading,error} = this.state
    let vDom = ''
    if (isFirst) {
      vDom = <h2>请输入用户关键字搜索</h2>
    }else if (isLoading) {
      vDom = <h2>Loading...</h2>
    }else if (error) {
      vDom = <h2>搜索出错: {error} </h2>
    }else {
      vDom = (
        users.map(user => {
          return (<div className="card" key={user.id}>
                    <a href={user.html_url} rel="noopener noreferrer" target="_blank">
                      <img src={user.avatar_url} alt='avatar'  style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                  </div>)
        })
        
      )
    }


    return (
      <div className="row">
        {vDom}
      </div>
    )
  }
}
