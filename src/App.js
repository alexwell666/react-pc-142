import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
// import Login from './pages/Login'

// import Login from '@/pages/Login'
import Login from '@/pages/Login'

import React from 'react'
import { Button } from 'antd'



function App () {
  return (
    //路由配置

    <BrowserRouter>
      <div className="App">
        <Button type="primary">Primary Button</Button>
        <Routes>
          //创建路由path和组件度一应关系
          <Route path='/' element={<Layout />} ></Route>
          <Route path='/login' element={<Login />} ></Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App