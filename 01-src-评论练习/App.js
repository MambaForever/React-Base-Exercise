import React,{Component} from 'react'
// 引入子组件
import Add from './components/Add/Add'
import List from './components/List/List'

export default  class App extends Component {

  state = {
    comments: [
      {id:1,userName:'kobe',content:'加油小吉,做自己领域的曼巴!'},
      {id:2,userName:'xiaoji',content:'努力证明自己!'},
      {id:3,userName:'family',content:'工作归工作,也要注意身体;家里一切都好,我们等你回来!'},
    ]
  }
  // 添加评论的方法
  addComment = (comment) => {
    let {comments} = this.state
    comments.unshift(comment)
    this.setState({
      comments
    })
  }
  // 删除评论的方法
  removeComment = (index) => {
    if (window.confirm('你确定要删除此条评论吗')) {
      let {comments} = this.state
      comments.splice(index,1)
      this.setState({comments})
    }
    
  }

  render(){
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment} />
          <List comments={this.state.comments} removeComment={this.removeComment} />
        </div>
      </div>
    )
  }
}
