import React, { Component } from 'react'
// 引入样式文件
import './item.css'

export default class Item extends Component {
  render() {
    let {index} = this.props
    let {userName,content} = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={() => {this.props.removeComment(index)}}>删除</a>
        </div>
        <p className="user"><span >{userName}</span><span>说:</span></p>
        <p className="centence">{content}!</p>
      </li>
    )
  }
}
