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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allFood',
        element:<AllFood></AllFood>
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
        element:<MyOrder></MyOrder>
      },

      {
        path: '/myAddedFood',
        element:<MyAddedFood></MyAddedFood>
      },

      {
        path: '/addAFood',
        element:<AddAFood></AddAFood>
      },

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
