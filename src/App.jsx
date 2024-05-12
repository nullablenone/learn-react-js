import React from "react"
import Login from "./page/login";
import Register from "./page/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello word :)</h1>
  },
  
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}


export default App;
