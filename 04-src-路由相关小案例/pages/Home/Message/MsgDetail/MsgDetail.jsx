import React, { Component } from 'react'

export default class MsgDetail extends Component {
  state = {
    contents: [
      {id:'8',title:'kobe',comment:'keep moving!!'},
      {id:'24',title:'jesus',comment:'god bless you!'},
      {id:'81',title:'parents',comment:'we are all fine,keep healthy!'},
    ]
  }
  render() {
    let {contents} = this.state
    // 从路由组件的props中独有的属性match中获取传递的参数
    let {msgId} = this.props.match.params
    let currentContent = contents.find(content => content.id===msgId)
    return (
      <ul>
        <li>ID: {currentContent.id}</li>
        <li>user: {currentContent.title}</li>
        <li>content: {currentContent.comment}</li>
      </ul>
    )
  }
}
