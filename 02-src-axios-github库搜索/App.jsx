import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    keyword: 'r',
    isLoading: true,
    mostStar: null,
    error: ''
  }

  async componentDidMount(){
    let {keyword} = this.state
    try {
      let result = await axios.get('https://api.github.com/search/repositories',{params:{q:keyword,sort:'stars'}})
      this.setState({isLoading:false,mostStar:result.data.items[0]})
    } catch (error) {
      this.setState({isLoading:false,error:error.message})
    }

  }

  render() {
    let {keyword,isLoading,mostStar,error} = this.state
    let vDom = ''
    if (isLoading) {
      vDom = <h2>Loading...</h2>
    }else if (error) {
      vDom = <h2>请求出错: {error}</h2>
    }else{
      vDom = <h2>在GitHub上搜索{keyword},点赞数最高的是: <a href={mostStar.html_url}>{mostStar.name}</a></h2>
    }
    return vDom
  }
}
