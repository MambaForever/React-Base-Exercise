import React, { Component } from 'react'
// 引入pubsub库
import PubSub from 'pubsub-js'
// 引入axios库
import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    let {value} = this.keyword
    // 校验输入数据的合法性
    if (!value.trim()) {
      return
    }
    try {
      // 通过pubsub发布消息改变请求状态
      PubSub.publish('updateState',{isFirst:false,isLoading:true})
      let result = await axios.get('https://api.github.com/search/users?q='+value.trim())
      // 通过pubsub发布消息改变请求状态
      PubSub.publish('updateState',{isLoading:false,users:result.data.items})
    } catch (error) {
      // 通过pubsub发布消息改变请求状态
      PubSub.publish('updateState',{isLoading:false,error:error.message})
    }


  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={node => this.keyword = node} placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
