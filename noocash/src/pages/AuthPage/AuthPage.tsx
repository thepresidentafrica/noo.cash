import { useParams } from "react-router-dom"
import { AuthSwitch } from "."

export const AuthPage = () => {
    const { option } = useParams()
    const AuthComponent = (AuthSwitch as any)()[option ? option : 'login']
    return (<>{AuthComponent}</>)
}