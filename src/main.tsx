import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home'
import './index.css'
import '@fontsource/cherry-bomb-one'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
