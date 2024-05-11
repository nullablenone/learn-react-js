const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input type={type} className="text-sm border border-slate-400 w-full rounded py-2 px-3 placeholder: opasitiy-50"
            placeholder={placeholder} name={name} />

    )

}

export default Input