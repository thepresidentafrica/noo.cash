import { RegisterForm, ForgotPasswordForm, NewPasswordForm } from "."
import { LoginForm } from "./Forms/Login"

export const AuthSwitch = () => {
    return {
        login: <><LoginForm/></>,
        register: <><RegisterForm/></>,
        'forgot-password': <><ForgotPasswordForm/></>,
        'new-password': <><NewPasswordForm/></>
    }
}