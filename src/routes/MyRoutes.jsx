import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import CartPage from '../pages/CartPage'
import Categories from '../pages/Categories'
import CheckOutPage from '../pages/CheckOutPage'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetail' element={<BlogDetail/>}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/checkout' element={<CheckOutPage />}/>
    </Routes>
  )
}

export default MyRoutes