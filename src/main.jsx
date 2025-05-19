import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout.jsx'
import AddCoffe from './components/AddCoffe/AddCoffe.jsx'
import CoffeDetails from './components/CoffeDetails/CoffeDetails.jsx'
import UpdateCoffe from './components/UpdateCoffe/UpdateCoffe.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        Component:App
      },
      {
        path:'/addcoffe',
        element:<AddCoffe/>
      },
      {
        path:"coffedetails/:id",
        loader:({params}) => fetch(`http://localhost:5000/coffes/${params.id}`),
        element:<CoffeDetails/>
      },
      {
        path:"coffeupdate/:id",
        loader:({params}) => fetch(`http://localhost:5000/coffes/${params.id}`),
        element:<UpdateCoffe/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
