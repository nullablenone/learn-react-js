import Button from "../Elements/Button";
import InputForm from "../Elements/Input/index";
const FormLogin = () => {
  return (
    <form action="">

      <InputForm name="email" label="Email" placeholder="example@gmail.com"></InputForm>

      <InputForm name="password" label="Password" placeholder="*******"></InputForm>

      <Button warna="bg-blue-500 w-full">Sumbit</Button>
    </form>

  )
}

export default FormLogin