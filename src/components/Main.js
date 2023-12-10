import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Browse from './Browse';

const Main = () => {
 
  const appRoutes = createBrowserRouter([
    {
        path :"/",
        element:<Login />
    },
    {
        path: "/browse",
        element:<Browse />
    }

])


  return (
    <RouterProvider router ={appRoutes}>
         <Login />
    </RouterProvider>
   
  )
}

export default Main;