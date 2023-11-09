import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AllFood from './Components/AllFood/AllFood.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import MyOrder from './Components/MyOrder/MyOrder.jsx';
import MyAddedFood from './Components/MyAddedFood/MyAddedFood.jsx';
import AddAFood from './Components/AddAFood/AddAFood.jsx';
import SingleFood from './Components/SingleFood/SingleFood.jsx';
import OrderForm from './Components/OrderForm/OrderForm.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import UpdateFood from './Components/UpdateFood/UpdateFood.jsx';
import TopSellingFood from './Components/TopSellingFood/TopSellingFood.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    
      {
        path: '/',
        element: <Home></Home>,
      },
      
      {
        path: '/allFood',
        element:<AllFood></AllFood>,
       
        loader: () => fetch('http://localhost:5200/food')

      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/myOrder',
        element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
        loader: () => fetch('http://localhost:5200/order')
      },

      {
        path: '/myAddedFood',
        element:<PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
        loader: () => fetch('http://localhost:5200/food')

      },

      {
        path: '/addAFood',
        element:<PrivateRoute><AddAFood></AddAFood></PrivateRoute>
      },

      {
        path:'/food/:id',
        element: <SingleFood></SingleFood>,
        loader: ({ params }) => fetch(`http://localhost:5200/food/${params.id}`)
      },

      {
        path:'/update/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5200/food/${params.id}`)
      },

      {
        path:'/order/:id',
        element: <PrivateRoute><OrderForm></OrderForm></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5200/food/${params.id}`)
      },

      {
        path: '/',
        element:<TopSellingFood></TopSellingFood>,
        loader: () => fetch('http://localhost:5200/top-selling-food')
        
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
