import 'bootstrap-icons/font/bootstrap-icons.css'
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
import { Provider } from 'react-redux'
import App from './App'
import { ProductsList } from './components/Pages/ProductsList/ProductsList'
import { SignInForm } from './components/Pages/Forms/SignInForm/SignInForm'
import { SignUpForm } from './components/Pages/Forms/SignUpForm/SignUpForm'
import { Main } from './components/Main/Main'
import { store } from './redux/store'
import { Cart } from './components/Pages/Cart/Cart'
import { Favourite } from './components/Pages/Favourite/Favourite'
import { Profile } from './components/Pages/Profile/Profile'
import { AddProductForm } from './components/Pages/Forms/AddProductForm/AddProductForm'
import { DetailPage } from './components/Pages/DetailPage/DetailPage'

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
        path: 'products/:productId',
        element: <DetailPage />,
      },
      {
        path: 'signup',
        element: <SignUpForm />,
      },
      {
        path: 'signin',
        element: <SignInForm />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'favourite',
        element: <Favourite />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'addNewProduct',
        element: <AddProductForm />,
      },
    ],
  },
], { basename: '/reactDoogFood' })

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
