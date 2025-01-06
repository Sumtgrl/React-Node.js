import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import ShopPage from './pages/shoppage'
import ContactPage from './pages/contactpage'
import AuthPage from './pages/authpage'
import SepetPage from './pages/sepetpage'
import BlogPage from './pages/blogpage'
import BlogDetailsPage from './pages/blogdetailspage'
import ProductDetailsPage from './pages/productdetailspage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
      <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      <Route path="/sepet" element={<SepetPage></SepetPage>}></Route>
      <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
      <Route path="/blog/:id" element={<BlogDetailsPage></BlogDetailsPage>}></Route>
      <Route path="/product/:id" element={<ProductDetailsPage></ProductDetailsPage>}></Route>
    </Routes>
  )
}

export default App
