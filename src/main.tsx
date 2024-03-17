import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/poppins'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App, Chat, Blog, Post, Product, Products } from './pages'
import { MainPageTemplate } from './templates'
import Calculator from './pages/Calculator'
import PregnancyCalendar from './pages/PregnancyCalendar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Order from './pages/Order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageTemplate />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },      
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/calculator',
        element: <Calculator />,
      },
      {
        path: '/calendar',
        element: <PregnancyCalendar />,
      },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])

// @ts-expect-error
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
