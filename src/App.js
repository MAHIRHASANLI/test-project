import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import PostPage from './PostPage'
import DetailPage from './DetailPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        </Route>
        <Route path="/post" element={<PostPage />} />
        <Route path="/detail:/id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App