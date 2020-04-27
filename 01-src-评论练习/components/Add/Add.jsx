import React, { Component } from 'react'
// 引入uuid模块
import {v4 as uuidv4} from 'uuid'

export default class Add extends Component {

  // 点击提交按钮的回调
  add = () => {
    let {userName,content} = this.refs
    // 做数据合法性校验
    if (!userName.value.trim()||!content.value.trim()) {
      return
    }
    // 使用uuid创建每个评论的唯一id
    let id = uuidv4()
    this.props.addComment({
      id,
      userName: userName.value.trim(),
      content: content.value.trim()
    })
    // 清空输入框
    userName.value = ''
    content.value = ''
  }

  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='userName' />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref='content' ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
