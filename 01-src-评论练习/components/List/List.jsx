import React, { Component } from 'react'
// 引入子组件
import Item from './Item/Item'
// 引入样式文件
import './list.css'

export default class List extends Component {
  render() {
    let {comments} = this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((comment,index) => <Item comment={comment} index={index} key={comment.id} removeComment={this.props.removeComment} />)}
          
        </ul>
      </div>
    )
  }
}
