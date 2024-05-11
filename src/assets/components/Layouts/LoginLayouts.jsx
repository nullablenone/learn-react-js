import FormLogin from "../Flagments/FormLogin";

const LoginLayouts = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="font-bold text-blue-500 text-3xl mb-2">Login</h1>
                <p className="font-medium text-slate-500">Welcome, Please enter your details</p>

                <FormLogin />

            </div>


        </div>

    )
}

export default LoginLayouts