const Label = (props) => {
    const { HtmlFor, children } = props
    return (
        <label htmlFor={HtmlFor} className="block text-sm font-bold mb-2 text-slate-700">{children}</label>

    )
}

export default Label