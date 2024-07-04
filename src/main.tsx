import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Blog } from './pages/Blog/index.tsx'
import { Post } from './pages/Post/index.tsx'

import { ptBR } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns'
setDefaultOptions({ locale: ptBR })

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
