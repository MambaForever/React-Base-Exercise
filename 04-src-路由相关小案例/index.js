import React from 'react'
import ReactDOM from 'react-dom'
// 引入react路由库
import {BrowserRouter} from 'react-router-dom'

// 引入子组件
import App from './App'

// 渲染组件
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),document.querySelector('.root'))
