const Button = (props) =>{
    const {children , warna = "bg-green-500"} = props
    return (
      <button className={`${warna} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1`}>{children}</button>
  
  
    )
  }

export default Button