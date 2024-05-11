import Label from "../Label";
import Input from "../Input";

const InputForm = (props) => {
    const {label, name, placeholder} = props
    return (
        <div className="mb-6">
            <Label HtmlFor={name}>{label}</Label>
            <Input type={name} placeholder={placeholder} name={name}></Input>
            
          </div>
    )
}

export default InputForm

