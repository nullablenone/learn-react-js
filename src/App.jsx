import React from "react"
import Button from "./assets/components/Elements/Button/index.jsx"


function App() {

  return (
    <>
    <div className="flex justify-center bg-slate-800 min-h-screen items-center">
      <div>
        <Button warna="bg-red-500">Log in</Button>
        <Button warna="bg-slate-500"> Log out</Button>
        <Button warna="bg-indigo-500"> View</Button>
      </div>
      

    </div>
    </>
      
  )
}


export default App;
