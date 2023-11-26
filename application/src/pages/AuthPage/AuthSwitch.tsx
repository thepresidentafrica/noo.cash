import { RegisterForm, ForgotPasswordForm, NewPasswordForm } from "."
import { LoginForm } from "./Forms/Loginform"

export const AuthSwitch = () => {
    return {
        login: <><LoginForm/></>,
        register: <><RegisterForm/></>,
        'forgot-password': <><ForgotPasswordForm/></>,
        'new-password': <><NewPasswordForm/></>
    }
}