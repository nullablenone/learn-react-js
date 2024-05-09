import React from "react"
import Button from "./assets/components/Elements/Button/index.jsx"


function App() {

  return (
    <>
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-blue-500 text-3xl mb-2">Login</h1>
        <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
        <form action="">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-slate-700">Email</label>
            <input type="text" className="text-sm border border-slate-400 w-full rounded py-2 px-3 placeholder: opasitiy-50" 
            placeholder="example@gmail.com"/>
          </div>

          <div className="mb-2">
            <label htmlFor="" className="block text-sm font-bold mb-2 text-slate-700">Password</label>
            <input type="password" className="text-sm border border-slate-400 w-full rounded py-2 px-3 placeholder: opasitiy-50" 
            placeholder="******"/>
          </div>

          <Button warna="bg-blue-500 w-full">Sumbit</Button>
        </form>
        
      </div>
      

    </div>
    </>
      
  )
}


export default App;
