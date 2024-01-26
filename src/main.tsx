import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/cherry-bomb-one'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './pages/Home/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])
// @ts-expect-error
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
