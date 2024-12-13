import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import makeHomePage from '../factory/home-page/home-page.factory'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={makeHomePage()}/>  
        <Route path='*' element={<h1>404 ERROR</h1>}/>  
      </Routes>
    </BrowserRouter>
  )

}
