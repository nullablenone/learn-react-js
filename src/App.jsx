import React from "react"
import AuthLayouts from "./components/Layouts/AuthLayouts";
import FormLogin from "./components/Flagments/FormLogin";
function App() {

  return (
    <>
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>

    </>

  )
}


export default App;
