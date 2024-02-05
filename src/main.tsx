import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/cherry-bomb-one'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App, Chat, Blog, Post, Product } from './pages'
import { MainPageTemplate } from './templates'

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
        path: '/blog',
        element: <Blog />,
      },
      {
        path: 'post/:id',
        element: <Post />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
    ],
  },
])

// @ts-expect-error
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
