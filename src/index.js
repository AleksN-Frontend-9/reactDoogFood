import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import App from './App'
import { ProductsList } from './components/Pages/ProductsList/ProductsList'
import { SignInForm } from './components/Pages/SignInForm/SignInForm'
import { SignUpForm } from './components/Pages/SignUpForm/SignUpForm'
import { Main } from './components/Main/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: 'signup',
        element: <SignUpForm />,
      },
      {
        path: 'signin',
        element: <SignInForm />,
      },
    ],
  },
])
// ,{ basename: '/reactDoogFood' }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)